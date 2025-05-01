import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Button, Checkbox } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoginImage from "../assets/images/Group 66.svg"

const Login = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between md:flex-row w-full rounded-2xl overflow-hidden bg-white">
        {/* Left Side */}
        <div className="w-full md:w-2/5 p-10">
          <Link to="/">
            <h1 className="text-teal-700 text-3xl font-bold mb-6">Reddy App</h1>
          </Link>
          <h2 className="text-[30px] font-semibold leading-[45px] mb-2">
            Artificial Intelligence Driving. <br />
            Results For The Education Industry
          </h2>
          <p className="text-gray-500 mb-8 text-base">
            Welcome back! Please login to your account.
          </p>

          <div className="space-y-4 w-[425px]">
            <div>
              <label className="text-sm text-[#344054] font-medium">
                Email
              </label>
              <Input
                placeholder="Enter your email"
                className="rounded-lg mt-1.5 py-3 placeholder:text-[#667085]"
                size="large"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#344054]">
                Password
              </label>
              <Input.Password
                placeholder="Enter your password"
                size="large"
                className="rounded-lg mt-1.5 py-3 !placeholder:text-[#667085]"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </div>

            <div className="flex items-center justify-between font-semibold text-[#344054] text-sm">
              <Checkbox>Remember for 30 days</Checkbox>
              <a href="#" className="text-teal-700 hover:underline">
                Forgot Password
              </a>
            </div>

            <Button
              type="primary"
              size="large"
              className="w-full text-base font-semibold bg-teal-700 hover:!bg-teal-800 rounded-md"
            >
              Sign In
            </Button>

            <Button
              icon={<div className="text-2xl"><FcGoogle /></div>}
              size="large"
              className="w-full border rounded-md text-base font-semibold text-[#344054] flex items-center justify-center"
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

            <p className="text-sm text-[#667085] mt-10">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-teal-700 ml-2 font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex w-full md:w-3/5 lg:w-[802px] h-[754px] bg-[#e5efed] m-4 rounded-2xl items-center justify-center p-10">
          <img
            src={LoginImage}
            alt="Login Illustration"
            className="w-[702px} h-[702px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
