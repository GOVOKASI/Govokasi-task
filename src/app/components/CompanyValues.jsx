'use client';
import React, { useRef } from 'react';
import FrameCompanyValues from '/public/FrameCompanyValues.svg';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const valuesData = [
  {
    number: '01',
    title: 'Prime In Contribution',
    description:
      'Our interns are coached to focus on contribution before compensation.',
  },
  {
    number: '02',
    title: 'Rich In Competencies',
    description:
      'Building skills and competencies, to be able to manage bigger challenges.',
  },
  {
    number: '03',
    title: 'Open For Collaboration',
    description: 'Intergenerational collaboration to handle complex tasks.',
  },
];
export default function CompanyValues() {
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });
  const titleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const cardRefs = useRef(valuesData.map(() => useRef(null)));
  const isInView = cardRefs.current.map((ref) =>
    useInView(ref, { once: true })
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="company-values"
      className="text-white bg-gradient-to-b xl:px-[240px] lg:px-[140px] from-white/60 via-white to-[#E8E8EC] px-5 md:px-8 relative lg:h-fit overflow-hidden"
      // style={{
      //   backgroundImage: `url(${FrameCompanyValues.src})`,
      //   backgroundSize: 'cover',
      //   // backgroundPosition: "top center",
      //   backgroundRepeat: 'no-repeat',
      // }}
    >
      <Image
        className="absolute -z-10 left-0 w-full"
        src="/bg-stripe.svg"
        alt="bg-stripe"
        width={364}
        height={600}
      />
      <div className="grid md:grid-cols-2 gap-10 items-center py-10 lg:gap-20 lg:py-[80px] xl:py-[120px]">
        <motion.div
          className="text-black text-start flex flex-col gap-5 lg:gap-7 "
          ref={ref}
          variants={titleVariants}
          initial="initial"
          animate={InView ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
        >
          <p className="font-medium text-[#484A66]">Three Steps To Success</p>
          <h2 className="text-[32px] leading-10 md:text-3xl lg:text-5xl lg:leading-[60px] font-extrabold text-[#0B0C1B]">
            BUILDING (<span className="text-yellow-700">PRO</span>)FESSIONAL
            CHARACTER
          </h2>
          <h2 className="text-xl leading-6 md:text-2xl text-[#1A1D40] font-bold opacity-80">
            Our interns are continuously trained and coached to be the best.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-5">
          {valuesData.map((value, index) => (
            <motion.div
              key={index}
              ref={cardRefs.current[index]}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full rounded-2xl bg-[#0E1023]"
            >
              <div className="p-5 flex flex-col gap-4">
                <div className="flex justify-start items-center gap-5">
                  <div className="relative w-16 h-16 flex justify-center items-center">
                    {/* <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] blur-2xl from-slate-500 to-transparent opacity-80"></div> */}
                    <Image
                      className="absolute blur-lg"
                      src="/layer-blur-company-value.png"
                      alt="layer-blur-company-value"
                      layout="fill"
                    />
                    <span className="text-[40px] leading-[48px] md:text-4xl lg:text-[40px] lg:leading-[48px] font-extrabold z-10">
                      {value.number}
                    </span>
                  </div>
                  <div className="text-[#E8E8EC] justify-center items-center text-xl lg:text-2xl lg:leading-8 leading-6 font-bold max-w-[204px]">
                    {value.title}
                  </div>
                </div>
                <div className="text-[#9697A7] text-sm font-normal leading-5">
                  {value.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
