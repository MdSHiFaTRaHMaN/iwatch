import React from "react";
import Image from "../assets/images/Image.svg";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex items-center w-[1320px] mx-auto gap-[32px] mt-[120px]">
      <div className="w-[592px] h-[288px] ml-12 space-y-6">
        <span className="text-base font-semibold text-[#00878C]">
          404 error
        </span>
        <h1 className="text-6xl font-semibold text-gray-900">Page not found</h1>
        <p className="text-xl text-[#667085]">
          Sorry, the page you are looking for doesn't exist. <br /> Here are
          some helpful links
        </p>
        <div className="flex items-center gap-6">
          <button className="w-[132px] h-[48px] text-base font-semibold border text-[#344054] border-[#D0D5DD] rounded-lg flex items-center justify-center gap-2">
            <FaArrowLeft />
            Go Back
          </button>
          <button className="w-[132px] h-[48px] text-base font-semibold bg-[#00878C] text-white border border-[#7F56D9] rounded-lg">
            Take me home
          </button>
        </div>
      </div>
      <div>
        <img src={Image} alt="" className="w-[720px] h-[640px]" />
      </div>
    </div>
  );
};

export default ErrorPage;
