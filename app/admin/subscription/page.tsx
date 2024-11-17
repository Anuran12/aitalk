import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";
import QuickStats from "@/components/admin/QuickStats";
import Subscriptions from "@/components/admin/Subscriptions";
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
                <Subscriptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
