import React from 'react'
import Accordion from '../usables/Accordion';
import Tabs from '../usables/Tabs';

const FaQs = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 text-2xl text-black bg-white rounded-[59px]">
      <div className="mt-3 text-4xl font-bold max-md:max-w-full">
        Frequently Asked Questions
      </div>
      <div className="mt-5 text-zinc-600 max-md:max-w-full">
        In this FAQ, you will find all the relevant information about our
        services.
      </div>
{/* faq section */}
{/* <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />
      
    </div> */}
    <div className='p-10'> 
      <Tabs />
    </div>

     
    </div>
  );

}

export default FaQs