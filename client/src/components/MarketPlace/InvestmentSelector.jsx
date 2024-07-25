import React from "react";

const InvestmentSelector = () => {
  return (
    <section className="flex flex-col self-end mt-5 mr-5 max-w-full w-full max-md:mr-2.5">
      <div className="flex gap-5 justify-center px-px w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-3.5 py-px text-sm text-neutral-400">
          <button className="py-1.5 rounded-xl border border-solid border-neutral-400">
            low to high
          </button>
          <button className="py-1.5 whitespace-nowrap rounded-xl border border-solid border-neutral-400">
            plantation
          </button>
        </div>
        <div className="my-auto text-base font-bold text-neutral-400">
          sort and filter
        </div>
      </div>
      <div className="flex flex-row px-24 gap-20 mx-auto">
        <div>
          <InvestmentCard
            name="Bangalore Tree Plantation/2.7 acre"
            duration="10 years"
            credits="130"
          />
          <InvestmentCard
            name="Ahmedabad Tree Plantation/3.0 acre"
            duration="10 years"
            credits="100"
          />
          <InvestmentCard
            name="Surat Tree Plantation/2.9 acre"
            duration="12 years"
            credits="110"
          />
        </div>
        <div>
          <InvestmentCard
            name="Nagpur Tree Plantation/3.3 acre"
            duration="11 years"
            credits="120"
          />
          <InvestmentCard
            name="Indore Tree Plantation/2.6 acre"
            duration="10 years"
            credits="115"
          />
          <InvestmentCard
            name="Vadodara Tree Plantation/3.4 acre"
            duration="10 years"
            credits="105"
          />
        </div>
      </div>

      {/* <div className="flex gap-3 justify-between items-center self-center pr-1.5 mt-8">
        <div className="shrink-0 self-stretch bg-blue-600 rounded-full h-[18px] w-[18px]" />
        <div className="shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[9px] w-[9px]" />
        <div className="shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[9px] w-[9px]" />
        <div className="shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[9px] w-[9px]" />
        <div className="shrink-0 self-stretch my-auto w-2 rounded-full bg-zinc-300 h-[9px]" />
      </div> */}
    </section>
  );
};

const InvestmentCard = (props) => {
  return (
    <div className="flex flex-col px-8 py-5 mt-7 bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
          <h3 className="text-2xl font-bold text-black">
            {props.name || "Jaipur, Solar Energy Initiative"}
          </h3>
          <p className="mt-4 text-xl font-medium text-neutral-400">
            {props.duration || "5 years"}
          </p>
        </div>
        <div className="flex flex-col text-2xl font-bold leading-6 text-center text-black whitespace-nowrap">
          <div className="shrink-0 self-end w-5 h-5 bg-green-400 rounded-full" />
          <div className="mt-2">
            {props.credits || "0"}
            <br /> credits
          </div>
        </div>
      </div>
      <button className="self-center px-3 py-3 mt-4 text-lg font-semibold text-justify text-black rounded-xl border border-black border-solid">
        view project
      </button>
    </div>
  );
};

export default InvestmentSelector;
