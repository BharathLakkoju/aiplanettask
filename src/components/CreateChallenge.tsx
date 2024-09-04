import { Form, Button } from "react-bootstrap";

export default function CreateChallenge() {
  return (
    <div className="mr-auto ml-[5%] max-w-3xl mt-14 p-4 bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Challenge Details</h2>
      </div>

      <Form>
        <Form.Group className="mb-4 max-w-[20rem]">
          <Form.Label>Challenge Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" placeholder="Add start date" />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" placeholder="Add end date" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={7} />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" accept="image/*" placeholder="Add image" />
        </Form.Group>

        <Form.Group className="mb-4 max-w-[15rem]">
          <Form.Label>Level Type</Form.Label>
          <Form.Select aria-label="Level">
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
