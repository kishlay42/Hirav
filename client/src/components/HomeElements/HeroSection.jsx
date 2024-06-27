import React from "react";

const HeroSection = () => {
  return (
    <div className=" flex flex-row my-24 mx-10">
      {/* herotitle */}
      <div className="flex gap-5 w-3/5">
        <div className="flex flex-col px-10 ">
          <div className="text-7xl font-extrabold  ">
            Invest in the
            <br />
            <span className="text-8xl font-extrabold  text-teal-400">
              Green Credit Program
            </span>
          </div>
          <div className="mt-4 text-3xl font-semibold ">
            Get yourself custom investment plans and expert guidance on the
            whole process.
          </div>
          {/* button */}
          <div className="flex gap-5 my-10 self-start px-5 py-2 ml-40 text-2xl font-extrabold text-white bg-[#3030FF] rounded-3xl ">
          <div className="grow">Start now</div>
          <img
            loading="lazy"
            src="/img/arrow-1-4.svg"
            className="shrink-0 w-9 "
          />
        </div>
      </div>
      </div>
      {/* globe */}
      <div className="flex  ml-5 pl-10 ">
        <img
          loading="lazy"
          srcSet="/img/https-lottiefiles-com-animations-globe-pxrotzvjlh.gif"
          className="grow w-full  aspect-[1.2]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
