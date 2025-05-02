import React from "react";
import {
  GoogleOutlined,
  AppleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { Input, Button, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
import BG from "../assets/images/Group 66.svg"

const SignUp = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row w-full  bg-white rounded-2xl overflow-hidden">
        {/* Left Side */}
        <div className="w-full md:w-2/5 p-10">
          <Link to="/">
            <h1 className="text-teal-700 text-4xl leading-[38px] font-bold mb-10">Reddy App</h1>
          </Link>
          <h2 className="text-3xl font-semibold mb-2 leading-tight">Sign Up</h2>
          <p className="text-gray-500 mb-8">Start your 30-day free trial.</p>

          <div className="space-y-4 w-[425px]">
            <div>
              <label className="text-sm font-medium text-[#344054]">Name</label>
              <Input
                placeholder="Enter your Name"
                size="large"
                className="mt-1.5 py-3 placeholder:text-[#667085]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054]">
                Email
              </label>
              <Input
                placeholder="Enter your email"
                size="large"
                className="mt-1.5 py-3 placeholder:text-[#667085]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#344054]">
                Password
              </label>
              <Input
                placeholder="Create a password"
                className="mt-1.5 py-3 placeholder:text-[#667085]"
                size="large"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-[#344054]">
                Confirm Password
              </label>
              <Input
                placeholder="Retype a password"
                size="large"
                className="mt-1.5 py-3 placeholder:text-[#667085]"
              />
            </div>
            <Button
              type="primary"
              size="large"
              className="w-full text-base font-semibold !py-3 bg-teal-700 hover:!bg-teal-800 rounded-md"
            >
              Sign In
            </Button>

            <Button
              icon={<div className="text-2xl"><FcGoogle /></div>}
              size="large"
              className="w-full border rounded-md py-3 text-base font-semibold text-[#344054] flex items-center justify-center"
            >
              Sign in with Google
            </Button>

            <Button
              icon={<div className="text-2xl text-black"><BsApple /></div>}
              size="large"
              className="w-full border rounded-md text-base font-semibold text-[#344054] flex items-center justify-center"
            >
              Sign in with Apple
            </Button>

            <p className="text-sm text-gray-600 mt-[40px]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-teal-700 ml-2 font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex w-full md:w-3/5 bg-[#e5efed] m-4 rounded-2xl items-center justify-center p-10">
          <img
            src={BG}
            alt="Login Illustration"
            className="w-[702px] h-[702px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
