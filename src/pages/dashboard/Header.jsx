import React from "react";
import { Input, Avatar } from "antd";
import { FiSearch } from "react-icons/fi";
import Profile from "../../assets/images/mac.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left: Title */}
      <h1 className="text-xl font-semibold text-black">Dashboard</h1>

      <div className="flex items-center">
        {/* Center: Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[350px] mx-6">
          <FiSearch className="text-gray-400 text-lg mr-2" />
          <Input
            placeholder="Search"
            bordered={false}
            className="bg-transparent focus:outline-none"
          />
        </div>

        {/* Right: User Info */}
        <div className="flex items-center gap-3">
          <Avatar src={Profile} />
          <div className="leading-tight">
            <div className="font-medium text-sm">Mac Allister</div>
            <div className="text-xs text-gray-500">@macallister</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
