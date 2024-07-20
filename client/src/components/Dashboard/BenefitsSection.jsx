import React from 'react';

const BenefitItem = ({ title, description }) => (
  <div className="flex flex-col items-start pt-5 pr-20 pb-8 pl-5 mt-5 rounded-xl bg-blue-600 bg-opacity-10 max-md:pr-5 max-md:max-w-full">
    <h3 className="font-semibold text-zinc-600">{title}</h3>
    <p className="mt-5 text-black">{description}</p>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    { title: 'Tax benefits', description: 'Income tax waived up to 5%.' },
    { title: 'Subsidies', description: 'Earned government subsidies covering up to 10% of your investment.' }
  ];

  return (
    <section className="flex flex-col px-6 pt-8 pb-5 mt-4 text-xl bg-white rounded-3xl shadow-xl max-md:px-5 max-md:max-w-full">
      <h2 className="text-3xl font-extrabold text-black max-md:max-w-full">Benefits gained</h2>
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} title={benefit.title} description={benefit.description} />
      ))}
    </section>
  );
};

export default BenefitsSection;