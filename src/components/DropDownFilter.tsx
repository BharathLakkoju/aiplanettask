import React, { useState } from "react";
import { Dropdown, Card, InputGroup, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircleCheckBig, Search, XCircle } from "lucide-react";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";
import six from "../assets/six.jpeg";
import { useNavigate } from "react-router-dom";

interface DataItem {
  id: number;
  title: string;
  image: string;
  startsin?: {
    days: string;
    hours: number;
    minutes: number;
  };
  endsin?: {
    days: string;
    hours: number;
    minutes: number;
  };
  endedon?: string;
  status: string;
  level: string;
}

interface FilterState {
  status: string[];
  level: string[];
}

interface DropdownFilterProps {
  data: DataItem[];
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ data }) => {
  let navigate = useNavigate();
  const handleDetails = () => {
    let path = "/details";
    navigate(path);
  };
  const [filters, setFilters] = useState<FilterState>({
    status: [],
    level: [],
  });
  const getImage = (index: string) => {
    switch (index) {
      case "one":
        return one;
      case "two":
        return two;
      case "three":
        return three;
      case "four":
        return four;
      case "five":
        return five;
      case "six":
        return six;
    }
  };
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const statuses = ["all", "active", "upcoming", "past"];
  const levels = ["easy", "medium", "hard"];

  const handleFilterChange = (type: keyof FilterState, value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (value === "all") {
        updatedFilters[type] = [];
        setSelectedFilters([]);
      } else if (updatedFilters[type].includes(value)) {
        updatedFilters[type] = updatedFilters[type].filter(
          (item) => item !== value
        );
        setSelectedFilters(
          selectedFilters.filter((filter) => filter !== value)
        );
      } else {
        updatedFilters[type].push(value);
        setSelectedFilters([...selectedFilters, value]);
      }
      setShowDropdown(false);
      return updatedFilters;
    });
  };

  const removeFilter = (filter: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      Object.keys(updatedFilters).forEach((key) => {
        updatedFilters[key as keyof FilterState] = updatedFilters[
          key as keyof FilterState
        ].filter((item) => item !== filter);
      });
      return updatedFilters;
    });
    setSelectedFilters(selectedFilters.filter((item) => item !== filter));
  };

  const filteredData = data.filter((item) => {
    const statusMatch =
      filters.status.length === 0 || filters.status.includes(item.status);
    const levelMatch =
      filters.level.length === 0 || filters.level.includes(item.level);
    return statusMatch && levelMatch;
  });

  return (
    <>
      <section className="bg-[#002A3B] w-full">
        <div className="flex flex-col w-full justify-center items-center gap-2 pt-10 pb-5">
          <div className="text-white pb-10">
            <span className="text-xl font-medium">Explore Challenges</span>
          </div>
          <div className="flex justify-center items-center gap-2 w-[calc(100%-30rem)]">
            <div className="flex justify-center items-center gap-2 p-0 m-0 max-w-[calc(100%-30rem)] min-w-[calc(100%-40rem)]">
              <InputGroup className="">
                <InputGroup.Text id="basic-addon1">
                  <Search />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
            </div>
            <Dropdown
              show={showDropdown}
              onToggle={(isOpen) => setShowDropdown(isOpen)}
            >
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  width: "10rem",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu className="p-3">
                <div>
                  <strong>Status</strong>
                  {statuses.map((status) => (
                    <div key={status} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`status-${status}`}
                        checked={filters.status.includes(status)}
                        onChange={() => handleFilterChange("status", status)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`status-${status}`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
                <hr />
                <div>
                  <strong>Level</strong>
                  {levels.map((level) => (
                    <div key={level} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`level-${level}`}
                        checked={filters.level.includes(level)}
                        onChange={() => {
                          handleFilterChange("level", level);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`level-${level}`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 w-[calc(100%-40rem)] pb-10 -pt-5 mx-auto">
          {selectedFilters.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-3">
              {selectedFilters.map((filter, index) => (
                <div
                  key={index}
                  className="bg-[#F8F9FD7D] text-white px-3 py-2 rounded-full flex items-center cursor-pointer"
                  onClick={() => removeFilter(filter)}
                >
                  {filter}
                  <XCircle className="ml-2 size-5" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#003145] min-w-full py-20">
        <div className="grid md:grid-cols-3 w-[calc(100%-20rem)] md:w-[calc(100%-30rem)] mx-auto justify-center items-center gap-5">
          {filteredData.map((challenge, index) => (
            <Card
              key={index}
              className="bg-white text-[#002b36] max-w-[20rem] h-[20rem] rounded-xl overflow-hidden"
              style={{
                borderRadius: "1rem",
              }}
            >
              <img
                src={getImage(challenge.image)}
                alt={challenge.title}
                className="w-full h-52 object-cover rounded-t-xl scale-105"
              />
              <Card.Text className="px-4 pt-4 w-full flex flex-col justify-center items-center gap-1 rounded-xl">
                <div
                  className={`flex justify-center items-center px-2 py-1 rounded text-xs mb-2 w-fit ${
                    challenge.status === "upcoming"
                      ? "bg-yellow-200 text-yellow-800"
                      : challenge.status === "active"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {challenge.status.charAt(0).toUpperCase() +
                    challenge.status.slice(1)}
                </div>
                <Card.Title className="text-lg text-center mb-2 min-h-[4rem]">
                  <span className="font-medium">{challenge.title}</span>
                </Card.Title>
                {challenge.startsin ? (
                  <span className="text-sm mb-2 flex flex-col justify-center items-center">
                    <span>Starts in</span>
                    <div className="grid grid-cols-5 gap-2 justify-center items-center text-center">
                      <span>{challenge.startsin.days}</span>
                      {":"}
                      <span>{challenge.startsin.hours}</span>
                      {":"}
                      <span>{challenge.startsin.minutes}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 justify-center items-center text-center">
                      <span>Days</span>
                      <span>Hours</span>
                      <span>Mins</span>
                    </div>
                  </span>
                ) : challenge.endsin ? (
                  <span className="text-sm mb-2 flex flex-col justify-center items-center">
                    <span>Starts in</span>
                    <div className="grid grid-cols-5 gap-2 justify-center items-center text-center">
                      <span>{challenge.endsin.days}</span>
                      {":"}
                      <span>{challenge.endsin.hours}</span>
                      {":"}
                      <span>{challenge.endsin.minutes}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 justify-center items-center text-center">
                      <span>Days</span>
                      <span>Hours</span>
                      <span>Mins</span>
                    </div>
                  </span>
                ) : (
                  <span className="text-sm mb-2 flex flex-col justify-center items-center gap-3">
                    <span>Ended on</span>
                    <span className="font-medium">{challenge.endedon}</span>
                  </span>
                )}
              </Card.Text>
              <div className="p-4 pt-0 flex justify-center items-center">
                <button
                  className="w-fit bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md text-sm flex justify-center items-center"
                  onClick={handleDetails}
                >
                  <CircleCheckBig className="inline-block mr-1 size-4" />
                  <span>Participate Now</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default DropdownFilter;
