import React from "react";
import Image from "../assets/images/Image.svg";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 lg:px-12 gap-12 mt-20 max-w-7xl mx-auto">
      {/* Left Side: Text Content */}
      <div className="w-full lg:w-[592px] space-y-6 my-5 text-center lg:text-left">
        <span className="text-base font-semibold text-[#00878C]">
          404 error
        </span>
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
          Page not found
        </h1>
        <p className="text-base sm:text-lg text-[#667085]">
          Sorry, the page you are looking for doesn't exist. <br className="hidden sm:block" />
          Here are some helpful links.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="w-full sm:w-auto px-6 py-3 text-base font-semibold border text-[#344054] border-[#D0D5DD] rounded-lg flex items-center justify-center gap-2">
            <FaArrowLeft />
            Go Back
          </button>
          <button className="w-full sm:w-auto px-6 py-3 text-base font-semibold bg-[#00878C] text-white rounded-lg">
            Take me home
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="w-full lg:w-[720px]">
        <img src={Image} alt="404 Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ErrorPage;
