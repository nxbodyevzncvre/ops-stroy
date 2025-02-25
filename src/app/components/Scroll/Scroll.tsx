"use client";

import type React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import BackgroundPart from "../BackGroundPart/BackGroundPart";
import AboutSection from "@/app/components/AboutSection/AboutSection";
import AdvantagesSection from "@/app/components/AdvantagesSection/AdvantagesSection";
import ServicesSection from "@/app/components/ServicesSection/ServicesSection";
import Contacts from "@/app/components/Contacts/Contacts"; // Add this import

const Scroll: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const aboutInView = useInView(aboutRef, { once: true });
  const advantagesInView = useInView(advantagesRef, { once: true });
  const servicesInView = useInView(servicesRef, { once: true });
  const contactInView = useInView(contactRef, { once: true });

  return (
    <div className="bg-gray-900">
      <div className="relative z-0 w-full h-screen">
        <BackgroundPart
          aboutRef={aboutRef}
          advantagesRef={advantagesRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
        />
      </div>

      <AboutSection aboutRef={aboutRef} aboutInView={aboutInView} />
      <AdvantagesSection advantagesRef={advantagesRef} advantagesInView={advantagesInView} />
      <ServicesSection servicesRef={servicesRef} servicesInView={servicesInView} />
      <motion.section
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="py-12 bg-gray-800 text-white min-h-screen flex justify-center items-center"
        id="contact"
      >
        <Contacts contactsRef={contactRef} contactInView={contactInView} />
      </motion.section>
    </div>
  );
};

export default Scroll;