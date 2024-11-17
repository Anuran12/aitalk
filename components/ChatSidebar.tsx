import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ChatSidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sample chat history data organized by months
  const chatHistory = [
    {
      month: "May",
      chats: [
        "Marketing Strategy Review",
        "Website Content Planning",
        "Client Project Proposal",
        "Team Meeting Notes",
      ],
    },
    {
      month: "April",
      chats: [
        "Product Development Ideas",
        "Social Media Campaign",
        "Budget Planning 2024",
        "User Research Summary",
      ],
    },
    {
      month: "March",
      chats: [
        "Customer Feedback Analysis",
        "Brand Guidelines Draft",
        "SEO Optimization Plan",
        "App Feature Requirements",
      ],
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
      </button>

      <div
        className={`
        fixed top-0 left-0 h-full bg-[#17181c] transition-transform duration-300
        w-80 lg:w-72 
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
      `}
      >
        <div className="flex flex-col h-full p-6 gap-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/Logo.png"
                alt="AiTalk Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="text-2xl font-semibold">AiTalk</h1>
          </div>

          {/* Upgrade Button */}
          <Link
            href="/upgrade"
            className="bg-[#D3830A]/15 text-center py-3 rounded-lg hover:bg-[#D3830A]/20 transition-colors"
          >
            Upgrade Plan
          </Link>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {chatHistory.map((monthGroup, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-lg font-medium mb-2">{monthGroup.month}</h2>
                {monthGroup.chats.map((chat, chatIdx) => (
                  <div
                    key={chatIdx}
                    className="group flex items-center hover:bg-[#2E3036] rounded-lg mb-1 transition-colors"
                  >
                    <span className="flex-1 p-3 text-[#9D9999] text-sm">
                      {chat}
                    </span>
                    <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        width="18"
                        viewBox="0 0 24 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="4.08527"
                          cy="4"
                          r="3.18293"
                          fill="#D9D9D9"
                        />
                        <circle cx="12.451" cy="4" r="3.18293" fill="#D9D9D9" />
                        <circle
                          cx="20.8172"
                          cy="4"
                          r="3.18293"
                          fill="#D9D9D9"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* New Conversation Button */}
          <div className="mt-auto pt-4 border-t border-gray-800">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#2E3036] text-[#B4B4B4] hover:bg-[#2E3036] transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 15.5H14.5M12.5 4.50001L13.5 5.50001M14 2.00001C14.1971 2.1969 14.3535 2.43073 14.4602 2.68811C14.5669 2.94549 14.6219 3.22138 14.6219 3.50001C14.6219 3.77863 14.5669 4.05452 14.4602 4.31191C14.3535 4.56929 14.1971 4.80311 14 5.00001L4.5 14.5L0.5 15.5L1.5 11.556L11.004 2.00401C11.3786 1.62758 11.8811 1.40577 12.4116 1.38261C12.9422 1.35946 13.462 1.53665 13.868 1.87901L14 2.00001Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              New Conversation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
