import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] });
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    // <div className="w-full bg-orange-400 flex-col justify-start items-start inline-flex">
    //   <div className="self-stretch h-20 px-[140px] py-10 bg-white justify-between items-center inline-flex">
    //     <img
    //       className="w-[167px] h-12"
    //       src="https://via.placeholder.com/167x48"
    //     />
    //     <div className="w-[175px] justify-center items-center gap-5 flex">
    //       <div className="text-indigo-950 text-base font-bold font-['Inter'] leading-tight">
    //         Talent
    //       </div>
    //       <div className="text-slate-600 text-base font-normal font-['Inter'] leading-tight">
    //         Hiring Partner
    //       </div>
    //     </div>
    //   </div>
    //   <div className="self-stretch h-[500px] px-[140px] py-20 justify-center items-center gap-20 inline-flex">
    //     <div className="grow shrink basis-0 flex-col justify-center items-start gap-12 inline-flex">
    //       <div className="self-stretch h-[244px] flex-col justify-start items-start gap-7 flex">
    //         <div className="self-stretch">
    //           <span className="text-white text-6xl font-black font-['Inter'] leading-[76px]">
    //             JUMPSTART YOUR{' '}
    //           </span>
    //           <span className="text-white text-6xl font-black font-['Inter'] leading-[76px]">
    //             CAREER
    //           </span>
    //         </div>
    //         <div className="self-stretch text-orange-200 text-2xl font-semibold font-['Inter'] leading-loose">
    //           Govokasi help you to growth and gain your full potential skills
    //         </div>
    //       </div>
    //       <div className="w-[81.12px] h-[84.19px] relative"></div>
    //       <div className="h-[54px] px-6 bg-white rounded-[999px] justify-center items-center gap-4 inline-flex">
    //         <div className="text-slate-950 text-base font-bold font-['Inter'] leading-tight">
    //           Register Now
    //         </div>
    //         <div className="w-3.5 text-slate-950 text-base font-bold font-['Inter'] leading-tight"></div>
    //       </div>
    //     </div>
    //     <div className="flex-col justify-center items-center inline-flex">
    //       <div className="w-[397.40px] h-[277.10px] relative">
    //         <div className="w-[120px] h-[56.20px] px-[14.40px] py-[9.60px] left-[277.40px] top-[180.10px] absolute bg-gradient-to-r from-white to-orange-300 rounded-[14.40px] justify-start items-center gap-[19.20px] inline-flex">
    //           <div className="flex-col justify-center items-start inline-flex">
    //             <div className="text-yellow-900 text-xl font-bold font-['Inter'] leading-tight">
    //               +500
    //             </div>
    //             <div className="text-amber-700 text-sm font-normal font-['Inter'] leading-[16.80px]">
    //               Hour Training
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[143.80px] h-[56.20px] px-[14.40px] py-[9.60px] left-[68.60px] top-[220.90px] absolute bg-gradient-to-r from-orange-300 to-white rounded-[14.40px] justify-start items-center gap-[19.20px] inline-flex">
    //           <div className="flex-col justify-center items-end inline-flex">
    //             <div className="text-yellow-900 text-xl font-bold font-['Inter'] leading-tight">
    //               80%
    //             </div>
    //             <div className="text-amber-700 text-sm font-normal font-['Inter'] leading-[16.80px]">
    //               Intern to FullTime
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-36 h-16 px-[14.40px] py-[9.60px] left-[240px] top-0 absolute bg-gradient-to-r from-white to-orange-300 rounded-[14.40px] justify-start items-center gap-[19.20px] inline-flex">
    //           <div className="flex-col justify-center items-start gap-1 inline-flex">
    //             <div className="text-yellow-900 text-xl font-bold font-['Inter'] leading-tight">
    //               +6000
    //             </div>
    //             <div className="text-amber-700 text-sm font-normal font-['Inter'] leading-[16.80px]">
    //               Talent Pool
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-[138.80px] h-16 px-[14.40px] py-[9.60px] left-0 top-[52px] absolute bg-gradient-to-r from-orange-300 to-white rounded-[14.40px] justify-end items-center gap-[19.20px] inline-flex">
    //           <div className="flex-col justify-center items-end gap-1 inline-flex">
    //             <div className="text-yellow-900 text-xl font-bold font-['Inter'] leading-tight">
    //               +120
    //             </div>
    //             <div className="text-amber-700 text-sm font-normal font-['Inter'] leading-[16.80px]">
    //               Startup Partners
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[388.80px] relative">
    //         <div className="w-[388.80px] h-[234.60px] left-0 top-0 absolute flex-col justify-center items-center gap-3 inline-flex">
    //           <img
    //             className="w-[243.60px] h-[234.60px]"
    //             src="https://via.placeholder.com/244x235"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[270.67px] h-[481px] relative"></div>
    // </div>
    <div className="bg-gradient-to-b from-[#FFA640] to-[#D27000] overflow-hidden">
      <div className="flex justify-center items-center h-20 bg-white lg:justify-start lg:px-[140px]">
        <Image
          src="/site-logo.png"
          width={167}
          height={48}
          alt="govokasi-logo"
        />
      </div>
      <div className="flex justify-center lg:w-full py-20 lg:py-32 z-10 relative lg:px-[140px]">
        <div className="flex lg:w-full lg:justify-between flex-col lg:flex-row-reverse gap-10 lg:gap-20 px-5 lg:px-0">
          <div className="lg:flex lg:w-full lg:justify-center">
            <div className="flex justify-center lg:items-center">
              <div className="w-fit h-fit relative lg:scale-150">
                <Image
                  className="absolute left-[-90px] bottom-[-160px] z-[-20] hidden lg:block"
                  src="/hero-lines.svg"
                  alt="hero-lines"
                  width={171}
                  height={346}
                />
                <div className="flex absolute top-[32px] left-[9px] flex-col rounded-xl justify-center items-end h-[46px] px-3 bg-gradient-to-l from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit">
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    +120
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Startup Partner
                  </span>
                </div>
                <div className="flex absolute bottom-[20px] left-[37px] flex-col rounded-xl justify-center items-end h-[46px] px-3 bg-gradient-to-l from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit">
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    80%
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Intern to Fulltime
                  </span>
                </div>
                <Image
                  src="/hero-image.svg"
                  alt="hero-image"
                  width={324}
                  height={195.5}
                />
                <div className="flex absolute top-[-10px] right-[62px] flex-col rounded-xl justify-center h-[46px] px-3 bg-gradient-to-r from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit">
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    +6000
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Talent Pool
                  </span>
                </div>
                <div className="flex absolute bottom-[60px] right-[14px] flex-col rounded-xl justify-center h-[46px] px-3 bg-gradient-to-r from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit">
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    +500
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Hour Training
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:gap-12 relative">
            <Image
              className="absolute left-0 bottom-[78.31px] lg:bottom-[60px] lg:left-[0px] -z-10"
              src="/hero-stars.svg"
              width={81.12}
              height={84.19}
              alt="hero-stars"
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-[40px] lg:text-[60px] flex-wrap gap-2 lg:leading-[76px] leading-[48px] font-black uppercase flex lg:flex-col">
                <span>Jumpstart</span> <span>Your Career</span>
              </h1>
              <p className="text-xl lg:text-2xl lg:leading-8 leading-6 font-bold text-[#FFDAB0] lg:w-[531.2px]">
                Govokasi help you to growth and gain your full potential skills
              </p>
            </div>
            <button className="h-12 lg:h-[54px] rounded-full px-5 lg:px-6 flex gap-4 items-center bg-white w-fit text-[#0B0C1B] font-bold text-sm lg:text-base lg:leading-5 leading-4">
              <span>Register Now</span>
              <span>-&gt;</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          className="absolute right-0 bottom-[-60px] lg:hidden"
          src="/hero-lines.svg"
          alt="hero-lines"
          width={171}
          height={346}
        />
      </div>
    </div>
  );
}
