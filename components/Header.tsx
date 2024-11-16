import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.png";

export default function Header() {
  return (
    <div className=" w-full grid grid-cols-3 items-center justify-center px-[8vw]">
      <div className="w-full flex justify-start items-center">
        <Link
          href={"/"}
          className=" bg-[#393A40] px-5 aspect-square rounded-full flex justify-center items-center hover:bg-white/75 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="#17181c"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>
      </div>
      <div className="w-full flex justify-center items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
      </div>
      <div className="w-full flex gap-5 justify-end items-center">
        <Link
          href={"/about"}
          className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full text-[1.2vw] hover:bg-gray-800 transition-colors"
        >
          About Us
        </Link>
        <Link
          href={"/contact"}
          className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full text-[1.2vw] hover:bg-gray-800 transition-colors"
        >
          Contact US
        </Link>
      </div>
    </div>
  );
}
