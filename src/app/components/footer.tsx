import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
  <div className="sm:w-full w-[400px] h-[650px] bg-white flex flex-col justify-start items-start">
   <div className="w-full h-[750px] relative overflow-hidden ">
      <img className=" w-full left-0 top-0 sm:top-[-200px] absolute" src="hand.png" />
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-75"></div>
      <div className="w-full h-[300px] relative overflow-hidden">
        <div className="bg-gradient-to-b from-white  via-white via-white via-white to-transparent  relative self-stretch h-[338px] px-5 py-20 flex flex-col justify-center items-center gap-7">
          <div className="text-center text-indigo-950 sm:text-[24px] text-[15px] font-normal font-['Inter'] leading-[10px] sm:leading-tight">So, What are you waiting for?</div>
          <div className="text-center text-indigo-950 sm:text-[40px] text-[36px] font-black font-['Inter'] leading-[40px] sm:leading-[48px]">EVERY MINUTE IS PRECIOUS</div>
          <div className="px-6 bg-indigo-950 rounded-[999px] flex justify-center items-center gap-5">
            <div className="py-4 text-white text-base font-bold font-['Inter'] h-[50px] leading-tight">Register Now</div>
            <div className="w-3.5 text-white text-base font-bold font-['Inter'] leading-tight"></div>
          </div>
          
        </div>
      </div>
      <div className="  top-[-30px] sm:top-[-50px] bg-gradient-to-b from-transparent via-white to-white   relative w-full h-96 sm:px-[150px] px-[30px] py-20 flex flex-col justify-center items-start gap-10">
        <div className="h-[160px] sm:h-[120px] z-10 self-stretch flex flex-col justify-start items-start  gap-10">
          <div className="w-60 h-10 sm:h-10 flex flex-col sm:w-full sm:flex-row justify-start items-start gap-10">
            <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-1 sm:gap-3">
              <div className="self-stretch text-slate-950 text-[16px] sm:text-xl font-bold font-['Inter'] leading-normal">Address</div>
              <div className="self-stretch text-slate-600 text-[14px] sm:text-base font-normal font-['Inter'] leading-tight">Jl. Raya Belimbing No.88, Babakan Asem, Kec. Kosambi, Kabupaten Tangerang, Banten 15212</div>
            </div>
            <div className="h-0 sm:h-14 grow shrink basis-0 flex flex-col justify-center items-start gap-1 sm:gap-3">
              <div className="self-stretch text-slate-950 text-[16px] sm:text-xl font-bold font-['Inter'] leading-normal">Candidate</div>
              <div className="self-stretch text-slate-600 text-[14px] sm:text-base font-normal font-['Inter'] leading-tight">Join in Internship Program</div>
            </div>
            <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-1 sm:gap-3">
              <div className="self-stretch text-slate-950 text-[16px] sm:text-xl font-bold font-['Inter'] leading-normal">Hiring Partner</div>
          <div className="self-stretch text-slate-600 text-[14px] sm:text-base font-normal font-['Inter'] leading-tight">Register as Company Partner</div>
        </div>
        <div className=" z-10 self-stretch flex flex-col justify-end  items-end gap-5">
        <div className="w-8 h-8 relative left-[80px] sm:left-0 top-[-250px] sm:top-20"><img className="" src="instagram.png" alt="" /></div>
        <div className="w-8 h-8 relative left-[80px] sm:left-0 top-[-250px] sm:top-20"><img className="" src="whatsapp.png" alt="" /></div>
        <div className="w-8 h-8 relative left-[80px] sm:left-0 top-[-250px] sm:top-20"><img className="" src="google.png" alt="" /></div>
      </div>
      </div>
      
    </div>
    <div className="w-[320px] sm:w-[900px] z-10 self-stretch flex justify-between items-center absolute sm:bottom-[50px] bottom-[10px]">
    <img className=" w-[100px] h-auto sm:w-[167px] h-12 " src="site-logo.png" alt="" />
    <div className="text-center text-zinc-400 text-sm font-normal font-inter leading-tight">© 2024 Govokasi</div>
</div>

  </div>
  </div>
</div>

  );
}
