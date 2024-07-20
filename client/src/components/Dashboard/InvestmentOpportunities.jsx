import React from 'react';

const InvestmentOpportunities = () => {
  return (
    <section className="flex flex-col items-center px-9 pt-8 pb-20 w-full bg-white rounded-2xl shadow-[0px_119px_33px_rgba(31,107,178,0)] max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-5 items-start self-stretch text-3xl font-extrabold text-black max-md:flex-wrap max-md:max-w-full">
        <h2 className="flex-auto">Investment Opportunities</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e73260392615e1dc4e5a184e44e6eccdd5f32b5a5a5fc9a75a610c5c4883b38?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&" alt="" className="shrink-0 mt-4 aspect-[0.29] w-[9px]" />
      </div>
      <div className="flex gap-5 justify-between self-start mt-6 ml-7 max-w-full text-sm text-neutral-400 w-[267px] max-md:ml-2.5">
        <button className="justify-center items-start px-3 py-2 rounded-lg border border-solid border-neutral-400 max-md:pr-5">
          low to high
        </button>
        <button className="justify-center items-start px-3 py-2 whitespace-nowrap rounded-lg border border-solid border-neutral-400 max-md:pr-5">
          plantation
        </button>
      </div>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="shrink-0 mt-11 max-w-full h-px border border-solid bg-stone-300 border-stone-300 w-[585px] max-md:mt-10" />
      ))}
    </section>
  );
};

export default InvestmentOpportunities;