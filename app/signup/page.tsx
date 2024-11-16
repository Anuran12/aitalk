import React from "react";
import SignupImg from "@/public/signup.png";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen p-8">
      <Header />
      <Image src={SignupImg} alt="" className=" w-[10vw]" />
      <h1 className="font-semibold text-[2.8vw] mb-[1vw]">
        Let get you started
      </h1>
      <form
        action=""
        className="flex flex-col gap-[1vw] w-[80%] md:w-[50%] lg:w-[30%]"
      >
        <input
          type="email"
          placeholder="Email address"
          className="w-full bg-[#1E1F24] rounded-[10px] py-3 px-6"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-[#1E1F24] rounded-[10px] py-3 px-6"
        />
        <Link
          href={"/"}
          className="bg-gradient-to-t from-[#34019C] to-[#5F2BFA] px-10 py-3 rounded-full md:text-[1.2vw] w-full mt-[1vw] text-center"
        >
          Continue
        </Link>
      </form>
      <p className="mt-[1vw]">
        Already have an account?{" "}
        <Link href={"/login"} className="text-[#9572FF]">
          Log In
        </Link>
      </p>
      <div className="flex gap-3 items-center">
        <svg
          width="114"
          height="2"
          viewBox="0 0 114 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1L113.5 1" stroke="#393A40" strokeLinecap="round" />
        </svg>
        <span className="text-[#B4B4B4]">OR</span>
        <svg
          width="114"
          height="2"
          viewBox="0 0 114 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1L113.5 1" stroke="#393A40" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex gap-3">
        <button className="bg-[#393A40] rounded-full aspect-square w-[3.5vw] flex justify-center items-center">
          <svg
            width="25"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11_61)">
              <path
                d="M11.1475 1.5525C7.95019 2.66167 5.19285 4.76692 3.28046 7.55901C1.36808 10.3511 0.401465 13.6829 0.522592 17.0649C0.643719 20.447 1.84621 23.701 3.95343 26.3492C6.06065 28.9973 8.96153 30.8999 12.23 31.7775C14.8798 32.4612 17.656 32.4913 20.32 31.865C22.7333 31.3229 24.9644 30.1634 26.795 28.5C28.7002 26.7159 30.0831 24.4462 30.795 21.935C31.5688 19.2042 31.7065 16.3323 31.1975 13.54H16.3175V19.7125H24.935C24.7628 20.697 24.3937 21.6366 23.8499 22.4751C23.306 23.3136 22.5986 24.0338 21.77 24.5925C20.7177 25.2886 19.5315 25.7569 18.2875 25.9675C17.0398 26.1995 15.7601 26.1995 14.5125 25.9675C13.248 25.7061 12.0517 25.1841 11 24.435C9.31036 23.239 8.04168 21.5398 7.37499 19.58C6.69702 17.5835 6.69702 15.419 7.37499 13.4225C7.84955 12.023 8.63407 10.7488 9.66999 9.695C10.8555 8.46687 12.3563 7.58899 14.0079 7.15769C15.6594 6.72639 17.3979 6.75833 19.0325 7.25C20.3094 7.64198 21.4771 8.32685 22.4425 9.25C23.4142 8.28334 24.3842 7.31417 25.3525 6.3425C25.8525 5.82 26.3975 5.3225 26.89 4.7875C25.4164 3.41619 23.6867 2.34915 21.8 1.6475C18.3642 0.399978 14.6049 0.366451 11.1475 1.5525Z"
                fill="white"
              />
              <path
                d="M11.1474 1.5525C14.6046 0.36564 18.3639 0.398283 21.7999 1.645C23.687 2.35141 25.4159 3.42359 26.8874 4.8C26.3874 5.335 25.8599 5.835 25.3499 6.355C24.3799 7.32333 23.4108 8.28833 22.4424 9.25C21.4771 8.32684 20.3094 7.64198 19.0324 7.25C17.3984 6.7566 15.66 6.72282 14.008 7.15235C12.356 7.58189 10.8542 8.45815 9.66744 9.685C8.63153 10.7388 7.84701 12.013 7.37244 13.4125L2.18994 9.4C4.04496 5.7214 7.25681 2.90756 11.1474 1.5525Z"
                fill="#E33629"
              />
              <path
                d="M0.81512 13.375C1.09367 11.9945 1.55613 10.6576 2.19012 9.4L7.37262 13.4225C6.69466 15.419 6.69466 17.5835 7.37262 19.58C5.64595 20.9133 3.91845 22.2533 2.19012 23.6C0.602996 20.4408 0.118951 16.8413 0.81512 13.375Z"
                fill="#F8BD00"
              />
              <path
                d="M16.3175 13.5375H31.1975C31.7065 16.3298 31.5688 19.2017 30.795 21.9325C30.0831 24.4437 28.7002 26.7134 26.795 28.4975C25.1225 27.1925 23.4425 25.8975 21.77 24.5925C22.5992 24.0332 23.3069 23.3122 23.8508 22.4728C24.3946 21.6334 24.7634 20.6929 24.935 19.7075H16.3175C16.315 17.6525 16.3175 15.595 16.3175 13.5375Z"
                fill="#587DBD"
              />
              <path
                d="M2.1875 23.6C3.91583 22.2667 5.64333 20.9267 7.37 19.58C8.03802 21.5405 9.30851 23.2397 11 24.435C12.055 25.1807 13.2538 25.6983 14.52 25.955C15.7676 26.187 17.0474 26.187 18.295 25.955C19.539 25.7444 20.7252 25.2761 21.7775 24.58C23.45 25.885 25.13 27.18 26.8025 28.485C24.9722 30.1493 22.741 31.3097 20.3275 31.8525C17.6635 32.4788 14.8873 32.4487 12.2375 31.765C10.1418 31.2054 8.18419 30.219 6.4875 28.8675C4.69165 27.4417 3.22489 25.6449 2.1875 23.6Z"
                fill="#319F43"
              />
            </g>
            <defs>
              <clipPath id="clip0_11_61">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button className="bg-[#393A40] rounded-full aspect-square w-[3.5vw] flex justify-center items-center">
          <svg
            width="14"
            height="25"
            viewBox="0 0 14 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.86255 24.496V13.568H12.5492L13.0972 9.28934H8.86255V6.564C8.86255 5.32933 9.20655 4.484 10.9785 4.484H13.2239V0.669335C12.1315 0.551329 11.0333 0.494795 9.93455 0.500001C6.67588 0.500001 4.43855 2.48933 4.43855 6.14133V9.28134H0.775879V13.56H4.44655V24.496H8.86255Z"
              fill="#1877F2"
            />
          </svg>
        </button>
      </div>
      <Footer />
    </div>
  );
}
