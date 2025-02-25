import type React from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

interface ContactsProps {
  contactsRef: React.RefObject<HTMLDivElement | null>;
  contactInView: boolean;
}

export default function Contacts({ contactsRef, contactInView }: ContactsProps) {
  return (
    <motion.div
      ref={contactsRef}
      initial={{ opacity: 0, x: -50 }}
      animate={contactInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-16"
    >
      <section className="py-20 w-full">
        <div className="container mx-auto">
          <div className="bg-gray-700 rounded-lg p-8 md:p-12 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Остались вопросы?</h2>
            <p className="text-lg mb-8 text-center text-gray-300">
              Наши специалисты готовы ответить на все ваши вопросы и предложить оптимальное решение для вашей
              безопасности.
            </p>
            <div className="flex justify-center">
              <button
                className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105 px-6 py-3 rounded-lg text-lg font-semibold flex items-center"
                onClick={() => (window.location.href = "tel:+77XXXXXXXXX")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить сейчас
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}