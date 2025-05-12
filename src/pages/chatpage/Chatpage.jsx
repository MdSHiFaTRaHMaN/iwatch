import React from "react";
import Sidebar from "./Sidebar";
import ChatContainer from "./ChatContainer";

const Chatpage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex h-screen font-messageFont bg-[#F7FAFC]">
        <Sidebar />
        <div className="flex-1">
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Chatpage;
