import React from 'react'

const Footer = () => {
  return (
    <div className=" flex flex-col items-center pt-12 bg-white ">
      <div className="text-4xl font-bold text-black max-md:max-w-full">
        Important Updates Await you
      </div>
      <div className="mt-4 text-3xl font-medium text-zinc-600 max-md:max-w-full">
        Subscribe to our newsletter for the latest updates.
      </div>
      <div className="flex gap-4 mt-3.5 text-3xl font-bold text-white whitespace-nowrap max-md:flex-wrap">
        <div className="shrink-0 max-w-full rounded-xl border border-black border-solid h-[61px] w-[581px]" />
        <div className="justify-center px-10 py-3.5 bg-black rounded-xl max-md:px-5">
          subscribe
        </div>
      </div>
      <div className="self-stretch mt-6 w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between items-start px-5 mt-14 max-w-full w-[1043px] max-md:flex-wrap max-md:mt-10">
        <div className="self-stretch text-base font-bold text-black">
          <span className="text-xl">About us</span>
          <br />
          <br />
          <span className="">Company </span>
          <br />
          <span className="">Overview </span>
          <br />
          <span className="">Our mission</span>
          <br />
          <span className="">Team</span>
          <br />
          <span className="">Careers</span>
        </div>
        <div className="text-base font-bold text-black">
          <span className="text-xl">Services</span>
          <br />
          <br />
          <span className="">Investment Plans</span>
          <br />
          <span className="">How it Works</span>
          <br />
          <span className="">FAQs</span>
          <br />
          <span className="">Customer Support</span>
        </div>
        <div className="text-base font-bold text-black">
          <span className="text-xl">Resources</span>
          <br />
          <br />
          <span className="">Blog </span>
          <br />
          <span className="">Case Studies</span>
          <br />
          <span className="">Reports</span>
          <br />
          <span className="">White Papers</span>
        </div>
        <div className="text-base font-bold text-black">
          <span className="text-xl">Legal</span>
          <br />
          <br />
          <span className="">Privacy Policy</span>
          <br />
          <span className="">Terms and Conditions</span>
          <br />
          <span className="">Cookies Policy</span>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch py-12">
          <img
            loading="lazy"
            srcSet="/img/apple-store-1.png"
            className="aspect-[3.45] w-1/2"
          />
          <img
            loading="lazy"
            srcSet="/img/play-strore-1.png"
            className="mt-8 aspect-[3.45] w-1/2"
          />
        </div>
      </div>
      <div className="flex flex-col px-14 py-11 mt-10 max-w-full bg-black rounded-3xl w-[1271px] max-md:px-5">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto text-3xl font-bold text-white">
            Get in touch with us
          </div>
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3cbbeac853cdd341fd876878774f27f824a62edcef97f67f0f94552ef8ff434?"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb72c09fd5fe5ba98dc9e644691b2b733b7d7ea066f82237fd30cf3d70e5bdf?"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bb7d87f144aa64c993768cf8ef6d7aedcc5ca371817e9690b4389a9e9b9fa19?"
              className="shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/642a4d8ba6b88abae00809f6bc9f6d8003a847eb88f2f835791021687c788fc6?"
              className="shrink-0 w-8 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-9 mt-9 w-full text-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-col py-px">
            <div className="self-start ml-8 text-base font-medium max-md:ml-2.5">
              Give us a call
            </div>
            <div className="flex gap-1 mt-4 text-2xl font-bold">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a483dfdedbd04c0fd53b182d981ad509d2ea48840690f4d834717b0ece11f97?"
                className="shrink-0 w-7 aspect-square"
              />
              <div className="flex-auto my-auto">+91 87627 91304</div>
            </div>
          </div>
          <div className="flex gap-2.5 items-start p-0.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de4e0e24727931979f8edf6cb724049dbe83ad8f90df611ea3968442bf9ece37?"
              className="shrink-0 self-end mt-8 w-6 aspect-square"
            />
            <div className="flex flex-col grow shrink-0 self-start basis-0 w-fit">
              <div className="text-base font-medium">Send us a mail</div>
              <div className="mt-5 text-2xl font-bold">
                hirav.co@work.official
              </div>
            </div>
          </div>
          <div className="flex gap-px py-0.5 pr-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0666b4ded24ccc49664f93cd6499878df35579bcbe7be709e2b7c3a95192c095?"
              className="shrink-0 self-end mt-8 w-6 aspect-square"
            />
            <div className="flex flex-col">
              <div className="text-base font-medium">Visit us at </div>
              <div className="mt-5 text-2xl font-bold">
                 C 43 Sector 2, Delhi
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-start mt-7 ml-16 text-2xl text-zinc-600 max-md:ml-2.5">
        © 2024 Hirav. All rights reserved.
      </div>
    </div>
  );
}

export default Footer