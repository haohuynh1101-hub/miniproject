import { IncreaseIcon, DecreaseIcon } from "component";

type TeamDataProps = {
  title: String;
  numberData: number;
};
export const TeamData = (props: TeamDataProps) => {
  return (
    <div className="border-gray-400 border-b py-4 flex flex-col items-center">
      <div>
        <h4 className="text-base text-center">{props.title}</h4>
      </div>
      <div className=" mt-10">
        <h1 className="text-3xl text-center font-bold">{props.numberData}</h1>
      </div>
      <div className="flex">
        <IncreaseIcon /> <span className="text-green-700">to Yesterday</span>
      </div>
    </div>
  );
};
