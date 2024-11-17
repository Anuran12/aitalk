"use client";
import React from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import QuickStats from "@/components/admin/QuickStats";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const statData = [
  { time: "0h", newUsers: 10, newSubs: 8 },
  { time: "4h", newUsers: 15, newSubs: 12 },
  { time: "8h", newUsers: 25, newSubs: 20 },
  { time: "12h", newUsers: 60, newSubs: 45 },
  { time: "16h", newUsers: 80, newSubs: 55 },
  { time: "20h", newUsers: 45, newSubs: 30 },
  { time: "24h", newUsers: 20, newSubs: 15 },
];

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center min-h-screen relative w-full px-3 md:px-0">
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
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#2E3036] p-4 rounded-lg">
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

                <div className="ounded-lg">
                  <div className="bg-[#2E3036] p-4 rounded-[10px]">
                    <h3 className="font-bold mb-4">Incoming Subscription</h3>
                    {[1, 2].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                          <span>Business Plan</span>
                        </div>
                        <div className="flex gap-2">
                          <button className="py-1 bg-[#D3830A]/25 rounded-full text-sm text-[#D3830A] px-6">
                            Plus
                          </button>
                          <button className="px-3 py-1 text-green-500 text-sm">
                            Accept
                          </button>
                          <button className="px-3 py-1 text-red-500 text-sm">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-4 bg-[#2E3036] p-4 rounded-[10px]">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold">Daily Stats</h3>
                      <select className="bg-gray-700 p-1 rounded text-sm">
                        <option>Last 24 Hrs</option>
                      </select>
                    </div>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={statData}>
                          <XAxis dataKey="time" stroke="#6B7280" />
                          <YAxis stroke="#6B7280" />
                          <Line
                            type="monotone"
                            dataKey="newUsers"
                            stroke="#EAB308"
                            strokeWidth={2}
                            dot={false}
                          />
                          <Line
                            type="monotone"
                            dataKey="newSubs"
                            stroke="#A855F7"
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
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
