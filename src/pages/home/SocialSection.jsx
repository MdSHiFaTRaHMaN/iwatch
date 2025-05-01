import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialSection = () => {
  return (
    <div className="grid lg:flex justify-between items-center w-full lg:w-[1320px] mx-auto pb-[30px] lg:pb-[82px]">
      <div>
        <h1 className="text-3xl lg:text-[60px] text-center lg:text-start font-semibold">Follow us on socials</h1>
        <p className="mt-7 text-center text-[18px] leading-[28px] lg:text-start">
          Track the latest releases and updates, ask questions, and suggest
          product <br /> improvements
        </p>
      </div>
      <div className="flex items-center justify-center mt-3 lg:mt-0 gap-3">
        <span className="bg-[#dcf2f3] p-3 rounded-full">
          <FaFacebookF className="text-2xl text-[#00878C]" />
        </span>
        <span className="bg-[#dcf2f3] p-3 rounded-full">
          <FaLinkedinIn className="text-2xl text-[#00878C]" />
        </span>
        <span className="bg-[#dcf2f3] p-3 rounded-full">
          <FaXTwitter className="text-2xl text-[#00878C]"/>
        </span>
      </div>
    </div>
  );
};

export default SocialSection;
