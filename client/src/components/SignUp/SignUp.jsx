import React from "react";
import InputField from "../SignUpUsable/InputField";
import SocialSignUp from "../SignUpUsable/SocialSignUp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fname || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/server/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="bg-white ">
      <div className="flex gap-5 ">
        <aside className="flex flex-col w-[36%] ">
          <div className="flex overflow-hidden relative flex-col grow px-12 py-16 text-2xl text-white ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed39233a41b765a4d7951a792666a80d907c16690bdc3fc68bd60b9ea49bb910?apiKey=a47822eff5b2450ea0b6389b3ea53a3d&"
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <Link
              to="/"
              className="relative self-start ml-4 font-black text-black "
            >
              HIRAV
            </Link>
            <h1 className="relative self-start mt-44 ml-3 text-5xl font-extrabold  ">
              Lets get Started
            </h1>
            <p className="relative mt-12 ml-3  ">
              Unlock sustainable investments and personalized AI insights. Join
              us!
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
            <form className="mt-10  " onSubmit={handleSubmit}>
              <div className="flex gap-5 text-xl  ">
                <InputField
                  placeholder="First Name"
                  id="fname"
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Last Name"
                  id="lname"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-5 mt-5 text-xl ">
                <InputField
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                />
                <div className="flex flex-auto gap-5 justify-between px-16 py-8 whitespace-nowrap rounded-2xl bg-neutral-100   ">
                  <span className="self-stretch my-auto">+91</span>
                  <div className="shrink-0 self-start w-px border border-solid bg-stone-300 border-stone-300 h-[40px]" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="flex-auto self-stretch my-auto bg-transparent outline-none"
                    aria-label="Phone Number"
                  />
                </div>{" "}
              </div>
              <div className="flex gap-5 mt-5 text-xl ">
                <InputField
                  placeholder="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col items-end mt-4 max-w-full text-black w-[912px]">
                <div className="flex gap-3.5 self-start text-base ">
                  <input
                    type="checkbox"
                    id="terms"
                    className="shrink-0 w-5 h-5 rounded-md border border-black border-solid bg-neutral-100"
                  />
                  <label htmlFor="terms" className="flex-auto underline ">
                    I've read and agree with all{" "}
                    <span className="font-semibold underline">
                      Terms of Service
                    </span>{" "}
                    and our{" "}
                    <span className="font-semibold underline">
                      Privacy Policy
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="justify-center items-center px-16 py-8 mt-8 max-w-full text-3xl font-bold text-white bg-cyan-500 rounded-xl w-[671px] "
                >
                  {loading ? (
                    <>
                      <BeatLoader color="#49d8c2" />
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
                <p className="mt-4 mx-auto text-xl underline ">
                  Have an account already?{" "}
                  <Link to="/signin" className="font-semibold underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
            )}
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
};

export default SignUp;
