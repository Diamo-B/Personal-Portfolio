const HalfCircle = () => {
  return (
    <div className="sticky top-32">
      <div className="w-96 h-96 border-r-8 border-white rounded-full grid grid-col-1">
        <div className="flex justify-end">
          <button className="border-2 rounded-full border-white text-slate-900 font-bold text-xl bg-white w-28 h-10 mr-24">
            Front-end
          </button>
        </div>
        <div className="flex items-center justify-between pl-20 -mr-5">
          <h1 className="text-white font-bold text-4xl font-itim ">My Skills</h1>
          <button className="border-2 rounded-full border-white text-slate-900 font-bold text-xl bg-white w-28 h-10">
            Back-end
          </button>
        </div>
        <div className="flex items-end justify-end mr-24">
          <button className="border-2 rounded-full border-white text-slate-900 font-bold text-xl bg-white w-28 h-10">
            Others
          </button>
        </div>
      </div>
    </div>
  );
};

export default HalfCircle;
