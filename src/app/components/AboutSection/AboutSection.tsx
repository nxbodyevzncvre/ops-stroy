import React from "react";
import { motion } from "framer-motion";

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  aboutInView: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef, aboutInView }) => (
  <section
    className="py-12 bg-gray-900 text-white min-h-screen flex justify-center items-center"
    id="about"
  >
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0, x: -50 }}
      animate={aboutInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.5 }}
      className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10"
    >
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">О нас</h2>
        <p className="text-gray-400 mb-4 text-base md:text-lg lg:text-xl">
          Мы — ОПС Строй, работаем на рынке безопасности более 10 лет. Наша миссия — обеспечить спокойствие и защиту
          каждого клиента, используя современные технологии и опытную команду.
        </p>
        <div>
          <button className="bg-blue-600 flex mx-auto md:mx-0 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Подробнее
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl shadow-lg relative z-10 overflow-hidden">
          <a
            href="https://yandex.kz/maps/ru/org/ops_stroy/49117773239/?lang=ru&utm_medium=mapframe&utm_source=maps"
            className="text-white text-xs absolute top-0"
          >
            ОПС Строй
          </a>
          <a
            href="https://yandex.kz/maps/ru/org/ops_stroy/49117773239/?lang=ru&utm_medium=mapframe&utm_source=maps"
            className="text-white text-xs absolute top-4"
          >
            Охранное предприятие в Актобе
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2548.4530170965663!2d57.1724311!3d50.3021375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41822100735e796d%3A0x9985b5353bf37ec2!2z0J7Qn9ChINCh0YLRgNC-0Lk!5e0!3m2!1sru!2ssk!4v1740485307608!5m2!1sru!2ssk"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;