import React from 'react'

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
      <div className="flex flex-col items-center self-stretch px-9 mt-10 w-full font-semibold max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start self-stretch text-neutral-500 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center self-stretch px-2.5 py-2.5 font-bold text-black">
            <div>About GCP</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5659023a6f83d194bd12d47d882a086fd2b5c35324a7b47d1f7dcb2134af8ab?"
              className="self-center mt-3 border-black border-solid aspect-[20] border-[6px] stroke-[6px] stroke-black w-[113px]"
            />
          </div>
          <div className="mt-2.5">About Hirav</div>
          <div className="mt-2.5">Profits and Returns</div>
          <div className="mt-2.5">Investment Process</div>
          <div className="mt-2.5">Monitoring And Support</div>
          <div className="mt-2.5">Environmental Impact</div>
          <div className="mt-2.5">Security and Risks</div>
        </div>
        <div className="flex gap-5 mt-10 w-full max-w-[1487px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            1. What is the Green Credit Programme (GCP)?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0acc5861e76be4f8544e1c6de40c9b71eab21712c3d4ebf99700da165d61ab4?"
            className="shrink-0 self-start mt-1.5 border border-black border-solid aspect-[1.69] stroke-[1.4px] stroke-black w-[27px]"
          />
        </div>
        <div className="mt-3.5 text-zinc-600 max-md:max-w-full">
          The Green Credit Programme (GCP) is a government initiative aimed at
          promoting environmental sustainability by encouraging investments in
          green projects. It offers incentives and benefits to individuals and
          businesses that invest in eco-friendly projects.
        </div>
        <div className="flex gap-5 justify-between self-start mt-6 ml-44 max-w-full text-xl font-medium text-zinc-600 w-[346px] max-md:ml-2.5">
          <div className="flex gap-4 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef17c72d643a51a91c8184316fa13046091c9bfa455ee971126824dc71bbcb9?"
              className="shrink-0 w-6 aspect-square"
            />
            <div>helpful</div>
          </div>
          <div className="flex gap-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bad46840f68bfdb492a787e0c2c7a756c8a495369586916b25adaa6a15138f26?"
              className="shrink-0 w-6 aspect-square"
            />
            <div>not helpful</div>
          </div>
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px bg-black border border-black border-solid w-[1560px]" />
        <div className="flex gap-5 mt-9 w-full max-w-[1487px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto max-md:max-w-full">
            2. What types of projects are eligible under the GCP?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/590c4c4c784ae5771453c2891b7813244232a97d89ef75b6eeb4f203911fff5d?"
            className="shrink-0 my-auto border border-black border-solid aspect-[1.69] stroke-[1.4px] stroke-black w-[27px]"
          />
        </div>
        <div className="shrink-0 mt-6 max-w-full h-px bg-black border border-black border-solid w-[1560px]" />
        <div className="flex gap-5 mt-9 w-full max-w-[1487px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">
            3. How does the GCP benefit investors?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/590c4c4c784ae5771453c2891b7813244232a97d89ef75b6eeb4f203911fff5d?"
            className="shrink-0 self-start mt-2 border border-black border-solid aspect-[1.69] stroke-[1.4px] stroke-black w-[27px]"
          />
        </div>
        <div className="shrink-0 mt-5 max-w-full h-px bg-black border border-black border-solid w-[1560px]" />
      </div>
    </div>
  );

}

export default FaQs