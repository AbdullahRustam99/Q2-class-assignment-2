import React from "react";
import Image from "next/image";
import logo from "@/img/logo.9ff76f62.png"
import mainimg from "@/img/cover.1d863e39.png"
const page = () => {
  return (
    <>
      <header className="flex gap-10 justify-around items-center h-20 bg-[#044E83]">
        <div className="">
          <Image
            src={logo}
            alt="logo"
            width={110}
            className="relative top-10 z-40"
          ></Image>
        </div>
        <p className="text-[20px] font-extrabold text-[#B9D8F3]">
          Tuition Free Education Program on Latest Technologies
        </p>
        <ul className="flex gap-8 text-[17px] hover:cursor-pointer">
          <li>Home</li>
          <li>Apply</li>
          <li>Job</li>
          <li>Result</li>
          <li>Courses</li>
        </ul>
      </header>
      <section className="w-full h-full img flex items-center justify-between px-5 pt-20 absolute overflow-hidden">
        <div>
          <div className="w-[570px]">
            <h1 className="text-[#044E83] text-[60px] font-black leading-9">
              Governor Sindh
            </h1>
            <h3 className="text-[#044E83] text-[40px] font-extralight">
              Kamran Khan Tessori
            </h3>
            <h4 className="text-[#2EB6E8] text-[40px] mt-4 w-[440px] font-bold leading-[38px] ">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </h4>
            <p className="text-[#044E83] text-[24px] mt-3 font-semibold">
              Earn up to $5,000 / month
            </p>
            <div className="flex mt-6 justify-between  w-96">
              <button className="bg-[#044E83] text-[16px] w-44 font-extrabold  px-[20px] rounded-md">
                Apply Now
              </button>
              <div className="flex flex-col items-center">
                <p className="text-[30px] text-[#044E83] font-semibold leading-9">
                  562,143
                </p>
                <p className="text-[14px] text-[#044E83]">
                  Accepted Applications
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={mainimg}
            width={900}
            alt="logo"
            className="relative left-60 overflow-hidden"
          />
        </div>
      </section>
    </>
  );
};

export default page;
