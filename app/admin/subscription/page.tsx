import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import QuickStats from "@/components/admin/QuickStats";
import React from "react";

export default function SubscriptionPage() {
  return (
    <div className="flex items-center justify-center min-h-screen relative px-3 md:px-0">
      <div className="w-[20%] h-full border-r-2 border-[#2E3036] fixed top-0 left-0 hidden md:block">
        <AdminSidebar />
      </div>
      <div className="w-[20%] h-full hidden md:block"></div>
      <div className="w-full md:w-[80%] flex flex-col items-center min-h-screen ">
        <AdminHeader />
        <div className="w-full px-[2vw]">
          <QuickStats />
          {/* Subscription Section */}
          <h1 className="text-[#787A7E] text-[5vw] md:text-[2vw] pb-5">
            Subscription
          </h1>
          <div>
            <div className="mb-8 w-full">
              <div className="flex w-full">
                <div className="bg-[#2E3036] p-4 rounded-lg w-full">
                  <div className="flex gap-2 mb-4">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded">
                      Free Plan
                    </button>
                    <button className="text-gray-400 px-4 py-2">
                      Plus Plan
                    </button>
                    <button className="text-gray-400 px-4 py-2">
                      Business Plan
                    </button>
                  </div>
                  <div className="bg-[#1E1F23] rounded-[10px]">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between py-2 px-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                          <span>Business Plan</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-1 bg-gray-700 rounded">
                            Block
                          </button>
                          <button className="px-4 py-1 text-red-500">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
