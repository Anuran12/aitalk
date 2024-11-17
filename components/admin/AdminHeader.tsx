import React from "react";
import Image from "next/image";
import Avatar from "@/public/avatar.png";

const AdminHeader = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 md:py-6">
      <div className="flex gap-3">
        <h1 className="text-[#787A7E] text-lg md:text-xl lg:text-2xl font-semibold pl-8 md:pl-0">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button className="bg-[#393A40] w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full">
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.84615 0.961548C0.827077 0.961548 0 1.78862 0 2.8077V10.1923C0 11.2114 0.827077 12.0385 1.84615 12.0385H14.1538C15.1729 12.0385 16 11.2114 16 10.1923V2.8077C16 1.78862 15.1729 0.961548 14.1538 0.961548H1.84615ZM1.84615 2.19232H14.1538C14.4929 2.19232 14.7692 2.46862 14.7692 2.8077V3.11539L8 6.76955L1.23077 3.11539V2.8077C1.23077 2.46862 1.50708 2.19232 1.84615 2.19232ZM1.23077 3.28832L5.24985 6.42309L1.30769 10.4619L6.11569 7.03847L8 8.25016L9.88492 7.03847L14.6923 10.4619L10.7502 6.42309L14.7692 3.28832V10.1923C14.7658 10.2871 14.7394 10.3796 14.6923 10.4619C14.5908 10.6619 14.3932 10.8077 14.1538 10.8077H1.84615C1.60677 10.8077 1.40923 10.6625 1.30769 10.4619C1.26067 10.3798 1.23427 10.2869 1.23077 10.1923V3.28832Z"
              fill="#B3B3B3"
            />
          </svg>
        </button>

        <button className="bg-[#393A40] w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-full">
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_53_503)">
              <path
                d="M14.5999 13.0023L14.4488 12.8689C14.0202 12.4869 13.645 12.0489 13.3332 11.5667C12.9926 10.9013 12.7886 10.1744 12.7332 9.42894V7.23339C12.7362 6.06255 12.3115 4.93093 11.5389 4.05115C10.7663 3.17137 9.69909 2.60399 8.53769 2.45561V1.88227C8.53769 1.72491 8.47518 1.574 8.36391 1.46272C8.25264 1.35145 8.10172 1.28894 7.94436 1.28894C7.787 1.28894 7.63608 1.35145 7.52481 1.46272C7.41354 1.574 7.35103 1.72491 7.35103 1.88227V2.4645C6.20003 2.62357 5.14568 3.19439 4.38326 4.07121C3.62084 4.94803 3.20202 6.07145 3.20436 7.23339V9.42894C3.14905 10.1744 2.94504 10.9013 2.60436 11.5667C2.29808 12.0478 1.92889 12.4857 1.50658 12.8689L1.35547 13.0023V14.2556H14.5999V13.0023Z"
                fill="#B3B3B3"
              />
              <path
                d="M6.80884 14.7223C6.84781 15.004 6.98741 15.2621 7.20185 15.4489C7.4163 15.6358 7.6911 15.7387 7.9755 15.7387C8.25991 15.7387 8.53471 15.6358 8.74915 15.4489C8.9636 15.2621 9.1032 15.004 9.14217 14.7223H6.80884Z"
                fill="#B3B3B3"
              />
            </g>
            <defs>
              <clipPath id="clip0_53_503">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button className="flex items-center">
          <Image
            src={Avatar}
            alt="User avatar"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
