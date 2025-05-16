import React from "react";
import { Input, Avatar, Button, Dropdown, Menu } from "antd";
import { FiSearch } from "react-icons/fi";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Profile from "../../assets/images/mac.png";

const Header = ({ setIsDrawerVisible }) => {
  const menu = (
    <Menu
      items={[
        {
          label: "My Profile",
          key: "profile",
        },
        {
          label: "Logout",
          key: "logout",
          danger: true,
        },
      ]}
    />
  );
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
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
          <div className="hidden sm:flex leading-tight cursor-pointer select-none">
            <Avatar src={Profile} />
            <div>
            <div className="font-medium text-sm">Mac Allister</div>
              <h4 className="text-xs text-gray-500 flex items-center gap-1">
                @macallister <DownOutlined className="text-xs" />
              </h4>
            </div>
          </div>
        </Dropdown>
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
