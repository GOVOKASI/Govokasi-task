'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { MdVerified, MdGroups } from 'react-icons/md';
import { RiGraduationCapFill } from 'react-icons/ri';
import { HiLightBulb } from 'react-icons/hi';
import { motion, useInView } from 'framer-motion';

const servicesData = [
  {
    icon: <MdVerified size={28} />,
    title: 'High Quality Intern',
    description:
      'Candidates will go through our Right KLIC Curation process to help identify their potential and competency.',
  },
  {
    icon: <MdGroups size={28} />,
    title: 'Experienced Coaches',
    description:
      'We collaborate with experienced coaches and practitioners with more than 10 years experience in their field.',
  },
  {
    icon: <RiGraduationCapFill size={28} />,
    title: 'Training and Coaching',
    description:
      'We provide continuous coaching and training during their internship program.',
  },
  {
    icon: <HiLightBulb size={28} className="rotate-180" />,
    title: 'Cost Efficient Solution',
    description:
      'Our solution helps companies recruit the best candidates through cost efficient programs.',
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
      className="px-5 md:px-8 py-10 lg:py-[80px] xl:py-[120px] lg:px-[140px] xl:px-[240px] bg-[#0B0C1B] flex flex-col gap-10 lg:gap-12"
    >
      <motion.div
        className="text-white leading-10 text-[32px] md:text-3xl lg:text-5xl lg:leading-[60px] font-extrabold"
        ref={ref}
        variants={titleVariants}
        initial="initial"
        animate={InView ? 'animate' : 'initial'}
        transition={{ duration: 1 }}
      >
        WHY CHOOSE GOVOKASI?
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="w-full rounded-2xl bg-gray-900"
            ref={cardRefs.current[index]}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="p-5 flex flex-col gap-4 bg-[#0E1023] h-full rounded-2xl">
              <div className="flex w-fit">
                <div className="relative w-[60px] h-[60px] items-center">
                  <Image
                    className="absolute blur-lg"
                    src="/layer-blur-service.png"
                    alt="layer-blur-service"
                    width={400}
                    height={400}
                  />
                  <div className="relative flex justify-center items-center h-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="text-[#E8E8EC] text-xl leading-6 font-bold mb-2 lg:max-w-[140px]">
                {service.title}
              </div>
              <div className="text-[#9697A7] text-sm leading-5 font-normal">
                {service.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
