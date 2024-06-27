import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Component = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="shadow-2xl rounded-xl mb-24">
      <div>
        <div className=" flex p-32 h-[680px] bg-white w-full rounded-xl ">
          <div className="flex flex-col w-2/3">
            <p className="text-4xl font-bold">
              First Ever Green Credit Investment Planner
            </p>
            <p className="text-2xl pl-4 text-gray-600 pt-3 pb-5">
              Empower your investments with a sustainable touch
            </p>
            <ul className="text-xl grid gap-y-4 list-disc">
              <li>First planner for green credit investments.</li>
              <li>Invest sustainably.</li>
              <li>Evaluate environmental impact.</li>
              <li>Trend-based recommendations.</li>
              <li>Monitor investments continuously.</li>
            </ul>
            {/* button */}
            <div className="flex gap-5 mt-14 self-start px-5 py-2 mx-auto text-xl font-extrabold text-white bg-[#3030FF] rounded-3xl ">
              <div className="grow">Invest Now</div>
              <img
                loading="lazy"
                src="/img/arrow-1-4.svg"
                className="shrink-0 w-9 "
              />
            </div>{" "}
          </div>
          <div className="flex w-[30%]">
            <img src="/img/computer.png" alt="" className="w-full  pb-20" />
          </div>
        </div>
      </div>
      <div>
        <div className=" flex p-32 h-[680px] bg-white w-full rounded-xl ">
          <div className="flex flex-col w-2/3">
            <p className="text-4xl font-bold">
              Intelligent Ai-Powered Investment Plans
            </p>
            <p className="text-2xl pl-4 text-gray-600 pt-3 pb-5">
              Transform your portfolio with tailored solutions
            </p>
            <ul className="text-xl grid gap-y-4 list-disc">
              <li>Expertly curated plans for optimal performance.</li>
              <li>Advanced Al for better decision-making.</li>
              <li>
                Personalized strategies based on your risk tolerance and goals.
              </li>
              <li>Data-driven insights and recommendations.</li>
              <li>Real-time Al optimizations for your portfolio.</li>
            </ul>
            {/* button */}
            <div className="flex gap-5 mt-14 self-start px-5 py-2 mx-auto text-xl font-extrabold text-white bg-[#3030FF] rounded-3xl ">
              <div className="grow">Try Now</div>
              <img
                loading="lazy"
                src="/img/arrow-1-4.svg"
                className="shrink-0 w-9 "
              />
            </div>{" "}
          </div>
          <div className="flex w-[30%]">
            <img
              src="/img/hyperspace-mr-roboto-1.png"
              alt=""
              className="w-full  pb-20"
            />
          </div>
        </div>
      </div>
      <div>
        <div className=" flex p-32 h-[680px] bg-white w-full rounded-xl ">
          <div className="flex flex-col w-2/3">
            <p className="text-4xl font-bold">Multilingual Access</p>
            <p className="text-2xl pl-4 text-gray-600 pt-3 pb-5">
              Empowering users across languages and cultures.{" "}
            </p>
            <ul className="text-xl grid gap-y-4 list-disc ">
              <li>Caters to India's rich diversity.</li>
              <li>Features available in multiple Indian languages.</li>
              <li>Multilingual chatbots for real-time assistance.</li>
              <li>
                Simplifies user experience for all language proficiencies.
              </li>
              <li>Breaks down language barriers for effective use.</li>
            </ul>
            {/* button */}
            <div className="flex gap-5 mt-14 self-start px-5 py-2 mx-auto text-xl font-extrabold text-white bg-[#3030FF] rounded-3xl ">
              <div className="grow">Try Now</div>
              <img
                loading="lazy"
                src="/img/arrow-1-4.svg"
                className="shrink-0 w-9 "
              />
            </div>{" "}
          </div>
          <div className="flex w-1/4">
            <img src="/img/multilingual.png" alt="" className="w-full  pb-20" />
          </div>
        </div>
      </div>
      <div>
        <div className=" flex p-32 h-[680px] bg-white w-full rounded-xl ">
          <div className="flex flex-col w-2/3">
            <p className="text-4xl font-bold">Mobile App </p>
            <p className="text-2xl pl-4 text-gray-600 pt-3 pb-5">
              Our app brings all your favorite features to your fingertips with
              added mobility. Enjoy seamless investment planning, Al-driven
              insights, and multilingual support anytime, anywhere.{" "}
            </p>
            <p className="text-gray-600 font-bold text-2xl pt-10">Download Now and Elevate Your Investing Experience!</p>
           
            {/* button */}
            <div className="flex flex-row gap-5 mt-16 self-start px-5 py-2 mx-auto text-xl font-extrabold ">
              <img
                loading="lazy"
                src="/img/apple-store-1.png"
                className=" w-full "
              />
              <img src="/img/play-strore-1.png" alt="" />
            </div>{" "}
          </div>
          <div className="flex w-[30%]">
            <img src="/img/androidApp.gif" alt="" className="w-full  pb-20" />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Component;
