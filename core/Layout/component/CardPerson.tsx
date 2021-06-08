type TCardPerson = {
  rank: number;
  image: string;
  name: string;
  sales: number;
  target: number;
  percent: number;
};
export const CardPerson = (props: TCardPerson) => {
  return (
    <div className="flex md:w-1/2 w-full m-2 shadow-lg rounded-md">
      <div className="bg-green-700 flex justify-center items-center w-1/5 rounded-md">
        <span className="text-white text-xl font-bold">{props.rank}</span>
      </div>
      <div className="flex p-2  w-4/5 ">
        <div className="flex items-center justify-center w-1/3">
          <img className="rounded-full w-full h-auto" src={props.image} />
        </div>
        <div className="p-2  w-2/3">
          <div className="flex items-center justify-center ">
            <span className="md:text-xl text-md font-600 text-center">
              {props.name}
            </span>
          </div>

          <div className=" flex justify-between font-500 my-1">
            <span className="font-medium">Targets</span>
            <span className="font-bold text-blue-500">{props.target}</span>
          </div>
          <div className=" flex  justify-between my-1">
            <span className="font-medium">Sales</span>
            <span className="font-bold text-green-500">{props.sales}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative flex items-center w-2/3">
              <div className="overflow-hidden h-4 w-full  text-xs flex rounded-full bg-gray-200">
                {renderPercentOfChart(props.percent)}
              </div>
            </div>
            <span className="text-base mx-1 font-medium">{props.percent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderPercentOfChart = (percent: number) => {
  const ruler = Math.round(percent / 10);
  return (
    <div
      className={`shadow-none w-${ruler}/10 flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400`}
    ></div>
  );
};
