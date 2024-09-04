import ChallengeList from "./ChallengeList";
import rocket from "../assets/rocket.png";
import aimodel from "../assets/eos-icons_ai.png";
import datasc from "../assets/eos-icons_data-scientist.png";
import aiheal from "../assets/eos-icons_ai-healing.png";
import notebook from "../assets/carbon_notebook-reference.png";
import member from "../assets/Vector.svg";
import robot from "../assets/Robot.png";
import identity from "../assets/identity.png";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function HomePage() {
  let navigate = useNavigate();
  const handleCreate = () => {
    let path = "/create";
    navigate(path);
  };
  return (
    <>
      <main className="pt-[4rem]">
        <section className="bg-[#003145] min-w-full h-[30rem]">
          <div className="flex justify-center gap-20 mx-auto w-[80%] items-center py-[5%]">
            <div className="max-w-2xl flex flex-col gap-4 w-[calc(100%-1rem)]">
              <span className="text-[2rem] font-bold text-white border-l-8 border-yellow-500 pl-10 flex flex-col">
                Accelerate Innovation
                <span>with Global AI Challenges</span>
              </span>
              <span className="text-white text-sm pl-12 max-w-lg">
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </span>
              <div className="pl-12 pt-4 text-sm">
                <Button
                  variant="contained"
                  onClick={handleCreate}
                  className="text-black bg-white max-w-[10rem] font-medium px-3 py-2 rounded-md hover:bg-gray-100 "
                >
                  <span className="text-sm">Create Challenge</span>
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center w-80 h-80 pt-16">
              <img src={rocket} alt="rocket" className="w-80 rotate-[20deg]" />
            </div>
          </div>
        </section>
        <section className="bg-[#002A3B] min-w-full">
          <div className="flex justify-center py-12 w-[calc(100%-10rem)] mx-auto gap-20 text-white">
            <div className="flex gap-10 items-center">
              <div className="p-3 bg-gray-200 rounded-xl w-fit mx-auto">
                <img src={aimodel} alt="aimodel" className="size-6" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl font-medium">100K+</span>
                <span className="text-xs">AI model submissions</span>
              </div>
            </div>
            <div className="w-[1px] h-[50px] bg-gray-400 rounded-full my-auto"></div>
            <div className="flex gap-10 items-center">
              <div className="p-3 bg-gray-200 rounded-xl w-fit mx-auto">
                <img src={datasc} alt="datasc" className="size-5" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl font-medium">50K+</span>
                <span className="text-xs">Data Scientists</span>
              </div>
            </div>
            <div className="w-[1px] h-[50px] bg-gray-400 rounded-full my-auto"></div>
            <div className="flex gap-10 items-center">
              <div className="p-3 bg-gray-200 rounded-xl w-fit mx-auto">
                <img src={aiheal} alt="aiheal" className="size-5" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl font-medium">100+</span>
                <span className="text-xs">AI Challenges hosted</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white min-w-full h-[35rem] my-auto">
          <div className="flex flex-col justify-center items-center gap-4 py-12">
            <span className="font-bold text-black text-2xl">
              Why Participate in{" "}
              <span className="text-green-500">AI Challenges?</span>
            </span>
          </div>
          <div className="flex flex-col gap-10 mx-auto justify-center items-center w-[calc(100%-10rem)] my-auto">
            <div className="flex gap-10">
              <div className="bg-gray-100 max-w-sm p-4 rounded-md flex flex-col gap-2">
                <img src={notebook} alt="prove" className="size-7" />
                <span className="text-xl font-medium">Prove your skills</span>
                <span className="text-xs">
                  Gain substantial experience by solving real-world problems and
                  pit against others to come up with innovative solutions.
                </span>
              </div>
              <div className="bg-gray-100 max-w-sm p-4 rounded-md flex flex-col gap-2">
                <img src={member} alt="prove" className="size-7" />
                <span className="text-xl font-medium">
                  Learn from community
                </span>
                <span className="text-xs">
                  One can look and analyze the solutions submitted by the other
                  Data Scientists in the community and learn from them.
                </span>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="bg-gray-100 max-w-sm p-4 rounded-md flex flex-col gap-2">
                <img src={robot} alt="prove" className="size-7" />
                <span className="text-xl font-medium">Challenge yourself</span>
                <span className="text-xs">
                  There is nothing for you to lose by participating in a
                  challenge. You can fail safe, learn out of the entire
                  experience and bounce back harder.
                </span>
              </div>
              <div className="bg-gray-100 max-w-sm p-4 rounded-md flex flex-col gap-2">
                <img src={identity} alt="prove" className="w-7 h-6" />
                <span className="text-xl font-medium">Earn Recognition</span>
                <span className="text-xs">
                  You will stand out from the crowd if you do well in AI
                  challenges, it not only helps you shine in the community but
                  also earns rewards.
                </span>
              </div>
            </div>
          </div>
        </section>
        <ChallengeList />
      </main>
    </>
  );
}
