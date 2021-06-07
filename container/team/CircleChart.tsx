export const CirlecChart = () => {
  return (
    <div className=" py-5 h-1.5/4">
      <h4 className="text-base text-center">% of Target</h4>
      <div className="circle_box flex items-center justify-center mt-10">
        <div className="circle border-8 w-32 h-32 border-yellow-400 relative rounded-full">
          <div className="absolute  right-0 top-0 mt-9 mr-4">
            <span className="text-3xl text-center font-bold mt-10">101%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
