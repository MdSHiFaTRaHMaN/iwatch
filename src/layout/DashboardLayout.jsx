import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "../pages/dashboard/Sidebar";
import Header from "../pages/dashboard/Header";
import Dashboard from "../pages/dashboard/Dashboard";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const DashboardLayout = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  return (
    <div className="h-screen">
      <Layout hasSider className="h-full">
        <Sidebar
          isDrawerVisible={isDrawerVisible}
          setIsDrawerVisible={setIsDrawerVisible}
        />
        <Layout className="bg-[#F7F7F7]">
          <div className="sticky top-0 z-10">
            <Header setIsDrawerVisible={setIsDrawerVisible} />
          </div>
          <Content className="bg-white p-4">
            <div className="bg-white rounded-xl shadow-sm p-4">
              {/* <Dashboard /> */}
              <Outlet></Outlet>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
