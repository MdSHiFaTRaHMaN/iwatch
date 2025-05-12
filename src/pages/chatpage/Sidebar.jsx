import React, { useState } from "react";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { FiSettings } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { Drawer, Button } from "antd";
import { LuMenu } from "react-icons/lu";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Drawer Button for Mobile */}
      <Button
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={toggleDrawer}
      >
        <LuMenu />
      </Button>

      {/* Sidebar Drawer */}
      <Drawer
        title="CHAT A.I+"
        placement="left"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        className="lg:hidden"
      >
        <div>
          <div className="flex items-center gap-2 my-6">
            <button className="w-[170px] bg-[#5662F6] text-white py-2 rounded-full font-medium flex items-center justify-center gap-2">
              <PlusOutlined /> New chat
            </button>
            <div className="relative w-[40px] h-[40px] rounded-full bg-black shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center">
              <SearchOutlined className="text-white text-xl" />
            </div>
          </div>
          <div className="flex items-center justify-between border-y py-3">
            <h2 className="text-sm font-medium ml-3 text-gray-600 mb-2">
              Your conversations
            </h2>
            <p className="text-xs font-medium text-blue-400 cursor-pointer">
              Clear all
            </p>
          </div>
          <ul className="text-sm space-y-2">
            <li className="hover:bg-gray-100 px-3 whitespace-nowrap py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Create Html Game
              Environment
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Apply To Leave
              For Emergency
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> What Is UI UX
              Design?
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Create POS
              System
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> What Is UX
              Audit?
            </li>
            <li className="bg-[#E8F0FF] text-[#3A7EFF] px-3 py-2 flex items-center justify-between rounded-lg cursor-pointer font-medium">
              <span className="flex items-center gap-2">
                <IoChatboxEllipsesOutline className="text-black" /> Create Chatbot
                GPT...
              </span>
              <div className="flex items-center gap-2 text-black">
                <span>
                  <RiDeleteBinLine />
                </span>
                <span>
                  <TbEdit />
                </span>
              </div>
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> How Chat GPT
              Work?
            </li>
          </ul>

          <h2 className="text-sm ml-3 font-medium text-gray-600 border-y py-5 mt-6 mb-2">
            Last 7 Days
          </h2>
          <ul className="text-sm space-y-2">
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Crypto Lending
              App Name
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Operator Grammar
              Types
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-gray-500 border-t pt-4 space-y-2">
          <div className="flex items-center gap-2 border rounded-full py-3 px-4 text-black font-medium">
            <span className="bg-gray-300 p-2 rounded-full">
              <FiSettings />
            </span>{" "}
            Settings
          </div>
          <div className="flex items-center gap-2 text-black font-medium border rounded-full py-3 px-4">
            <img
              src="https://i.pravatar.cc/40"
              className="w-6 h-6 rounded-full"
              alt="User"
            />
            Andrew Neilson
          </div>
        </div>
      </Drawer>

      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex w-[300px] bg-gray-50 mt-2 rounded-t-xl border-r p-4 flex-col justify-between overflow-y-auto">
        <h1 className="font-semibold text-[28px] tracking-widest"> CHAT A.I+</h1>
        <div>
          <div className="flex items-center gap-2 my-6">
            <button className="w-[170px] bg-[#5662F6]  text-white py-2 rounded-full font-medium flex items-center justify-center gap-2">
              <PlusOutlined /> New chat
            </button>

            <div className="relative  w-[40px] h-[40px] rounded-full bg-black shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex items-center justify-center">
              <SearchOutlined className="text-white text-xl" />
            </div>
          </div>
          <div className="flex items-center justify-between border-y py-3">
            <h2 className="text-sm font-medium ml-3 text-gray-600 mb-2">
              Your conversations
            </h2>
            <p className="text-xs font-medium text-blue-400 cursor-pointer">
              Clear all
            </p>
          </div>
          <ul className="text-sm space-y-2">
            <li className="hover:bg-gray-100 px-3 whitespace-nowrap py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Create Html Game
              Environment
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Apply To Leave
              For Emergency
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> What Is UI UX
              Design?
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Create POS
              System
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> What Is UX
              Audit?
            </li>
            <li className="bg-[#E8F0FF] text-[#3A7EFF] px-3 py-2 flex items-center justify-between rounded-lg cursor-pointer font-medium">
              <span className="flex items-center gap-2">
                <IoChatboxEllipsesOutline className="text-black" /> Create Chatbot
                GPT...
              </span>
              <div className="flex items-center gap-2 text-black">
                <span>
                  <RiDeleteBinLine />
                </span>
                <span>
                  <TbEdit />
                </span>
              </div>
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> How Chat GPT
              Work?
            </li>
          </ul>

          <h2 className="text-sm ml-3 font-medium text-gray-600 border-y py-5 mt-6 mb-2">
            Last 7 Days
          </h2>
          <ul className="text-sm space-y-2">
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Crypto Lending
              App Name
            </li>
            <li className="hover:bg-gray-100 px-3 py-2 flex items-center gap-2 rounded-lg cursor-pointer">
              <IoChatboxEllipsesOutline className="text-black" /> Operator Grammar
              Types
            </li>
          </ul>
        </div>

        <div className="mt-4 text-sm text-gray-500 border-t pt-4 space-y-2">
          <div className="flex items-center gap-2 border rounded-full py-3 px-4 text-black font-medium">
            <span className="bg-gray-300 p-2 rounded-full">
              <FiSettings />
            </span>{" "}
            Settings
          </div>
          <div className="flex items-center gap-2 text-black font-medium border rounded-full py-3 px-4">
            <img
              src="https://i.pravatar.cc/40"
              className="w-6 h-6 rounded-full"
              alt="User"
            />
            Andrew Neilson
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
