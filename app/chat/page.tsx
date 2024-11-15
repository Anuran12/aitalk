import ChatSidebar from "@/components/ChatSidebar";
import React from "react";

export default function ChatPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[20%] h-full border-r-2 border-[#2E3036]">
        <ChatSidebar />
      </div>
      <div className="w-[80%]"></div>
    </div>
  );
}
