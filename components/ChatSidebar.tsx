"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/Logo.png";
import Link from "next/link";

export default function ChatSidebar() {
  const [sortBy, setSortBy] = useState("Month");
  return (
    <div className="flex flex-col h-full items-center p-6 gap-6 relative">
      <div className="flex justify-center items-center gap-3 w-full">
        <Image src={Logo} alt="" />
        <h1 className="text-[2vw]">AiTalk</h1>
      </div>
      <Link
        href={"/upgrade"}
        className="bg-[#D3830A]/15 w-full text-center py-3 rounded-[10px]"
      >
        Upgrade Plan
      </Link>
      <div className="mb-6 flex items-center w-full justify-center ">
        <label htmlFor="sort-by" className="block text-gray-400 mb-2">
          Sort By:
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className=" bg-gray-900 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-700 w-1/2"
        >
          <option value="Month">Month</option>
          <option value="Date">Date</option>
          <option value="Priority">Priority</option>
        </select>
      </div>
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-[1.2vw]">May</h1>
          <div className="group w-full flex items-center hover:bg-[#2E3036] rounded-[10px]">
            <span className="w-[90%] text-[#9D9999] text-[1vw] py-2.5 px-2.5">
              Web Design Porposal
            </span>
            <div className="w-[10%] hidden group-hover:block">
              <button className="w-full h-full py-3.5">
                <svg
                  width="18"
                  viewBox="0 0 24 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.08527" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="12.451" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="20.8172" cy="4" r="3.18293" fill="#D9D9D9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[1.2vw]">May</h1>
          <div className="group w-full flex items-center hover:bg-[#2E3036] rounded-[10px]">
            <span className="w-[90%] text-[#9D9999] text-[1vw] py-2.5 px-2.5">
              Web Design Porposal
            </span>
            <div className="w-[10%] hidden group-hover:block">
              <button className="w-full h-full py-3.5">
                <svg
                  width="18"
                  viewBox="0 0 24 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.08527" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="12.451" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="20.8172" cy="4" r="3.18293" fill="#D9D9D9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[1.2vw]">May</h1>
          <div className="group w-full flex items-center hover:bg-[#2E3036] rounded-[10px]">
            <span className="w-[90%] text-[#9D9999] text-[1vw] py-2.5 px-2.5">
              Web Design Porposal
            </span>
            <div className="w-[10%] hidden group-hover:block">
              <button className="w-full h-full py-3.5">
                <svg
                  width="18"
                  viewBox="0 0 24 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.08527" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="12.451" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="20.8172" cy="4" r="3.18293" fill="#D9D9D9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-[1.2vw]">May</h1>
          <div className="group w-full flex items-center hover:bg-[#2E3036] rounded-[10px]">
            <span className="w-[90%] text-[#9D9999] text-[1vw] py-2.5 px-2.5">
              Web Design Porposal
            </span>
            <div className="w-[10%] hidden group-hover:block">
              <button className="w-full h-full py-3.5">
                <svg
                  width="18"
                  viewBox="0 0 24 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4.08527" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="12.451" cy="4" r="3.18293" fill="#D9D9D9" />
                  <circle cx="20.8172" cy="4" r="3.18293" fill="#D9D9D9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 py-8 w-full flex justify-center items-center bg-[#17181c]">
        <button className="flex items-center border-2 border-[#2E3036] px-5 py-2.5 rounded-full text-[#B4B4B4] gap-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 15.5H14.5M12.5 4.50001L13.5 5.50001M14 2.00001C14.1971 2.1969 14.3535 2.43073 14.4602 2.68811C14.5669 2.94549 14.6219 3.22138 14.6219 3.50001C14.6219 3.77863 14.5669 4.05452 14.4602 4.31191C14.3535 4.56929 14.1971 4.80311 14 5.00001L4.5 14.5L0.5 15.5L1.5 11.556L11.004 2.00401C11.3786 1.62758 11.8811 1.40577 12.4116 1.38261C12.9422 1.35946 13.462 1.53665 13.868 1.87901L14 2.00001Z"
              stroke="#787A7E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>New Coversation</span>
        </button>
      </div>
    </div>
  );
}
