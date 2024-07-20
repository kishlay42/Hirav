import React from 'react';

const InvestmentChart = () => {
  const months = ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'];

  return (
    <section className="flex flex-col items-center px-6 py-10 bg-white rounded-3xl shadow-xl max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 self-stretch font-extrabold max-md:flex-wrap max-md:max-w-full">
        <h2 className="flex-auto text-3xl text-black">Investments</h2>
        <span className="my-auto text-xl tracking-tighter text-neutral-300">1 Y</span>
      </div>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a70f06892db12870ba4f732466cfd8f751ddb284b8c865e83f4f76dd53fe333?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&" 
        alt="Investment chart for the past year" 
        className="mt-9 max-w-full aspect-[3.45] border-[3px] stroke-[3.125px] stroke-blue-600 w-[461px]" 
      />
      <div className="flex gap-5 justify-between mt-6 max-w-full text-sm font-semibold whitespace-nowrap text-neutral-400 w-[452px] max-md:flex-wrap">
        {months.map((month, index) => (
          <span key={index}>{month}</span>
        ))}
      </div>
    </section>
  );
};

export default InvestmentChart;