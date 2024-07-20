import React from 'react';

const EcoLabelledProducts = () => {
  return (
    <section className="flex flex-col items-start py-6 pr-16 pl-5 w-full font-black rounded-2xl shadow-xl bg-blue-600 bg-opacity-40 max-md:px-5 max-md:mt-3.5">
      <h2 className="text-3xl text-white">
        Eco <br /> Labelled <br /> Products
      </h2>
      <button className="justify-center px-7 py-1.5 mt-10 text-xl whitespace-nowrap bg-white rounded-[29.688px] text-blue-600 text-opacity-80 max-md:px-5">
        Explore
      </button>
    </section>
  );
};

export default EcoLabelledProducts;