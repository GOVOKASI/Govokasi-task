"use client";
import React, { useRef } from "react";
import { MdVerified, MdGroups } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { motion, useInView } from "framer-motion";

const servicesData = [
  {
    icon: <MdVerified size={36} />,
    title: "High Quality Intern",
    description:
      "Candidates will go through our Right KLIC Curation process to help identify their potential and competency.",
  },
  {
    icon: <MdGroups size={36} />,
    title: "Experienced Coaches",
    description:
      "We collaborate with experienced coaches and practitioners with more than 10 years experience in their field.",
  },
  {
    icon: <RiGraduationCapFill size={36} />,
    title: "Training and Coaching",
    description:
      "We provide continuous coaching and training during their internship program.",
  },
  {
    icon: <HiLightBulb size={36} className="rotate-180" />,
    title: "Cost Efficient Solution",
    description:
      "Our solution helps companies recruit the best candidates through cost efficient programs.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });
  const titleVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const cardRefs = useRef(servicesData.map(() => useRef(null)));
  const isInView = cardRefs.current.map((ref) =>
    useInView(ref, { threshold: 0.2 })
  );
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <section
      id="services"
      className="mx-auto m-auto mb-12 mt-12 p-6 bg-slate-950"
    >
      <motion.div
        className="text-white text-center mb-8 text-2xl md:text-3xl lg:text-5xl font-extrabold"
        ref={ref}
        variants={titleVariants}
        initial="initial"
        animate={InView ? "animate" : "initial"}
        transition={{ duration: 1 }}
      >
        WHY CHOOSE GOVOKASI?
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="w-full rounded-2xl bg-gray-900"
            ref={cardRefs.current[index]}
            variants={cardVariants}
            initial="initial"git 
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="p-5">
              <div className="mb-2 flex justify-center">
                <div className="relative w-16 h-16 flex justify-center items-center rounded-full overflow-hidden p-2">
                  <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] blur-2xl from-slate-500 to-transparent opacity-80"></div>
                  {service.icon}
                </div>
              </div>
              <div className="text-gray-200 text-xl font-bold mb-2">
                {service.title}
              </div>
              <div className="text-zinc-400 text-sm font-normal">
                {service.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
