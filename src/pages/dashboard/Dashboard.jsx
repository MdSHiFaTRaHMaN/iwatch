import React from "react";
import {
  UploadOutlined,
  FileTextOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Progress, Avatar, Button } from "antd";
import { FiDownloadCloud } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

const files = [
  { name: "Project Description", size: "5 MB", date: "15 Feb, 2023" },
  { name: "Client List", size: "18 MB", date: "15 Feb, 2023" },
  { name: "Project Description", size: "2 GB", date: "15 Feb, 2023" },
  { name: "Project Description", size: "8.64 MB", date: "15 Feb, 2023" },
  { name: "Project Description", size: "3.5 MB", date: "15 Feb, 2023" },
  { name: "Project Description", size: "894 KB", date: "15 Feb, 2023" },
  { name: "Lana Steiner", size: "89 MB", date: "15 Feb, 2023" },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Left Side (Upload + Recent Files) */}
      <div className="xl:col-span-2 space-y-6">
        <div className="bg-[#F7F7F7] rounded-xl h-[220px]">
          <label
            for="dropzone-file"
            class="flex flex-col items-center w-full max-w-lg p-5 pt-14 mx-auto text-center cursor-pointer rounded-xl"
          >
            <div className="border-[10px] bg-[#E5F5F4] border-[#CEEAEA] p-3 rounded-full">
              <span className="bg-slate-600">
                <FiDownloadCloud className="text-2xl font-semibold text-[#00878C]" />
              </span>
            </div>

            <h2 class="mt-1 font-semibold text-sm tracking-wide text-[#00878C]">
              Click to upload{" "}
              <span className="text-sm font-normal text-[#8B8B8B]">
                or drag and drop
              </span>
            </h2>

            <p class="mt-2 text-xs tracking-wide text-[#8B8B8B]">
              PDF (max. 2 GB).{" "}
            </p>

            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>

        {/* Recent Files Table */}
        <div className="bg-[#F7F7F7] rounded-xl shadow-sm">
          <div className="flex items-center justify-between px-6 pt-6">
            <h2 className="text-xl font-semibold">Recent Files</h2>
            <button className="text-base text-[#00878C] font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto px-6 py-4">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-[#515151] text-sm font-medium border-b border-gray-100">
                  <th className="pb-2 flex items-center gap-2">
                    Name <FaArrowDown />
                  </th>
                  <th className="pb-2">Size</th>
                  <th className="pb-2">Last Modified</th>
                  <th className="pb-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 flex items-center gap-3 text-[#646464] text-sm font-medium">
                      <FaRegFilePdf className="text-[#DC2C2F] text-lg" />
                      {file.name}
                    </td>
                    <td className="py-3 text-[#646464] text-sm">{file.size}</td>
                    <td className="py-3 text-[#646464] text-sm">{file.date}</td>
                    <td className="py-3 text-right text-gray-400">
                      <MoreOutlined className="cursor-pointer text-4xl rotate-90 text-[#8B8B8B" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Side (Storage & Promo) */}
      <div className="space-y-6 bg-[#F7F7F7] rounded-xl p-6">
        {/* My Storage Card */}
        <div className="">
          <h3 className="text-lg font-semibold mb-4">My Storage</h3>
          <div className="flex items-center justify-center mb-4">
            <Progress
              type="circle"
              percent={85}
              strokeWidth={15}
              width={256}
              strokeColor="#00878C"
              format={(percent) => (
                <div>
                  <div className="text-4xl font-bold">{percent}%</div>
                  <div className="text-base font-medium text-[#797979]">
                    Total 1 TB
                  </div>
                </div>
              )}
            />
          </div>
          <div className="ml-7 text-sm text-gray-600">
            <div>
              <p>
                Total Used{" "}
                <span className="text-gray-800 font-medium">85.2 GB</span>
              </p>
            </div>
            <p>
              Total Left{" "}
              <span className="text-gray-800 font-medium">14.8 GB</span>
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 bg-gray-50 rounded-md p-3">
            <FileTextOutlined className="text-xl text-teal-500" />
            <div>
              <p className="text-sm font-medium">Documents</p>
              <p className="text-xs text-gray-400">1,275 files</p>
            </div>
            <div className="ml-auto font-medium text-sm">85 GB</div>
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="bg-teal-600 rounded-xl shadow-sm p-6 text-white text-center">
          <h3 className="text-lg font-semibold mb-2">
            Upgrade to Pro for Unlimited Storage
          </h3>
          <Button
            type="primary"
            className="bg-white text-teal-600 font-medium mt-2 rounded-full"
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
