import React from 'react'
const FeatureCard = ({ imageSrc, title, description }) => (
  <article className="flex flex-col grow px-9 pt-0.5 pb-20 max-md:px-5 max-md:mt-10 max-md:max-w-full bg-white rounded-xl shadow-xl mb-24">
    <img loading="lazy" src={imageSrc} alt={title} className="mr-4 ml-4 w-full aspect-[1.5] pt-4 max-md:mx-2.5" />
    <h2 className="self-center mt-2.5 text-3xl font-bold text-black">{title}</h2>
    <p className="mt-7 text-xl text-center text-zinc-500">{description}</p>
  </article>
);
const HowItWorks = () => {
  
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/86905ed61e65f29325d4398a4310e81dc8e57f1810054911341b2f7b06b60393?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&",
      title: "Sign up",
      description: "Register quickly with our easy sign-up process. Personalize your profile to reflect your investment preferences and goals."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8770f0aacc76cd3627d50e58c19747af9fe4193186d02c5e91156702a8836575?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&",
      title: "Discover Plans",
      description: "Explore tailored investment plans aligned with your financial and sustainability goals, with detailed insights on returns and environmental impact."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/473fd9f9d607671d5f4827dddd21aaf3813ed5573b703a5a7d268250a896c9b7?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&",
      title: "Invest & Grow",
      description: "Choose the investment plan that best suits your needs. Follow simple steps to invest and monitor your portfolio as it grows."
    }
  ];
  return (
    <main>
      <div className='text-3xl mb-12 font-bold text-center'>How it works?</div>
      <section className="flex gap-8  max-md:flex-col max-md:gap-0">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <FeatureCard {...feature} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default HowItWorks