import React from "react";
import { Input, Avatar, Button } from "antd";
import { FiSearch } from "react-icons/fi";
import { MenuOutlined } from "@ant-design/icons";
import Profile from "../../assets/images/mac.png";

const Header = ({ setIsDrawerVisible }) => {
  return (
    <div className="flex sm:items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-sm gap-4 sm:gap-0">
      {/* Left: Title */}
      <h1 className="text-lg sm:text-xl font-semibold text-black">Dashboard</h1>

      {/* Center: Search Bar */}
      <div className="flex-1 sm:flex justify-center hidden sm:block">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-md">
          <FiSearch className="text-gray-400 text-lg mr-2" />
          <Input
            placeholder="Search"
            bordered={false}
            className="bg-transparent focus:outline-none"
          />
        </div>
      </div>

      {/* Right: User Info */}
      <div className="flex items-center justify-end gap-3">
        <Avatar src={Profile} />
        <div className="hidden sm:block leading-tight">
          <div className="font-medium text-sm">Mac Allister</div>
          <div className="text-xs text-gray-500">@macallister</div>
        </div>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setIsDrawerVisible(true)}
          className="m-2 text-xl block md:hidden lg:hidden xl:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
