import React from "react";
import { Collapse, Divider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const text = `
  A dog is a type of domesticated animal.
  It can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "What is this app about?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "How do I create an account?",
    children: (
      <p>
        To create an account, go to the signup page and fill out your details.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is my data safe?",
    children: (
      <p>
        Yes, we prioritize your data privacy using modern security standards.
      </p>
    ),
  },
  {
    key: "4",
    label: "How can I reset my password?",
    children: (
      <p>
        On the login page, click on "Forgot Password", enter your email, and
        follow the instructions sent to your inbox.
      </p>
    ),
  },
];

const Help = () => {
  return (
    <div className="bg-gray-100 py-14 rounded-2xl">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <div className="flex items-center gap-2 mb-6">
          <InfoCircleOutlined className="text-3xl text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-800">Help & Support</h1>
        </div>
        <p className="text-gray-600 mb-10">
          Find answers to the most frequently asked questions. If you need
          further help, feel free to contact us.
        </p>
        <Divider />
        <Collapse
          items={items}
          accordion
          size="large"
          bordered={false}
          className="bg-white"
        />
      </div>
    </div>
  );
};

export default Help;
