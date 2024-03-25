"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gradient-to-b from-[#FFA640] to-[#D27000] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center items-center h-20 bg-white lg:justify-start lg:px-[140px] xl:px-[240px]"
      >
        <Image
          src="/site-logo.svg"
          width={167}
          height={48}
          alt="govokasi-logo"
        />
      </motion.div>
      <div className="flex justify-center lg:w-full py-10 lg:py-[80px] xl:py-[120px] z-10 relative lg:px-[140px] xl:px-[240px]">
        <div className="flex lg:w-full lg:justify-between flex-col md:flex-row-reverse gap-10 lg:gap-20 px-5 md:px-8 lg:px-0">
          <div className="md:flex md:w-full md:justify-center">
            <div className="flex justify-center md:items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  scale:
                    typeof window !== "undefined" && window.innerWidth > 768
                      ? 1.5
                      : 1,
                }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
                className="w-fit h-fit relative lg:scale-150 "
              >
                <Image
                  className="absolute left-[-90px] bottom-[-160px] z-[-20] hidden md:block"
                  src="/hero-lines.svg"
                  alt="hero-lines"
                  width={171}
                  height={346}
                />
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex absolute top-[32px] left-[9px] flex-col rounded-xl justify-center items-end h-[46px] px-3 bg-gradient-to-l from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit"
                >
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    +120
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Startup Partner
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex absolute bottom-[20px] left-[37px] flex-col rounded-xl justify-center items-end h-[46px] px-3 bg-gradient-to-l from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit"
                >
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    80%
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Intern to Fulltime
                  </span>
                </motion.div>
                <Image
                  src="/hero-image.svg"
                  alt="hero-image"
                  width={324}
                  height={195.5}
                />
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex absolute top-[-10px] right-[62px] flex-col rounded-xl justify-center h-[46px] px-3 bg-gradient-to-r from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit"
                >
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    +6000
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Talent Pool
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex absolute bottom-[60px] right-[14px] flex-col rounded-xl justify-center h-[46px] px-3 bg-gradient-to-r from-[#FFFFFF] to-[#FFC078] min-w-[100px] w-fit"
                >
                  <span className="text-sm font-bold leading-4 text-[#6B3900]">
                    +500
                  </span>
                  <span className="text-[10px] font-normal leading-[14px] text-[#B56100]">
                    Hour Training
                  </span>
                </motion.div>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col gap-5"
            >
              <h1 className="text-[40px] text-white lg:text-[60px] flex-wrap gap-2 lg:leading-[76px] leading-[48px] font-black uppercase flex lg:flex-col">
                <span>Jumpstart</span> <span>Your Career</span>
              </h1>
              <p className="text-xl lg:text-2xl lg:leading-8 leading-6 font-bold text-[#FFDAB0] lg:w-[531.2px]">
                Govokasi help you to growth and gain your full potential skills
              </p>
            </motion.div>
            <Link href={"https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"}>
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-12 lg:h-[54px] rounded-full px-5 lg:px-6 flex gap-4 items-center bg-white w-fit text-[#0B0C1B] font-bold text-sm lg:text-base lg:leading-5 leading-4"
              >
                <span>Register Now</span>
                <span>-&gt;</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          className="absolute right-0 bottom-[-60px] md:hidden"
          src="/hero-lines.svg"
          alt="hero-lines"
          width={171}
          height={346}
        />
      </div>
    </div>
  );
}
