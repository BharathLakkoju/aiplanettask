import "../index.css";
import challenges from "../data/data.json";
import DropdownFilter from "./DropDownFilter";

export default function ChallengeList() {
  return (
    <>
      <DropdownFilter data={challenges} />
    </>
  );
}
