import React from "react";
import Slider from "react-slick";

function Forum() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container ml-32 w-full bg-white rounded-xl  ">
      <Slider {...settings}>
        <div>
        <InvestmentCard
            name="Tree Plantation"
            duration="10 min"
          />        </div>
        <div>
          <h3><InvestmentCard
            name="Water Management"
            duration="45 min"
          /></h3>
        </div>
        <div>
          <h3><InvestmentCard
            name="Sustainable Agriculture"
            duration="30 min"
          /></h3>
        </div>
        <div>
          <h3><InvestmentCard
            name="Waste Management"
            duration="1 min"
          /></h3>
        </div>
        <div>
          <h3><InvestmentCard
            name="Air Pollution Reduction"
            duration="1 hour"
            
          /></h3>
        </div>
        <div>
          <h3><InvestmentCard
            name="Mangrove Conservation"
            duration="1 hour"
          /></h3>
        </div>
        
      </Slider>
    </div>
  );
}
const InvestmentCard = (props) => {
    return (
      <div className="flex flex-col mx-5 px-8 py-5 mt-7 mb-7 bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
            {props.image && (
              <img src={props.image} alt={props.name || "Investment Image"} className="w-full h-auto rounded-t-3xl" />
            )}
            <h3 className="text-2xl font-bold text-black mt-4">
              {props.name || "Jaipur, Solar Energy Initiative"}
            </h3>
            <p className="mt-4 text-xl font-medium text-neutral-400">
              last active {props.duration || "5 years"} ago
            </p>
          </div>
          {/* <div className="flex flex-col text-2xl font-bold leading-6 text-center text-black whitespace-nowrap">
            <div className="shrink-0 self-end w-5 h-5 bg-green-400 rounded-full" />
            <div className="mt-2">
              {props.credits || "0"}
              <br /> credits
            </div>
          </div> */}
        </div>
        <button className="self-center px-3 py-3 mt-4 text-lg font-semibold text-justify text-black rounded-xl border border-black border-solid">
          Join Discussion
        </button>
      </div>
    );
};
  
export default Forum;
