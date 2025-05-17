import React from "react";
import { Input, Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const NewsletterSubscription = () => {
  return (
    <div className="w-full px-1.5 lg:p-0 lg:w-[1380px] h-[400px] lg:h-[500px] mx-auto">
      <div className="bg-gradient-to-br from-[#00878C] to-[#2A4847] text-white rounded-xl lg:rounded-[29px] py-16 text-center shadow-lg">
        <h2 className="text-3xl md:text-[60px] font-semibold leading-10 lg:leading-[71px] mb-4">
          Get News and <br /> Recommendations
        </h2>
        <p className="text-sm md:text-[18px] text-gray-100 font-[400] mb-8">
          Stay up to date with our news and announcements by subscribing to our
          Newsletter.
        </p>

        <div className="w-[300px] lg:w-[500px] mx-auto mt-6 bg-transparent border rounded-full bg-white focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40">
          <form className="flex bg-white rounded-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 h-10 px-1 lg:px-4 py-2 m-0 lg:m-1  text-[#797979] font-semibold placeholder-gray-400 placeholder:pl-2 bg-transparent border-none appearance-none focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              type="button"
              className="h-10 px-4 py-2 -ml-[20px] text-base font-semibold lg:-ml-0 m-1 rounded-full text-white transition-colors duration-300 transform bg-[#00878C] hover:bg-[#208682] focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
