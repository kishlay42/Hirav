import React from 'react'

const NavBar = () => {
  return (
    <div className="w-5/6 mx-auto flex gap-5 text-black max-md:flex-wrap  py-12 px-6">
      <div className="flex-auto my-auto text-3xl font-black">HIRAV</div>
      <div className="flex gap-5 text-2xl">
        <div className="flex flex-auto gap-8 justify-between pr-5 my-auto font-medium ">
          <div>About</div>
          <div>Services</div>
          <div>MarketPlace</div>
          <div>News</div>
          <div>Contact us</div>
        </div>
        <div className="justify-center px-5 py-1.5 font-black rounded-3xl border-black border-solid border-[3px]">
          Sign up
        </div>
      </div>
    </div>
  );
}

export default NavBar