import React from 'react'
import InputField from '../SignUpUsable/InputField';
import SocialSignUp from '../SignUpUsable/SocialSignUp';
import { Link, NavLink } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="bg-white ">
          <div className="flex gap-5 ">
            <aside className="flex flex-col w-[36%] ">
              <div className="flex overflow-hidden relative flex-col grow px-12 py-16 text-2xl text-white ">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed39233a41b765a4d7951a792666a80d907c16690bdc3fc68bd60b9ea49bb910?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&" alt="" className="object-cover absolute inset-0 size-full" />
                <Link to="/" className="relative self-start ml-4 font-black text-black ">HIRAV</Link>
                <h1 className="relative self-start mt-44 ml-3 text-5xl font-extrabold  ">Lets get Started</h1>
                <p className="relative mt-12 ml-3  ">
                  Unlock sustainable investments and personalized AI insights. Join us!
                </p>
                <div className="relative shrink-0 mt-60 rounded-xl bg-neutral-300 bg-opacity-30 h-[282px]  " />
              </div>
            </aside>
            <main className="flex flex-col ml-5 w-[64%] mt-12  ">
              <div className="flex flex-col self-stretch px-5 my-auto text-neutral-500  ">
                <h2 className="text-4xl font-extrabold text-black ">Sign Up</h2>
                <p className="mt-4 text-base ">
                  Create an account to access top GCP investments and insights.
                </p>
                <form className="mt-10  ">
                  <div className="flex gap-5 text-xl  ">
                    <InputField placeholder="First Name" />
                    <InputField placeholder="Last Name" />
                  </div>
                  <div className="flex gap-5 mt-5 w-full text-xl  ">
                    <InputField placeholder="Email ID" />
                    <div className="flex flex-auto gap-5 justify-between px-16 py-8 whitespace-nowrap rounded-2xl bg-neutral-100   ">
                      <label htmlFor="gender">Gender</label>
                      <input type="checkbox" id="gender" className="shrink-0 self-start mt-2 border-black border-solid aspect-[1.49] border-[3px] stroke-[2.8px] stroke-black w-[21px]" />
                    </div>
                  </div>
                  <div className="flex gap-5 mt-5 w-full text-xl  ">
                    <div className="flex flex-1  gap-5 items-center px-6 py-px rounded-2xl bg-neutral-100   ">
                      <span className="self-stretch my-auto">+91</span>
                      <div className="shrink-0 self-start w-px border border-solid bg-stone-300 border-stone-300 h-[82px]" />
                      <input type="tel" placeholder="Phone Number" className="flex-auto self-stretch my-auto bg-transparent" aria-label="Phone Number" />
                    </div>
                    <InputField placeholder="DOB" type="date" />
                  </div>
                  <div className="flex gap-5 mt-5 text-xl ">
                    <InputField placeholder="Password" type="password" />
                    <InputField placeholder="Confirm Password" type="password" />
                  </div>
                  <div className="flex flex-col items-end mt-4 max-w-full text-black w-[912px]">
                    <div className="flex gap-3.5 self-start text-base ">
                      <input type="checkbox" id="terms" className="shrink-0 w-5 h-5 rounded-md border border-black border-solid bg-neutral-100" />
                      <label htmlFor="terms" className="flex-auto underline ">
                        I've read and agree with all <span className="font-semibold underline">Terms of Service</span> and our <span className="font-semibold underline">Privacy Policy</span>
                      </label>
                    </div>
                    <button type="submit" className="justify-center items-center px-16 py-8 mt-8 max-w-full text-3xl font-bold text-white bg-cyan-500 rounded-xl w-[671px] ">
                      Sign Up
                    </button>
                    <p className="mt-4 mx-auto text-xl underline ">
                      Have an account already? <Link to="/signin" className="font-semibold underline">Sign In</Link>
                    </p>
                  </div>
                </form>
                <div className="flex gap-5 justify-center items-center mt-4 text-2xl text-right whitespace-nowrap text-black text-opacity-60  ">
                  <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-black bg-opacity-60 border-black border-opacity-60 w-[478px]" />
                  <span className="self-stretch">or</span>
                  <div className="shrink-0 self-stretch my-auto max-w-full h-px border border-solid bg-black bg-opacity-60 border-black border-opacity-60 w-[582px]" />
                </div>
                <div className="flex gap-5 justify-between self-center mt-2 max-w-full text-xl text-black w-[782px] pb-10 ">
                  <SocialSignUp provider="Google" icon="\img\googleIcon.png" />
                  <SocialSignUp provider="Facebook" icon="\img\facebookIcon.png" />
                </div>
              </div>
            </main>
          </div>
        </div>
      );
}

export default SignUp