import React from "react";
import { Layout } from "antd";
import Sidebar from "../pages/dashboard/Sidebar";
import Header from "../pages/dashboard/Header";
import Dashboard from "../pages/dashboard/Dashboard";

const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <div className="h-screen">
      <Layout hasSider className="h-full">
        <Sidebar />
        <Layout className="bg-[#F7F7F7]">
          <Header />
          <Content className="bg-white p-4">
            <Dashboard />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardLayout;
