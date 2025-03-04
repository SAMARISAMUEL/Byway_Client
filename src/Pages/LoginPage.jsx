import React from "react";
import Navbar from "../components/Navbar";
import microsoft from "/public/Microsoft.png";
import facebook from "/public/facebook.png";
import google from "/public/Google.png";
import LoginImage from "/public/LoginImage.png";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div>
      <nav className="fixed bg-white px-20 ms-14">
        <Navbar />
      </nav>
      <main className="flex justify-between">
        <div className="mt-52 px-28">
          <h2 className="text-3xl font-bold ms-32 mb-6">
            Sign in to your account
          </h2>
          <label htmlFor="" className="font-semibold">
            Email Address
          </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            className="mt-2 mb-4 border border-black rounded-md w-[95%] p-1"
          />
          <label htmlFor="" className="font-semibold">
            Password
          </label>
          <br />
          <input
            type="password"
            placeholder="Password"
            className="mt-2 mb-4 border border-black rounded-md   w-[95%] p-1"
          />
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
        </div>
        <div className="h-800px">
          <img src={LoginImage} alt="Login Image" />
        </div>
      </main>
      <footer className="relative bottom-6 ">
        <Footer />
      </footer>
    </div>
  );
};

export default LoginPage;
