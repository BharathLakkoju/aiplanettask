import { Button } from "react-bootstrap";
import level from "../assets/carbon_skill-level-basic.png";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChallengeDetail = () => {
  let navigate = useNavigate();
  const handleEdit = () => {
    let path = "/edit";
    navigate(path);
  };
  return (
    <div className="pt-[4rem]">
      <div className="bg-[#003145] text-white h-[30rem] my-auto py-10 flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <span className="bg-[#FFCE5C] text-black px-3 py-2   rounded text-sm mb-2 flex w-fit justify-center items-center font-medium">
                <Clock className="size-4 mr-1" /> Starts on 17th Jun'22 09:00 PM
                (India Standard Time)
              </span>
              <span className="text-5xl font-bold mb-2">
                Data Sprint 72 - Butterfly Identification
              </span>
              <span className="text-lg mb-4">
                Identify the class to which each butterfly belongs to
              </span>
              <span className="bg-gray-100 text-blue-900 px-3 py-1 rounded inline-flex items-center max-w-fit">
                <img src={level} alt="Level" className="size-4 mr-2" />
                <span className="font-medium text-emerald-700">Easy</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen mx-auto px-4 my-4 shadow-md">
        <div className="flex border-b my-4 justify-between py-2 w-[calc(100%-40rem)] mx-auto">
          <div className="mr-4">
            <button className="text-green-600 font-semibold border-b-2 border-green-600 py-2 focus:outline-none">
              Overview
            </button>
          </div>
          {/* Add more tabs if needed */}
          <div className="flex space-x-2">
            <Button
              variant="success"
              className="rounded-lg"
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button variant="danger" className="rounded-lg">
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 text-lg w-screen">
        <span className="text-gray-800 mb-4 flex flex-col gap-4 max-w-5xl mx-auto">
          <span>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </span>
          <span>
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </span>
          <span>
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </span>
        </span>
        {/* Add more content as per your needs */}
      </div>
    </div>
  );
};

export default ChallengeDetail;
