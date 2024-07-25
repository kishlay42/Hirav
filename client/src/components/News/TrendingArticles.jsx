import React from "react";
import Slider from "react-slick";

function TrendingArticles() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container ml-32 w-full bg-white rounded-xl  ">
      <Slider {...settings}>
        <div>
          <InvestmentCard
            name="COP28: Govt working on regulations to implement Green Credits"
            link="https://www.hindustantimes.com/india-news/cop28-govt-working-on-regulations-to-implement-green-credits-101701541176288.html"
            image="https://www.hindustantimes.com/ht-img/img/2023/12/02/550x309/The-initiative-has-been-launched-along-with-UAE--t_1701541169026.jpg"
          />{" "}
        </div>
        <div>
          <InvestmentCard
            name="Centre tweaks green credit programme norms"
            link="https://www.thehindu.com/news/national/centre-tweaks-green-credit-programme-norms/article68076591.ece"
            image="https://th-i.thgim.com/public/incoming/itwjji/article68077030.ece/alternates/LANDSCAPE_1200/Tambaram_Maduravoyal_bypass_Road.jpg"
          />
        </div>
        <div>
          <InvestmentCard
            name="SEBI proposes to include green credit program under BRSR framework"
            link="https://www.business-standard.com/markets/news/sebi-proposes-to-include-green-credit-program-under-brsr-framework-124052300886_1.html"
            image="https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/10/full/1710091863-6841.jpg?im=FeatureCrop,size=(826,465)"
          />
        </div>
        <div>
          <InvestmentCard
            name="With 954 hectares, MP leads in tree plantation under Green Credit Plan"
            link="https://timesofindia.indiatimes.com/india/with-954-hectares-mp-leads-in-tree-plantation-under-green-credit-plan/articleshow/109295497.cms"
            image="https://static.toiimg.com/thumb/msid-109295801,imgsize-1646412,width-400,resizemode-4/109295801.jpg"
          />
        </div>
        <div>
          <InvestmentCard
            name="Former civil servants voice concerns regarding green credit .."
            link="https://thewire.in/environment/former-civil-servants-voice-concerns-regarding-green-credit-use-for-compensatory-afforestation"
            image="https://cdn.thewire.in/wp-content/uploads/2023/08/17202229/Forest-in-Odisha.jpg"
          />
        </div>
      </Slider>
    </div>
  );
}
const InvestmentCard = (props) => {
  return (
    <div className="flex flex-col mx-5 px-8 py-5 mt-7 mb-7 bg-white rounded-3xl border border-black border-solid max-md:px-5 max-md:max-w-full h-[45vh]">
      <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 self-start mt-1.5 basis-0 w-fit">
          {props.image && (
            <img
              src={props.image}
              alt={props.name || "Investment Image"}
              className="w-full h-auto rounded-t-3xl"
            />
          )}
          <h3 className="text-2xl font-bold text-black mt-4">
            {props.name || "Jaipur, Solar Energy Initiative"}
          </h3>
          {/* <p className="mt-4 text-xl font-medium text-neutral-400">
              {props.duration || "5 years"}
            </p> */}
        </div>
        {/* <div className="flex flex-col text-2xl font-bold leading-6 text-center text-black whitespace-nowrap">
            <div className="shrink-0 self-end w-5 h-5 bg-green-400 rounded-full" />
            <div className="mt-2">
              {props.credits || "0"}
              <br /> credits
            </div>
          </div> */}
      </div>
      <a
        href={props.link}
        target="_blank"
        className="self-center px-3 py-3 mt-4 text-lg font-semibold text-justify text-black rounded-xl border border-black border-solid"
      >
        view post
      </a>
    </div>
  );
};

export default TrendingArticles;
