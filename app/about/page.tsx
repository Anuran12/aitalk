import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/Logo.png";
import Aboutimg1 from "@/public/about1.png";
import Aboutimg2 from "@/public/about2.png";
import Aboutimg3 from "@/public/about3.png";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-screen p-8">
      <div className=" w-full grid grid-cols-3 items-center justify-center px-[8vw]">
        <div className="w-full flex justify-start items-center">
          <Link
            href={"/"}
            className=" bg-[#393A40] px-5 aspect-square rounded-full flex justify-center items-center"
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
          <Image src={Logo} alt="" />
        </div>
        <div className="w-full flex gap-5 justify-end items-center">
          <Link
            href={"/contact"}
            className="border-2 border-[#2E3036] px-5 py-2.5 rounded-full text-[1.2vw]"
          >
            Contact US
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-[3vw]">About</h1>
        <p className="w-[60%] text-[1.5vw] text-center font-thin text-[#a0a0a0]">
          Aitalk is dedicated to democratizing access to artificial
          intelligence, empowering individuals worldwide to harness its
          potential. Our mission is to bridge the technology gap, fostering a
          more equitable and connected global community.
        </p>
      </div>
      <div className="flex flex-col gap-[5vw]">
        <div className="px-[3vw] flex justify-center items-center">
          <Image src={Aboutimg1} alt="" className="rounded-[20px] w-full" />
        </div>
        <div className="px-[3vw] flex justify-center items-center relative">
          <Image src={Aboutimg2} alt="" className="rounded-[20px] w-full" />
          <div className="absolute left-0 top-0 w-[45%] pl-[3vw]">
            <h1 className="text-[2vw] sm:text-[2.5vw]">
              Our vision for the future of AI
            </h1>
            <p className="text-[1.5vw] font-thin leading-[125%] text-[#a0a0a0]">
              Make AI-powered conversation accessible to everyone, regardless of
              geographical location, language, or socioeconomic background.
              Revolutionize human interaction, information exchange, and
              knowledge sharing. Drive positive change by leveraging AI to
              improve quality of life, reduce living costs, and enhance overall
              well-being.
            </p>
          </div>
        </div>
        <div className="w-full px-[3vw] flex rounded-[20px]">
          <div className="w-[50%] ">
            <Image src={Aboutimg3} alt="" className="rounded-l-[20px] w-full" />
          </div>
          <div className="w-[50%] bg-[#1E1F24] rounded-r-[20px] py-[3.5vw] px-[2.5vw] flex flex-col gap-6">
            <h1 className="font-bold text-[2vw]">Core Values</h1>
            <p className="text-[1.2vw] text-[#A5A6A9]">
              <span className="font-semibold text-white">Accessibility: </span>
              AI for all, without barriers.
            </p>
            <p className="text-[1.2vw] text-[#A5A6A9]">
              <span className="font-semibold text-white">Inclusivity: </span>
              Embracing diversity, promoting global understanding.
            </p>
            <p className="text-[1.2vw] text-[#A5A6A9]">
              <span className="font-semibold text-white">Innovation: </span>
              Pioneering AI solutions for real-world impact.
            </p>
            <p className="text-[1.2vw] text-[#A5A6A9]">
              <span className="font-semibold text-white">Empowerment: </span>
              Enabling individuals to make informed decisions.
            </p>
            <p className="text-[1.2vw] text-[#A5A6A9]">
              <span className="font-semibold text-white">Responsibility: </span>
              Ensuring AI benefits humanity.
            </p>
          </div>
        </div>
        <div className="w-full px-[3vw] flex">
          <div className="flex flex-col gap-16 w-full justify-center items-center bg-[#1E1F24] rounded-[20px] py-[4vw]">
            <h1 className="font-bold text-[3.5vw] w-[80%] text-center">
              Join us in shaping the future of technology
            </h1>
            <Link
              href={"/"}
              className="bg-gradient-to-t from-[#34019C] to-[#5F2BFA] px-10 py-3 rounded-full text-[1.2vw]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
