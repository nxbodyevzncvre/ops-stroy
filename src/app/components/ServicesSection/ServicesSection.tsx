import React from "react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
  servicesInView: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesRef, servicesInView }) => (
  <motion.section
    ref={servicesRef}
    initial={{ opacity: 0, x: -50 }}
    animate={servicesInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 1.5 }}
    className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-16"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 tracking-tight">Наши услуги</h2>
      <ul className="divide-y divide-gray-700">
        {[
          { title: "Установка камер", icon: "📷", description: "Камеры с мобильным доступом." },
          { title: "Датчики движения", icon: "📡", description: "Современные датчики угроз." },
          { title: "Группы реагирования", icon: "🚓", description: "Работаем 24/7." },
          { title: "Круглосуточный мониторинг", icon: "⏰", description: "Контроль объектов." },
        ].map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={servicesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 2 }}
            className={`py-8 flex flex-col md:flex-row items-center hover:bg-gray-800 transition-colors duration-300 ${index % 2 !== 0 ? "md:justify-end md:pe-10" : ""}`}
          >
            <span className="text-4xl md:text-6xl mb-4 md:mb-0 md:mr-8">{service.icon}</span>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">{service.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.section>
);

export default ServicesSection;