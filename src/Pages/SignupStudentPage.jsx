import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SigninImage from "/signin.png";
import { ArrowRight } from "lucide-react";
import microsoft from "/public/Microsoft.png";
import facebook from "/public/facebook.png";
import google from "/public/Google.png";

const SignupStudentPage = () => {
  return (
    <div>
      <nav className="fixed bg-white px-20 ">
        <Navbar />
      </nav>
      <main className="flex py-24">
        <div className="h-[700px] w-[50%] ">
          <img src={SigninImage} alt="" />
        </div>

        <form className="py-8 px-10">
          <h1 className="text-3xl font-bold ms-32 mb-6">Create Your Account</h1>
          <label className="font-semibold ">Full Name</label>
          <div className="mt-2 gap-4 mb-4 ">
            <input
              type="text"
              placeholder="First Name"
              className="border border-black rounded-md p-1"
            />
            <input
              type="text"
              placeholder="last Name"
              className="border border-black ms-4 rounded-md p-1"
            />
          </div>
          <label htmlFor="" className="font-semibold">
            User Name
          </label>
          <br />
          <input
            type="text"
            placeholder="Username"
            className="mt-2 mb-4 border border-black rounded-md w-[95%] p-1"
          />{" "}
          <br />
          <label htmlFor="" className="font-semibold">
            Email Address
          </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            className="mt-2 mb-4 border border-black rounded-md w-[95%] p-1"
          />
          <div className="flex">
            <div>
              <label htmlFor="" className="font-semibold">
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Password"
                className="mt-2 mb-4 border border-black rounded-md p-1"
              />
            </div>
            <div>
              <label htmlFor="" className="font-semibold ms-4">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-2 mb-4 border border-black rounded-md ms-4 p-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white h-8 w-[40%] border border-black rounded-md text-[14px] "
          >
            Create Account
            <ArrowRight className="relative bottom-5 left-[140px] text-[14px]  " />
          </button>
          <h3 className="mt-8 text-gray-500 flex mx-32">Or Continue with</h3>
          <div className="flex mt-5 gap-3">
            <button className="flex w-[40%] gap-1 border border-[#B2B5C4] p-2 rounded-md">
              <img src={facebook} alt="" className="w-6" />
              <h3 className="text-[#0866FF]">Facebook </h3>
            </button>
            <button className="flex w-[40%] gap-1 border border-[#B2B5C4] p-2 rounded-md">
              <img src={google} alt="" className="w-6" />
              <h3 className="text-[#EA4335]">Google</h3>
            </button>
            <button className="flex w-[40%] gap-1 border border-[#B2B5C4] p-2 rounded-md">
              <img src={microsoft} alt="" className="w-6" />
              <h3>Microsoft</h3>
            </button>
          </div>
        </form>
      </main>
      <footer className="relative bottom-0">
        <Footer />
      </footer>
    </div>
  );
};

export default SignupStudentPage;
