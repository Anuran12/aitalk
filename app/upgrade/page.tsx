import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function UpgradePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen p-8">
      <Header />
      <h1 className="font-bold text-[2.5vw]">Upgrade Plan</h1>
      <div className="grid grid-cols-3 w-[75%] gap-4">
        <div className="bg-[#313D6A]/15 border-2 border-[#2E3036] w-full flex flex-col gap-4 items-center px-5 md:px-8 py-4 rounded-[10px]">
          <h1 className="text-[2vw]">free</h1>
          <div className="flex gap-2">
            <span className="text-[1.3vw]">&#36;</span>
            <div className="flex items-center gap-2">
              <h1 className="text-[3vw] font-bold">0.00</h1>
              <span className="text-[#A9ABB6]">USD/Month</span>
            </div>
          </div>
          <p className="text-[1.3vw] text-center w-[90%]">
            Explore how AI can help you with every day task
          </p>
          <button className="w-full bg-[#2E3036] py-3 rounded-[10px] text-[#787A7E] my-5">
            Current Plan
          </button>
          <ul className="text-[#A9ABB6] text-[1.2vw] flex flex-col gap-4">
            <li>20 questions daily</li>
            <li>Access to AiTalk ai chatbox</li>
            <li>public discussion supported</li>
            <li>
              Limited access to data analysis, file uploads, vision, web
              browsing, and image generation
            </li>
            <li>Use custom GPTs</li>
          </ul>
        </div>
        <div className="bg-[#754015]/20 border-2 border-[#2E3036] w-full flex flex-col gap-4 justify-center items-center px-5 md:px-8 py-4 rounded-[10px]">
          <h1 className="text-[2vw]">Plus</h1>
          <div className="flex gap-2">
            <span className="text-[1.3vw]">&#36;</span>
            <div className="flex items-center gap-2">
              <h1 className="text-[3vw] font-bold">19</h1>
              <span className="text-[#A9ABB6]">USD/Month</span>
            </div>
          </div>
          <p className="text-[1.3vw] text-center w-[90%]">
            Explore how AI can help you with every day task
          </p>
          <button className="w-full bg-[#D3830A] py-3 rounded-[10px] text-[#000000] font-semibold my-5">
            Upgrade to Plus
          </button>
          <ul className="text-[#A9ABB6] text-[1.2vw] flex flex-col gap-4">
            <li>Fully access to our global AI supercomputer</li>
            <li>Fully access to our Aitalk AI ver 1.0</li>
            <li>Unlimited question</li>
            <li>1 IP address per account</li>
            <li>Email support</li>
            <li>
              Access to data analysis, file uploads, vision, web browsing, and
              image generation
            </li>
            <li>Access to Advanced Voice Mode</li>
          </ul>
        </div>
        <div className="bg-[#313D6A]/15 border-2 border-[#2E3036] w-full flex flex-col gap-4 items-center px-5 md:px-8 py-4 rounded-[10px]">
          <h1 className="text-[2vw]">Plus</h1>
          <div className="flex gap-2">
            <span className="text-[1.3vw]">&#36;</span>
            <div className="flex items-center gap-2">
              <h1 className="text-[3vw] font-bold">Ask</h1>
              <span className="text-[#A9ABB6]"></span>
            </div>
          </div>
          <p className="text-[1.3vw] text-center w-[90%]">
            Explore how AI can help you with every day task
          </p>
          <button className="w-full bg-[#2E3036] py-3 rounded-[10px] text-[#787A7E] my-5">
            Upgrade to Business
          </button>
          <ul className="text-[#A9ABB6] text-[1.2vw] flex flex-col gap-4">
            <li>Custom made AI model for Corporate</li>
            <li>Private GPUs hosted at customer&#41;s location</li>
            <li>public discussion supported</li>
            <li>Fully control of the ai supercomputer</li>
            <li>24x7 Support</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
