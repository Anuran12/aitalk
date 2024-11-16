import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";
import ContactImg from "@/public/contact.png";
import Header from "@/components/Header";

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center min-h-screen p-4 md:p-8">
      <Header />
      <div className="w-full px-4 md:px-[8vw] flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[50%] flex flex-col pt-4 md:pt-[3vw]">
          <h1 className="text-2xl md:text-[3.2vw] font-bold">
            Get in touch with us
          </h1>
          <p className="w-full md:w-[80%] text-base md:text-[1.2vw] text-[#787A7E] mt-4">
            Global Reach, Local Expertise With our R&D team strategically
            located in Europe, Our mission is clear: to emerge as a leading AI
            company, delivering cutting-edge solutions that reshape industries
            and improve lives.
          </p>
        </div>

        <div className="w-full md:w-[50%] p-4 md:p-[1vw]">
          <form action="" className="flex flex-col gap-4 md:gap-[1vw]">
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-[#1E1F24] rounded-[10px] py-3 px-6"
            />
            <textarea
              placeholder="Project Description"
              className="w-full bg-[#1E1F24] rounded-[10px] py-3 px-6 h-32 md:h-[10vw]"
            />
            <Link
              href={"/"}
              className="bg-gradient-to-t from-[#34019C] to-[#5F2BFA] px-6 md:px-10 py-2 md:py-3 rounded-full text-base md:text-[1.2vw] w-fit mt-4 md:mt-[1.5vw]"
            >
              Submit
            </Link>
          </form>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 px-4 md:px-[5vw]">
        <div className="w-full md:w-[50%] bg-[#1E1F24] rounded-[10px] p-4 md:p-6 flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <Image src={ContactImg} alt="" className="rounded-[10px] w-full" />
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-3 justify-center items-start md:items-center p-2 md:p-5">
            <ContactInfo icon={<PhoneIcon />} text="+44 020 38313389" />
            <ContactInfo icon={<EmailIcon />} text="info@supernet.uk" />
            <ContactInfo icon={<WebIcon />} text="www.AiTalk.ia" />
            <ContactInfo
              icon={<LocationIcon />}
              text="Europe R&D & business team: 128 City Road, London, EV1V 2NX"
            />
          </div>
        </div>

        <div className="w-full md:w-[50%] bg-[#1E1F24] rounded-[10px] p-4 md:p-6 flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <Image src={ContactImg} alt="" className="rounded-[10px] w-full" />
          </div>
          <div className="w-full md:w-[50%] flex flex-col gap-3 justify-center items-start md:items-center p-2 md:p-5">
            <ContactInfo icon={<PhoneIcon />} text="+44 020 38313389" />
            <ContactInfo icon={<EmailIcon />} text="info@supernet.uk" />
            <ContactInfo icon={<WebIcon />} text="www.AiTalk.ia" />
            <ContactInfo
              icon={<LocationIcon />}
              text="Europe R&D & business team: 128 City Road, London, EV1V 2NX"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <div className="w-full flex gap-2 items-center">
    <div className="p-2.5 bg-[#393A40] rounded-[5px] aspect-square">{icon}</div>
    <span className="text-sm md:text-[1vw]">{text}</span>
  </div>
);

const PhoneIcon = () => (
  <svg
    width="15"
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.09793 0.355451L2.7786 0.150428C3.08846 0.056947 3.42174 0.0794209 3.71624 0.213654C4.01074 0.347888 4.24632 0.584706 4.37902 0.879901L4.8026 1.82219C4.91673 2.07603 4.94853 2.35924 4.89352 2.63208C4.83851 2.90491 4.69946 3.15368 4.49588 3.34346L3.75575 4.03357C3.74689 4.04237 3.73942 4.05246 3.7336 4.06351C3.65611 4.22178 3.77379 4.64454 4.14242 5.2834C4.55821 6.00344 4.87928 6.28801 5.02812 6.24414L5.99952 5.94685C6.26556 5.86561 6.55034 5.86966 6.81396 5.95841C7.07758 6.04717 7.30681 6.21619 7.46954 6.44178L8.07149 7.2754C8.26047 7.53715 8.34802 7.8586 8.31785 8.18003C8.28768 8.50146 8.14186 8.80101 7.90747 9.02302L7.38958 9.51303C7.20949 9.68362 6.9908 9.8081 6.75218 9.87586C6.51355 9.94362 6.26207 9.95265 6.01921 9.90216C4.57707 9.60201 3.28501 8.44076 2.13196 6.44383C0.978499 4.44567 0.618888 2.74397 1.08224 1.34448C1.1598 1.11019 1.29262 0.897999 1.46948 0.725853C1.64634 0.553708 1.86162 0.426662 2.09793 0.355451Z"
      fill="white"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="15"
    viewBox="0 0 12 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.285688 1.1729V0.878174C0.207523 0.878174 0.13256 0.909225 0.0772887 0.964496C0.0220178 1.01977 -0.0090332 1.09473 -0.0090332 1.1729H0.285688ZM10.8957 1.1729H11.1904C11.1904 1.09473 11.1593 1.01977 11.1041 0.964496C11.0488 0.909225 10.9738 0.878174 10.8957 0.878174V1.1729ZM0.285688 1.46762H10.8957V0.878174H0.285688V1.46762ZM10.6009 1.1729V8.2462H11.1904V1.1729H10.6009ZM9.71677 9.13037H1.46457V9.71981H9.71677V9.13037ZM0.580409 8.2462V1.1729H-0.0090332V8.2462H0.580409Z"
      fill="white"
    />
    <path
      d="M0.285706 1.17297L5.59069 6.47796L10.8957 1.17297"
      stroke="white"
      strokeWidth="0.589442"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WebIcon = () => (
  <svg
    width="15"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.27637 1.13305C3.36475 1.39822 2.55429 1.93217 1.95087 2.66515C1.34744 3.39812 0.97911 4.29605 0.893982 5.24163H3.04966C3.17463 3.80276 3.59181 2.4045 4.2757 1.13238L4.27637 1.13305Z"
      fill="white"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width="15"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.09407 1.29148C5.43351 0.63125 4.54164 0.254459 3.6078 0.241089H3.57243C2.63844 0.253898 1.7463 0.630621 1.08581 1.29112C0.425311 1.95161 0.048588 2.84375 0.0357792 3.77774C0.0242851 4.44087 0.210844 5.09249 0.571582 5.64952L3.35493 11.2931H3.82619L6.60865 5.64952C6.97027 5.09249 7.15683 4.44087 7.14446 3.77774C7.13109 2.8439 6.75429 1.95204 6.09407 1.29148Z"
      fill="white"
    />
  </svg>
);
