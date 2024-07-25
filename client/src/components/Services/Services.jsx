import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../index";

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="w-4/5  mx-auto mt-20 pb-10">
        <div className="flex flex-row  w-full mx-auto">
          <img
            src="\img\products-kite.png"
            className="w-[45%] mr-[15%]"
            alt=""
          />
          <div className="pt-16  w-[35%]">
            <p className="text-4xl font-bold font-sans text-gray-800 mb-10">
              MarketPlace
            </p>
            <p className="text-2xl text-gray-700">
              Experience the future of sustainable investing with our ultra-fast
              Green Credit Marketplace.
              <br /> Get real-time updates on the latest green credit schemes,
              advanced analytics, and personalized AI-driven investment plans,
              all through a sleek, user-friendly interface.{" "}
            </p>
            <Link className="flex flex-row p-10">
              <p className="text-2xl text-blue-600 ">Invest Now</p>{" "}
              <img src="\img\arrow-blue.svg" alt="" className="p-2" />
            </Link>
          </div>
        </div>
        {/* extension */}
        <div className="flex flex-row  w-11/12 mx-auto mt-32">
          <div className="pt-16  w-[35%]">
            <p className="text-4xl font-bold font-sans text-gray-800 mb-10">
              Nirvana(Web Extension)
            </p>
            <p className="text-2xl text-gray-700">
              Choose Nirvana for your daily online shopping needs and join us in
              fostering a more sustainable future through informed consumer
              decisions with Nirvana.
            </p>
            <img
              src="\img\chrome_ex1.jpeg"
              className="rounded-lg w-1/2 m-10"
              alt=""
            />
          </div>
          <img src="\img\nirvana.png" alt="" className="w-[45%] ml-[15%]" />
        </div>
        {/* app */}
        <div className="flex flex-row  w-11/12 mx-auto mt-36">
          <img
            src="\img\varsity-products.png"
            className="w-[40%] mr-[15%]"
            alt=""
          />
          <div className="pt-16  w-[35%] mt-10">
            <p className="text-4xl font-bold font-sans text-gray-800 mb-10">
              Hirav Mobile
            </p>
            <p className="text-2xl text-gray-700">
              {" "}
              Explore GCP and invest on the go with Hirav, promoting
              sustainability across India. Achieve true nirvana through
              sustainable practices and conscious consumerism with us.
            </p>
            <div className="flex flex-row mt-14 w-[45%]">
              <img src="\img\play-strore-1.png" alt="" />
              <img src="\img\apple-store-1.png" alt="" />
            </div>
          </div>
        </div>

        {/* pricing */}
        <p className="mt-24 text-6xl text-gray-800 text-center font-sans font-semibold p-10">
          Pricing
        </p>
        <hr className="border border-slate-500  opacity-30 mb-10" />
        {/* price_images */}
        <div className="flex flex-row mx-auto w-1/4 gap-48 justify-center px-10 ">
          <img src="\img\zero.svg" alt="" />
          <img src="\img\twenty.svg" alt="" />
          <img src="\img\zero.svg" alt="" />
        </div>
        {/* price_details */}
        <div className="flex flex-row mx-auto gap-24 justify-center ">
          <p className=" text-gray-800 text-4xl font-semibold ">
            Free Account opening
          </p>

          <p className=" text-gray-800 text-4xl font-semibold ">
            Personalized Investment Plan
          </p>

          <p className=" text-gray-800 text-4xl font-semibold ">
            Free Consultation
          </p>
        </div>
        <div className="flex flex-row text-2xl text-center justify-center gap-28 mt-5 mb-14 ">
          <p className="w-1/4">
            Create Free account on GCP with assistance from our AI
          </p>
          <p className="w-1/4">
            Get Personalized Investment plans specially made for you
          </p>
          <p className="w-1/4">
            Got any doubt? Get free Consualtation with our experts
          </p>
        </div>

        {/* end */}
      </div>
    </>
  );
};

export default Services;
