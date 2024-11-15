import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.png";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className=" w-full grid grid-cols-3 items-center justify-center px-[8vw]">
      <div className="w-full"></div>
      <div className="w-full flex justify-center items-center">
        <Image src={Logo} alt="" />
      </div>
      <div className="w-full flex gap-5 justify-end items-center">
        <Link
          href={"/about"}
          className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full"
        >
          About Us
        </Link>
        <Link
          href={"/"}
          className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full"
        >
          Contact US
        </Link>
      </div>
    </div>
  );
}
