import {
    AppstoreOutlined,
    FileOutlined,
    MessageOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  import Sider from "antd/es/layout/Sider";
  import React, { useState } from "react";
import { Link } from "react-router-dom";
  
  const Sidebar = () => {
    const [activeKey, setActiveKey] = useState("dashboard");
  
    const menuGroups = [
      {
        label: "Menu",
        items: [
          { key: "dashboard", label: "Dashboard", icon: <AppstoreOutlined /> },
          { key: "files", label: "Shared Files", icon: <FileOutlined /> },
        ],
      },
      {
        label: "Chat",
        items: [
          { key: "chat", label: <Link to="/chat">Chat</Link>, icon: <MessageOutlined /> },
        ],
      },
      {
        label: "Others",
        items: [
          { key: "help", label: "Help", icon: <QuestionCircleOutlined /> },
          { key: "settings", label: "Settings", icon: <SettingOutlined /> },
        ],
      },
    ];
  
    return (
      <Sider width={248} className="bg-[#F7F7F7] h-[133vh]">
        <div className="text-[#00878C] text-4xl font-extrabold text-center py-6">
          Reddy
        </div>
  
        <div className="px-4 space-y-6">
          {menuGroups.map((group) => (
            <div key={group.label}>
              <div className="text-xs font-medium text-[#8B8B8B] mb-2 ml-4">{group.label}</div>
              <div className="flex flex-col space-y-1">
                {group.items.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveKey(item.key)}
                    className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-all
                      ${
                        activeKey === item.key
                          ? "bg-[#E5F5F4] text-[#00878C]"
                          : "text-[#797979] hover:bg-gray-200"
                      }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Sider>
    );
  };
  
  export default Sidebar;
  