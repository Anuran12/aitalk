"use client";
import React, { useState } from "react";

const PLANS = {
  FREE: "Free Plan",
  PLUS: "Plus Plan",
  BUSINESS: "Business Plan",
};

const REGISTRATION_METHODS = ["Google", "Email", "GitHub", "Apple"];

const MOCK_USERS = [
  {
    id: 1,
    name: "Emma Thompson",
    registrationMethod: "Google",
    dateJoined: "Nov 12,2024",
    plan: PLANS.BUSINESS,
    prompt: "456",
    avatar: "ET",
  },
  {
    id: 2,
    name: "Michael Chen",
    registrationMethod: "Google",
    dateJoined: "Nov 12,2024",
    plan: PLANS.BUSINESS,
    prompt: "442",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    registrationMethod: "GitHub",
    dateJoined: "Nov 12,2024",
    plan: PLANS.BUSINESS,
    prompt: "389",
    avatar: "SJ",
  },
  {
    id: 4,
    name: "James Wilson",
    registrationMethod: "Apple",
    dateJoined: "Nov 12,2024",
    plan: PLANS.BUSINESS,
    prompt: "367",
    avatar: "JW",
  },
  {
    id: 5,
    name: "Sofia Rodriguez",
    registrationMethod: "Email",
    dateJoined: "Nov 11,2024",
    plan: PLANS.PLUS,
    prompt: "234",
    avatar: "SR",
  },
  {
    id: 6,
    name: "Alex Kim",
    registrationMethod: "GitHub",
    dateJoined: "Nov 11,2024",
    plan: PLANS.PLUS,
    prompt: "198",
    avatar: "AK",
  },
  {
    id: 7,
    name: "Lisa Patel",
    registrationMethod: "Google",
    dateJoined: "Nov 11,2024",
    plan: PLANS.PLUS,
    prompt: "187",
    avatar: "LP",
  },
  {
    id: 8,
    name: "David Miller",
    registrationMethod: "Email",
    dateJoined: "Nov 10,2024",
    plan: PLANS.FREE,
    prompt: "123",
    avatar: "DM",
  },
  {
    id: 9,
    name: "Maria Garcia",
    registrationMethod: "Apple",
    dateJoined: "Nov 10,2024",
    plan: PLANS.FREE,
    prompt: "98",
    avatar: "MG",
  },
  {
    id: 10,
    name: "Thomas Anderson",
    registrationMethod: "GitHub",
    dateJoined: "Nov 10,2024",
    plan: PLANS.FREE,
    prompt: "87",
    avatar: "TA",
  },
  {
    id: 11,
    name: "Olivia Brown",
    registrationMethod: "Google",
    dateJoined: "Nov 09,2024",
    plan: PLANS.BUSINESS,
    prompt: "432",
    avatar: "OB",
  },
  {
    id: 12,
    name: "William Lee",
    registrationMethod: "Email",
    dateJoined: "Nov 09,2024",
    plan: PLANS.PLUS,
    prompt: "276",
    avatar: "WL",
  },
  {
    id: 13,
    name: "Isabella Martinez",
    registrationMethod: "Apple",
    dateJoined: "Nov 09,2024",
    plan: PLANS.FREE,
    prompt: "156",
    avatar: "IM",
  },
  {
    id: 14,
    name: "Daniel Taylor",
    registrationMethod: "GitHub",
    dateJoined: "Nov 08,2024",
    plan: PLANS.BUSINESS,
    prompt: "445",
    avatar: "DT",
  },
  {
    id: 15,
    name: "Sophie Wilson",
    registrationMethod: "Google",
    dateJoined: "Nov 08,2024",
    plan: PLANS.PLUS,
    prompt: "289",
    avatar: "SW",
  },
];

export default function DetailedSubscription() {
  const [selectedPlan, setSelectedPlan] = useState(PLANS.FREE);
  const [users, setUsers] = useState(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("Last 24 Hrs");

  const filteredUsers = users.filter((user) => {
    const matchesPlan = user.plan === selectedPlan;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.registrationMethod.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPlan && matchesSearch;
  });

  const handleDelete = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div className="p-6 rounded-lg w-full">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#787A7E] text-[5vw] md:text-[2vw]">
          Subscription
        </h1>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 absolute left-2 top-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search User"
              className="bg-black/0 rounded-[10px] border-2 border-[#2E3036] cursor-pointer py-2 pl-10 pr-4 w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Time Filter Dropdown */}
          <select
            className="bg-black/0 rounded-[10px] border-2 border-[#2E3036] cursor-pointer px-4 py-2"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option>Last 24 Hrs</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      <div className=" w-full bg-[#2E3036] rounded-[10px] p-5">
        {/* Plan Selection Tabs */}
        <div className="flex gap-2 mb-6 ">
          {Object.values(PLANS).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedPlan === plan
                  ? "bg-white text-gray-900"
                  : "text-gray-400 hover:bg-gray-700"
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Users Table */}
        <div className="bg-[#1E1F23] rounded-lg">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-700 text-gray-400">
            <div className="col-span-1">Name</div>
            <div className="col-span-1">Registration Method</div>
            <div className="col-span-1">Date Joined</div>
            <div className="col-span-1">Plan</div>
            <div className="col-span-1">Prompt</div>
            <div className="col-span-1">Action</div>
          </div>

          {/* Table Body */}
          {filteredUsers.length === 0 ? (
            <div className="p-4 text-center text-gray-400">
              No users found for {selectedPlan}
            </div>
          ) : (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-6 gap-4 p-4 border-b border-gray-700 items-center"
              >
                <div className="col-span-1 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                    {user.avatar}
                  </div>
                  <span className="text-white">{user.name}</span>
                </div>
                <div className="col-span-1 text-gray-400">
                  {user.registrationMethod}
                </div>
                <div className="col-span-1 text-gray-400">
                  {user.dateJoined}
                </div>
                <div className="col-span-1">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-500 rounded-full text-sm">
                    {user.plan.split(" ")[0]}
                  </span>
                </div>
                <div className="col-span-1 text-gray-400">{user.prompt}</div>
                <div className="col-span-1 flex gap-2">
                  <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white">
                    Block
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 text-red-500 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
