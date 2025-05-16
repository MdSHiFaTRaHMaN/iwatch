import React, { useState } from "react";
import {
  AppstoreOutlined,
  FileOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { useMediaQuery } from "react-responsive";

const Sidebar = ({ setIsDrawerVisible, isDrawerVisible }) => {
  const [activeKey, setActiveKey] = useState("dashboard");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const menuGroups = [
    {
      label: "Menu",
      items: [
        {
          key: "dashboard",
          label: "Dashboard",
          icon: <AppstoreOutlined />,
          link: "/dashboard",
        },
        {
          key: "files",
          label: "Shared Files",
          icon: <FileOutlined />,
          link: "/dashboard/files",
        },
      ],
    },
    {
      label: "Chat",
      items: [
        {
          key: "chat",
          label: "Chat",
          icon: <MessageOutlined />,
          link: "/chat",
        },
      ],
    },
    {
      label: "Others",
      items: [
        {
          key: "help",
          label: "Help",
          icon: <QuestionCircleOutlined />,
          link: "/dashboard/help",
        },
        {
          key: "settings",
          label: "Settings",
          icon: <SettingOutlined />,
          link: "/dashboard/settings",
        },
      ],
    },
  ];

  const SidebarContent = () => (
    <div className="px-4 space-y-6">
      <Link to="/">
        <div className="text-[#00878C] text-3xl font-bold text-center py-6">
          Reddy App
        </div>
      </Link>
      {menuGroups.map((group) => (
        <div key={group.label}>
          <div className="text-xs font-medium text-[#8B8B8B] mb-2 ml-4">
            {group.label}
          </div>
          <div className="flex flex-col space-y-1">
            {group.items.map((item) => (
              <Link to={item.link} key={item.key} className="w-full">
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveKey(item.key);
                    if (isMobile) setIsDrawerVisible(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg transition-all
                  ${
                    activeKey === item.key
                      ? "bg-[#E5F5F4] text-[#00878C]"
                      : "text-[#797979] hover:bg-gray-200"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          title={<span className="font-bold text-2xl">Reddy App</span>}
          placement="left"
          onClose={() => setIsDrawerVisible(false)}
          open={isDrawerVisible}
          bodyStyle={{ padding: 0 }}
        >
          {SidebarContent()}
        </Drawer>
      ) : (
        <Sider width={248} className="bg-[#F7F7F7] h-[100vh]">
          {SidebarContent()}
        </Sider>
      )}
    </>
  );
};

export default Sidebar;
