import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className=" w-full grid grid-cols-3 items-center justify-center px-[8vw]">
      <div className="w-full"></div>
      <div className="w-full flex justify-center items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
      </div>
      <div className="w-full flex gap-5 justify-end items-center">
        <Link
          href={"/about"}
          className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
        >
          About Us
        </Link>
        <Link
          href={"/contact"}
          className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
        >
          Contact US
        </Link>
      </div>
    </div>
  );
}
