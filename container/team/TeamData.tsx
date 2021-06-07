type TeamDataProps = {
  title: String;
  numberData: number;
};
export const TeamData = (props: TeamDataProps) => {
  return (
    <div className="border-gray-400 border-b py-5 h-1/4">
      <h4 className="text-base text-center">{props.title}</h4>
      <h1 className="text-3xl text-center font-bold mt-10">
        {props.numberData}
      </h1>
    </div>
  );
};
