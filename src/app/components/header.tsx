"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        // Tampilkan kode mobile
        <div
          className={`${inter} w-[364px] h-[735.50px] bg-gradient-to-b from-[#FFA640] to-[#D27000] lg:w-full bg-orange-400 flex-col justify-start items-start inline-flex`}
        >
          <div className="self-stretch h-20  bg-white flex-col justify-center items-center flex">
            <Image
              className="w-[167px] h-12"
              width={500}
              height={500}
              src="/site-logo.svg"
              alt="site-logo"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[364px] h-12 justify-center items-center gap-5 inline-flex">
            <div className="text-white text-xs font-bold leading-none">
              Talent
            </div>
            <div className="text-orange-200 text-xs font-normal leading-none">
              Hiring Partner
            </div>
          </div>
          <div className="self-stretch h-[607.50px] px-5 pt-28 pb-10 flex-col justify-start items-start gap-10 flex">
            <div className="w-[307px] h-[219px] relative">
              {/* //* Hour training */}
              <div className="w-[100px] h-[46px] px-3 py-2 left-[210px] top-[45px] z-10 absolute bg-gradient-to-r from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-yellow-900 text-sm font-bold leading-none ">
                    +500
                  </div>
                  <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                    Hour Training
                  </div>
                </div>
              </div>
              {/* //* Talent Pool */}
              <div className="w-[100px] h-[46px] px-3 py-2 right-[40px] top-[-80px] z-10 absolute bg-gradient-to-r from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
                <div className="flex-col justify-center items-start inline-flex">
                  <div className="text-yellow-900 text-sm font-bold leading-none ">
                    +6000
                  </div>
                  <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                    Talent Pool
                  </div>
                </div>
              </div>
              {/*//* intern full time */}
              <div className="w-[109px] h-[46px] px-3 py-2 left-[30px] top-[90px] z-10 absolute bg-gradient-to-l from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
                <div className="flex-col justify-center items-end inline-flex">
                  <div className="text-yellow-900 text-sm font-bold leading-none ">
                    80%
                  </div>
                  <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                    Intern To FullTime
                  </div>
                </div>
              </div>
              {/*//* start up partners */}
              <div className="w-[100px] h-[46px] px-3 py-2 left-[5px] top-[-50px] z-10 absolute bg-gradient-to-l from-white to-orange-300 rounded-xl justify-start items-center gap-4 inline-flex">
                <div className="flex-col justify-center items-end inline-flex">
                  <div className="text-yellow-900 text-sm font-bold leading-none ">
                    +120
                  </div>
                  <div className="text-amber-700 text-[10px] font-normal leading-[14px]">
                    Startup Partner
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[195.50px] flex-col justify-start items-start flex">
              <div className="w-[324px] relative">
                <div className="w-[324px] h-[195.50px] z-0 bottom-[-35px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
                  <Image
                    className=" w-full"
                    width={500}
                    height={500}
                    src="/frame 4.svg"
                    alt="frame 2"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[164px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch z-10">
                <span className="text-white text-[40px] font-black leading-[48px]">
                  JUMPSTART YOUR{" "}
                </span>
                <span className="text-white text-[40px] font-black leading-[48px]">
                  CAREER
                </span>
              </div>
              <div className="self-stretch z-10 text-orange-200 text-xl font-bold leading-normal">
                Govokasi help you to growth and gain your full potential skills
              </div>
              <div className="mt-6 z-10">
                <div className=" px-5 p-4 bg-white rounded-[999px] justify-center items-center gap-4 inline-flex">
                  <div className="text-slate-950 text-sm font-bold leading-none">
                    Register Now
                  </div>
                  <div>
                    {" "}
                    <ArrowRightIcon className="h-6 w-6 text-black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[307px] h-[219px] relative">
              <Image
                className="absolute z-0 bottom-[-40px] right-[-30px]"
                width={200}
                height={200}
                src="/vector 2.svg"
                alt="site-logo"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="absolute h-min z-0 bottom-[-40px] right-[-30px]"
                width={100}
                height={200}
                src="/vector 3.svg"
                alt="site-logo"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="absolute h-min z-0 bottom-[140px] right-[230px]"
                width={45}
                height={43}
                src="/star 2.svg"
                alt="big star"
                style={{ objectFit: "cover" }}
              />
              <Image
                className="absolute h-min z-0 bottom-[90px] right-[200px]"
                width={22.28}
                height={21.31}
                src="/star 3.svg"
                alt="little star"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      ) : (
        // Tampilkan kode dekstop
        //? desktop
        <div
          className={`${inter} w-full h-[680px] bg-gradient-to-b from-[#FFA640] to-[#D27000] flex-col justify-start items-start inline-flex overflow-hidden`}
        >
          <div className="self-stretch h-20 px-[140px] py-10 bg-white justify-between items-center inline-flex">
            <Image
              className="w-[167px] h-12"
              width={500}
              height={500}
              src="/site-logo.svg"
              alt="site-logo"
              style={{ objectFit: "cover" }}
            />
            <div className="w-[175px] justify-center items-center gap-5 flex">
              <div className="text-indigo-950 text-base font-bold   leading-tight">
                Talent
              </div>
              <div className="text-slate-600 text-base font-normal  leading-tight">
                Hiring Partner
              </div>
            </div>
          </div>
          <div className="self-stretch h-[500px] px-[180px] py-20 flex-row justify-center items-center inline-flex">
            <div className="grow shrink flex-col justify-center items-start gap-3 inline-flex">
              <div className="self-stretch h-[244px] flex-col justify-start items-start gap-5 flex">
                <div className=" z-10">
                  <span className="text-white text-6xl font-black  leading-[76px]">
                    JUMPSTART
                  </span>
                  <br />
                  <span className="text-white text-6xl font-black  leading-[76px]">
                    YOUR CAREER
                  </span>
                </div>
                <p className="font-bold text-[#FFDAB0] z-10 text-2xl leading-8 w-[531.2px]">
                  Govokasi help you to growth and gain your full potential
                  skills
                </p>
              </div>
              <div className="w-[81.12px] h-[84.19px] relative">
                <Image
                  className="absolute h-min z-0 bottom-[170px] right-[40px]"
                  width={45}
                  height={43}
                  src="/star 2.svg"
                  alt="big star"
                  style={{ objectFit: "cover" }}
                />
                <Image
                  className="absolute h-min z-0 bottom-[110px] right-[5px]"
                  width={22.28}
                  height={21.31}
                  src="/star 3.svg"
                  alt="little star"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="h-[54px] px-6 bg-white rounded-[999px] justify-center items-center gap-4 inline-flex">
                <div className="text-slate-950 text-base font-bold  leading-tight">
                  Register Now
                </div>
                <div>
                  {" "}
                  <ArrowRightIcon className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>
            <div className="flex-col  justify-center items-center inline-flex">
              <div className="w-[397.40px] z-10 h-[277.10px] relative">
                <div className="w-[120px] h-[56.20px] px-[14.40px] py-[9.60px] left-[300.40px] top-[170.10px] absolute bg-gradient-to-r from-white to-orange-300 rounded-[14.40px] justify-start items-center gap-[19.20px] inline-flex">
                  <div className="flex-col justify-center items-start inline-flex">
                    <div className="text-yellow-900 text-xl font-bold  leading-tight">
                      +500
                    </div>
                    <div className="text-amber-700 text-sm font-normal leading-[16.80px]">
                      Hour Training
                    </div>
                  </div>
                </div>
                <div className="w-[143.80px] z-10 h-[56.20px] px-[14.40px] py-[9.60px] left-[68.60px] top-[220.90px] absolute bg-gradient-to-r from-orange-300 to-white rounded-[14.40px] justify-start items-center gap-[19.20px] inline-flex">
                  <div className="flex-col justify-center items-end inline-flex">
                    <div className="text-yellow-900 text-xl font-bold  leading-tight">
                      80%
                    </div>
                    <div className="text-amber-700 text-sm font-normal  leading-[16.80px]">
                      Intern to FullTime
                    </div>
                  </div>
                </div>
                <div className="w-36 h-16 z-10 px-[14.40px] py-[9.60px] left-[240px] top-0 absolute bg-gradient-to-r from-white to-orange-300 rounded-[14.40px] justify-start items-center gap-[19.20px] inline-flex">
                  <div className="flex-col justify-center items-start gap-1 inline-flex">
                    <div className="text-yellow-900 text-xl font-bold  leading-tight">
                      +6000
                    </div>
                    <div className="text-amber-700 text-sm font-normal  leading-[16.80px]">
                      Talent Pool
                    </div>
                  </div>
                </div>
                <div className="w-[138.80px] z-10 h-16 px-[14.40px] py-[9.60px] left-0 top-[52px] absolute bg-gradient-to-r from-orange-300 to-white rounded-[14.40px] justify-end items-center gap-[19.20px] inline-flex">
                  <div className="flex-col justify-center items-end gap-1 inline-flex">
                    <div className="text-yellow-900 text-xl font-bold  leading-tight">
                      +120
                    </div>
                    <div className="text-amber-700 text-sm font-normal  leading-[16.80px]">
                      Startup Partners
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[388.80px] relative">
                <div className="w-[388.80px] h-[234.60px] z-0 left-[40px] top-[-240px] absolute flex-col justify-center items-center gap-3 inline-flex">
                  <Image
                    className="w-full"
                    width={500}
                    height={500}
                    src="/Frame 4.svg"
                    alt="site-logo"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <Image
              className="absolute h-min z-0 bottom-[-100px] right-[430px]"
              width={500}
              height={500}
              src="/Group 2.svg"
              alt="Group 2"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
