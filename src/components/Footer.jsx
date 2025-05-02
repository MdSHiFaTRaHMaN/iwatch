import React from "react";
import { InstagramOutlined } from "@ant-design/icons";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#00878C] text-white px-4 lg:px-0 py-10">
      {/* Main Section */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 border-b border-teal-600">
        {/* Logo & Description */}
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-2">Reddy App</h2>
          <p className="text-[17px] leading-[24px] max-w-md">
            Lorem ipsum dolor sit amet consectetur. Pharetra viverra felis
            viverra nibh. Iaculis elit sed facilisis massa purus.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Services</h3>
            <ul className="space-y-1 text-[16px] leading-[28px]">
              <li>UX Design</li>
              <li>Website Development</li>
              <li>App Development</li>
              <li>SEO</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Company</h3>
            <ul className="space-y-1 text-[16px] leading-[28px]">
              <li>Career</li>
              <li>Blog</li>
              <li>Testimonial</li>
              <li>Request a Quote</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-[16px] leading-[28px]">
              Plaza # 35, Z-block, DHA <br />
              Phase 3 Kolding 54792 <br />
              Denmark
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-screen-xl mx-auto mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white gap-4">
        <p className="text-center md:text-left">
          ©2025 Reddy App. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <FaFacebookF className="text-2xl hover:text-white cursor-pointer" />
          <InstagramOutlined className="text-2xl hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-2xl hover:text-white cursor-pointer" />
          <FaXTwitter className="text-2xl hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
