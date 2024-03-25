"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });
  const titleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const isInViewInfo = useInView(ref, { once: true });
  const infoVariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div className="text-[#1A1D40] bg-[#E8E8EC] relative">
      <div className="bg-[#E8E8EC] py-20 relative z-10">
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="initial"
          animate={InView ? "animate" : "initial"}
          transition={{ duration: 1.2 }}
          className="flex justify-center flex-col items-center gap-5 lg:gap-7"
        >
          <p className="text-sm leading-5 lg:text-base lg:leading-5">
            So What are you waiting for?
          </p>
          <h3 className="uppercase text-2xl leading-8 font-black text-center sm:w-[200px] lg:text-[40px] lg:leading-[48px] lg:w-full">
            Every Minute is Precious
          </h3>
          <Link href={"https://form.smartsuite.com/swgnyg44/pcSNOwKfLz"}>
            <button className="h-12 lg:h-[54px] rounded-full px-5 lg:px-6 flex gap-4 items-center bg-[#1A1D40] text-white w-fit font-bold text-sm lg:text-base lg:leading-5 leading-4">
              <span>Register Now</span>
              <span>-&gt;</span>
            </button>
          </Link>
        </motion.div>
        <Image
          className="absolute right-0 bottom-0 -z-10"
          src="/footer-lines.svg"
          alt="footer-lines"
          width={143}
          height={332}
        />
      </div>
      <div className="relative">
        <div className="bg-gradient-to-b from-[#E8E8EC] to-[#E8E8EC]/0 w-full h-[100px] absolute top-0"></div>
        <Image
          className="w-full object-cover md:h-[463px]"
          src="/bg-footer.svg"
          alt="bg-footer"
          width={364}
          height={638}
        />
      </div>
      <div className="flex md:w-full lg:px-[140px] flex-col px-5 md:px-8 absolute bottom-0 py-10 gap-10 bg-gradient-to-b from-[#E8E8EC]/0 via-white to-white">
        <div className="flex justify-between gap-10">
          <motion.div
            ref={ref}
            variants={infoVariants}
            initial="initial"
            animate={isInViewInfo ? "animate" : "initial"}
            transition={{ duration: 0.8, delay: 1.2 }}
            className=" flex flex-col md:flex-row gap-5 lg:gap-7"
          >
            <div className="text-sm leading-5 flex flex-col gap-1 md:w-[290.67px] lg:text-xl lg:leading-6 lg:gap-3">
              <p className="font-bold">Address</p>
              <span className="font-normal text-[#484A66] lg:text-base lg:leading-5">
                Jl. Raya Belimbing No.88, Babakan Asem, Kec. Kosambi, Kabupaten
                Tangerang, Banten 15212
              </span>
            </div>
            <div className="text-sm leading-5 flex flex-col gap-1 lg:text-xl lg:leading-6 lg:gap-3">
              <p className="font-bold">Candidate</p>
              <span className="font-normal text-[#484A66] lg:text-base lg:leading-5">
                Join in Internship Program
              </span>
            </div>
            <div className="text-sm leading-5 flex flex-col gap-1 lg:text-xl lg:leading-6 lg:gap-3">
              <p className="font-bold">Hiring Partner</p>
              <span className="font-normal text-[#484A66] lg:text-base lg:leading-5">
                Register as Company Partner
              </span>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={titleVariants}
            initial="initial"
            animate={InView ? "animate" : "initial"}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col justify-end gap-5"
          >
            <Image
              className="md:w-[32px]"
              src="/instagram.svg"
              alt="instagram"
              width={48}
              height={48}
            />
            <Image
              className="md:w-[32px]"
              src="/whatsapp.svg"
              alt="instagram"
              width={48}
              height={48}
            />
            <Image
              className="md:w-[32px]"
              src="/google.svg"
              alt="instagram"
              width={48}
              height={48}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex justify-between items-center relative"
        >
          <Image
            className="lg:w-[167px]"
            src="/site-logo.svg"
            alt="logo-footer"
            width={111.33}
            height={32}
          ></Image>
          <span className="text-xs leading-4 text-[#9697A7]">
            ©2024 Govokasi
          </span>
        </motion.div>
      </div>
    </div>
  );
}
