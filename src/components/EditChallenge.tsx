import { Form, Button } from "react-bootstrap";
import data from "../data/data.json";
import one from "../assets/one.jpeg";
import { ArrowRight, Image } from "lucide-react";

export default function EditChallenge() {
  const card = data.find((item) => item.id === 1);
  return (
    <div className="mr-auto ml-[5%] max-w-3xl mt-14 p-4 bg-white">
      <div className="mb-8">
        <span className="text-2xl font-bold">Edit Challenge</span>
      </div>

      <Form>
        <Form.Group className="mb-4 max-w-[20rem]">
          <Form.Label>Challenge Name</Form.Label>
          <Form.Control type="text" value={card?.title} />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Add start date"
            value={"2022-06-17T21:00"}
          />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Add end date"
            value={"2022-06-21T23:00"}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            value={"Identify the class to which each butterfly belongs to"}
          />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>Image</Form.Label>
          {/* <Form.Control type="file" accept="image/*" placeholder="Add image" /> */}
          <div className="p-4 flex flex-col gap-4 cursor-pointer">
            <img
              src={card?.image === "one" ? one : ""}
              alt="Challenge Image"
              className="max-w-full rounded-2xl"
            />
            <span className="text-[#44924C] flex items-center">
              <Image className="inline-block mr-2 size-4" />
              <span className="font-medium text-sm mr-2">Change Image</span>
              <ArrowRight className="inline-block size-4 text-[#44924C]" />
            </span>
          </div>
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>Level Type</Form.Label>
          <Form.Select aria-label="Level" value={card?.level}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </Form.Select>
        </Form.Group>

        <div className="">
          <Button
            variant="success"
            type="submit"
            style={{ borderRadius: "0.7rem" }}
          >
            Create Challenge
          </Button>
        </div>
      </Form>
    </div>
  );
}
