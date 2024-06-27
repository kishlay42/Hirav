import React from "react";

const GreenCredit = () => {
  return (
    <div className="w-96 h-96 relative">
      <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-xl shadow" />
      <div className="w-96 h-96 left-[120px] top-[127px] absolute">
        <div className="w-96 h-8 left-[0.10px] top-0 absolute text-center text-black text-4xl font-bold font-['Source Sans Pro']">
          First Ever Green Credit Investment Planner
        </div>
        <div className="w-96 h-8 left-[0.10px] top-[65.52px] absolute text-center text-zinc-600 text-2xl font-normal font-['Source Sans Pro']">
          Empower your investments with a sustainable touch
        </div>
        <div className="w-96 h-52 left-0 top-[129.88px] absolute flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-96 text-black text-xl font-normal font-['Source Sans Pro']">
            {" "}
            First planner for green credit investments.
          </div>
          <div className="text-black text-xl font-normal font-['Source Sans Pro']">
            Invest sustainably.
          </div>
          <div className="text-black text-xl font-normal font-['Source Sans Pro']">
            Evaluate environmental impact.
          </div>
          <div className="w-96 text-black text-xl font-normal font-['Source Sans Pro']">
            Trend-based recommendations.
          </div>
          <div className="w-96 text-black text-xl font-normal font-['Source Sans Pro']">
            Monitor investments continuously.
          </div>
        </div>
        <div className="w-48 h-11 left-[282px] top-[433.88px] absolute">
          <div className="w-48 h-11 left-0 top-0 absolute bg-indigo-600 rounded-3xl" />
          <div className="w-40 h-7 left-[23.81px] top-[8.74px] absolute">
            <div className="w-36 left-0 top-0 absolute text-white text-2xl font-extrabold font-['Inter']">
              Invest Now
            </div>
          </div>
        </div>
        <img
          className="w-96 h-80 left-[873px] top-[86px] absolute"
          src="https://via.placeholder.com/400x308"
        />
        <img
          className="w-16 h-24 left-[1149px] top-[40px] absolute shadow"
          src="https://via.placeholder.com/61x100"
        />
      </div>
    </div>
  );
};

export default GreenCredit;
