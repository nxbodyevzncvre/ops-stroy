import React from "react";
import { motion } from "framer-motion";

interface AdvantagesSectionProps {
  advantagesRef: React.RefObject<HTMLDivElement | null>;
  advantagesInView: boolean;
}

const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ advantagesRef, advantagesInView }) => (
  <motion.section
    ref={advantagesRef}
    initial={{ opacity: 0, x: -50 }}
    animate={advantagesInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 1.5 }}
    className="py-12 bg-gray-800 text-white min-h-screen flex justify-center items-center"
    id="advantages"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Наши преимущества</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Реагирование за 5 минут", icon: "⚡", description: "Молниеносная реакция групп на вызов." },
          { title: "Современные технологии", icon: "🔒", description: "Используем лучшие системы защиты." },
          { title: "Опытная команда", icon: "👮", description: "Наши сотрудники имеют многолетний опыт." },
          { title: "Поддержка 24/7", icon: "📞", description: "Всегда готовы помочь клиентам." },
        ].map((advantage, index) => (
          <div
            className="p-6 bg-gray-700 rounded-2xl shadow-lg hover:bg-gray-600 delay-75 transition flex flex-col items-center"
            key={index}
          >
            <span className="text-4xl text-green-500 mb-4">{advantage.icon}</span>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">{advantage.title}</h3>
            <p className="text-gray-300 text-center text-sm md:text-base">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default AdvantagesSection;