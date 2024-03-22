"use client";
import React, { useRef } from "react";
import FrameCompanyValues from "/public/FrameCompanyValues.svg";
import { motion, useInView } from "framer-motion";

const valuesData = [
  {
    number: "01",
    title: "Prime In Contribution",
    description:
      "Our interns are coached to focus on contribution before compensation.",
  },
  {
    number: "02",
    title: "Rich In Competencies",
    description:
      "Building skills and competencies, to be able to manage bigger challenges.",
  },
  {
    number: "03",
    title: "Open For Collaboration",
    description: "Intergenerational collaboration to handle complex tasks.",
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
      className="text-white bg-slate-100 p-6"
      style={{
        backgroundImage: `url(${FrameCompanyValues.src})`,
        backgroundSize: "cover",
        // backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          className="text-black text-start mb-8 p-2"
          ref={ref}
          variants={titleVariants}
          initial="initial"
          animate={InView ? "animate" : "initial"}
          transition={{ duration: 1 }}
        >
          <p className="mb-6 font-medium text-slate-600">
            Three Steps To Success
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-16">
            BUILDING (<span className="text-yellow-700">PRO</span>)FESSIONAL
            CHARACTER
          </h2>
          <h2 className="text-xl md:text-2xl text-slate-600 font-medium opacity-80">
            Our interns are continuously trained and coached to be the best.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-8">
          {valuesData.map((value, index) => (
            <motion.div
              key={index}
              ref={cardRefs.current[index]}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full rounded-2xl bg-gray-900"
            >
              <div className="p-5">
                <div className="mb-2 flex justify-start items-center p-2 gap-5">
                  <div className="relative w-20 h-20 flex justify-center items-center rounded-full overflow-hidden p-2">
                    <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] blur-2xl from-slate-500 to-transparent opacity-80"></div>
                    <span className="text-2xl md:text-4xl font-extrabold">
                      {value.number}
                    </span>
                  </div>
                  <div className="text-gray-200 justify-center items-center text-center text-xl font-bold leading-normal mb-2">
                    {value.title}
                  </div>
                </div>
                <div className="text-zinc-400 text-sm font-normal leading-tight">
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
