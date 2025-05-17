import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Progress, Avatar, Button } from "antd";
import { FiDownloadCloud } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import Background from "../../assets/images/backdashboard.jpg";

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
    <div className="bg-white min-h-screen grid grid-cols-1 xl:grid-cols-3 gap-6">
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
        <div className="bg-[#F7F7F7] rounded-xl shadow-sm !overflow-x-auto">
          <div className="flex items-center justify-between px-6 pt-6">
            <h2 className="text-xl font-semibold">Recent Files</h2>
            <button className="text-base text-[#00878C] font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto p-5">
            <table className="w-full text-sm text-left bg-white rounded-xl p-6">
              <thead>
                <tr className="text-[#515151] text-sm font-medium border-b border-gray-100">
                  <th className="p-6 flex items-center gap-2">
                    Name <FaArrowDown />
                  </th>
                  <th className="p-2">Size</th>
                  <th className="p-2 whitespace-nowrap px-2">Last Modified</th>
                  <th className="p-2 text-right pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="px-6">
                {files.map((file, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 px-6"
                  >
                    <td className="py-3 px-6 mt-2 whitespace-nowrap flex items-center gap-3 text-[#646464] text-sm font-medium">
                      <FaRegFilePdf className="text-[#DC2C2F] text-lg" />
                      {file.name}
                    </td>
                    <td className="py-[13px] text-[#646464] text-sm">{file.size}</td>
                    <td className="py-[13px] text-[#646464] text-sm">{file.date}</td>
                    <td className="py-[13px] text-right text-gray-400 pr-6">
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
      <div className="space-y-6 bg-[#F7F7F7] rounded-xl p-5">
        {/* My Storage Card */}
        <div className="">
          <h3 className="text-xl text-[#000000] font-semibold mb-4">
            My Storage
          </h3>
          <div className="flex items-center justify-center mb-4 -ml-[27px] lg:-ml-0 rotate-[70deg] w-[368px]">
            <Progress
              type="circle"
              percent={85}
              strokeWidth={18}
              width={256}
              strokeColor="#00878C"
              format={(percent) => (
                <div className="-rotate-[70deg]">
                  <div className="text-4xl font-bold">{percent}%</div>
                  <div className="text-base font-medium text-[#797979]">
                    Total 1 TB
                  </div>
                </div>
              )}
            />
          </div>
          <div className="ml-7 text-sm text-gray-600">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#00878C] w-[20px] h-[20px] rounded-full"></div>
              <p className="text-base text-[#797979] font-medium">
                Total Used 85.2 GB
              </p>
            </div>
            <div className="flex items-center gap-[12px] mt-[12px]">
              <div className="bg-[#E5F5F4] w-[20px] h-[20px] rounded-full"></div>
              <p className="text-base text-[#797979] font-medium">
                Total Left 14.8 GB
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3 bg-[#FFFFFF] rounded-xl p-3">
            <HiOutlineClipboardDocument className="text-4xl text-[#00878C]" />
            <div>
              <p className="text-lg font-medium">Documents</p>
              <p className="text-sm text-[#797979]">1,275 files</p>
            </div>
            <div className="ml-auto font-medium text-sm text-[#797979]">
              85 GB
            </div>
          </div>
        </div>
        {/* Upgrade Card */}
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-2xl shadow-md p-8 w-full lg:w-[368px] h-[314px] lg:h-[314px]  text-white text-center relative overflow-hidden"
        >
          {/* Optional overlay for dim effect */}
          <div className="absolute inset-0 bg-[#00878CDB] opacity-100 z-0"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center mt-[40px]">
            <h3 className="text-3xl lg:text-[32px] font-semibold mb-4">
              Upgrade to Pro for <br /> Unlimited Storage
            </h3>
            <button className="bg-white text-[#00878C] font-semibold text-base mt-2 w-[166px] h-[52px] rounded-full px-6 py-2 shadow">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
