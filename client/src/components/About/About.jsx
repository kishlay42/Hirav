import React from "react";
import NavBar from "../NavBar/NavBar";
const About = () => {
  return (
    <>
      <NavBar />
      <div className="mx-auto w-4/5 pb-28">
        <p className="text-5xl text-gray-800 text-center mt-16 font-semibold ">
          Empowering Indian Companies to Sustainability <br />
          <p className="mt-4"> Through Green Credit Investments.</p>
        </p>
        <hr className="border border-slate-300  mt-24  " />
        <div className="flex flex-row gap-14 text-2xl text-gray-600 mt-24 w-5/6 mx-auto">
          <p className="gap-x-10 w-1/2">
          Hirav, derived from the Sanskrit word for "greenery on earth," is a service-based platform dedicated to providing accessible and simplified data for entities and businesses interested in Green Cloud Platform (GCP).<br/><br/> Our mission is to assist companies in achieving their sustainability goals through a user-friendly interface and personalized investment plans tailored to client preferences and market demands.
            <br />
            <br /> We specialize in supporting medium to small companies, helping them leverage the benefits of GCP without burdening their expenses. Our affordable and free services are designed to promote sustainability in India, ensuring that businesses of all sizes can contribute to a greener future.
            <br />
            <br />
          </p>
          <p className="gap-x-10 w-1/2">
          Harnessing the power of Generative AI, we offer comprehensive support to our clients, providing investment insights and a free chatbot to address all queries. <br/><br/>This cutting-edge technology ensures that our clients receive the most relevant and up-to-date information to make informed decisions.
            <br />
            <br />
            In line with our commitment to sustainability, we have developed Nirvana, a Google Chrome extension designed to enhance your online shopping experience. Nirvana suggests eco-friendly alternative products, helping you make choices that benefit both you and the environment.
            <br />
            <br />
            
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
