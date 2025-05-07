import React from "react";
import Sidebar from "./Sidebar";
import ChatContainer from "./ChatContainer";

const Chatpage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex gap-[150px] h-screen font-messageFont bg-[#F7FAFC]">
        <Sidebar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Chatpage;
