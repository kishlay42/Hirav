import React from 'react';

const TrendingOpportunities = () => {
  const opportunities = [
    {
      title: "Lonawala, Tree plantation",
      area: "14 hectares",
      duration: "4 ~ 5 years",
      credits: 10,
      color: "bg-green-400",
      description: "The Lonavala Tree Plantation project is a dedicated afforestation initiative aimed at revitalizing a 14-hectare area in the scenic region of Lonavala. Over the span of 2 to 3 years, this project focuses on planting native tree species to restore biodiversity, improve soil health, and sequester carbon dioxide, contributing significantly to climate change mitigation."
    },
    {
      title: "Jaipur, Solar Energy Initiative",
      area: "14 hectares",
      duration: "4 ~ 5 years",
      credits: 10,
      color: "bg-yellow-400",
      description: "The Lonavala Tree Plantation project is a dedicated afforestation initiative aimed at revitalizing a 14-hectare area in the scenic region of Lonavala. Over the span of 2 to 3 years, this project focuses on planting native tree species to restore biodiversity, improve soil health, and sequester carbon dioxide, contributing significantly to climate change mitigation."
    },
    {
      title: "Udaipur, Lake Rejuvenation",
      area: "14 hectares",
      duration: "4 ~ 5 years",
      credits: 10,
      color: "bg-blue-500",
      description: "The Lonavala Tree Plantation project is a dedicated afforestation initiative aimed at revitalizing a 14-hectare area in the scenic region of Lonavala. Over the span of 2 to 3 years, this project focuses on planting native tree species to restore biodiversity, improve soil health, and sequester carbon dioxide, contributing significantly to climate change mitigation."
    }
  ];

  return (
    <section className="flex flex-col items-center px-5 mt-48 w-full max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-black text-black">
        Trending GCP Opportunities
      </h2>
      <div className="mt-10 w-full max-w-[1628px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard key={index} {...opportunity} />
          ))}
        </div>
      </div>
    </section>
  );
};

const OpportunityCard = ({ title, area, duration, credits, color, description }) => {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-7 py-10 w-full bg-white shadow-xl rounded-[38.72px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow py-1.5 text-xl text-black max-md:mt-10">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-5 font-black">{area}</p>
                  <p className="mt-5 text-base font-medium text-neutral-400">{duration}</p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                <div className="mt-11 text-xl font-bold leading-5 text-center text-black max-md:mt-10">
                  {credits} <br /> credits
                </div>
              </div>
            </div>
          </div>
          <div className={`shrink-0 self-start w-4 h-4 ${color} rounded-full`} />
        </div>
        <p className="mt-8 text-lg leading-6 text-justify text-black max-md:max-w-full">
          description: {description}
        </p>
        <button className="self-center px-6 py-1 mt-11 text-xl font-extrabold text-white whitespace-nowrap bg-blue-600 rounded-2xl max-md:px-5 max-md:mt-10">
          Invest
        </button>
      </div>
    </div>
  );
};

export default TrendingOpportunities;