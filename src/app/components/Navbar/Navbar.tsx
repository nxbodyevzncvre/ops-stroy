"use client";

import { type RefObject, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  aboutRef: RefObject<HTMLDivElement | null>;
  advantagesRef: RefObject<HTMLDivElement | null>;
  servicesRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export default function Navbar({
  aboutRef,
  advantagesRef,
  servicesRef,
  contactRef,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (ref: RefObject<HTMLDivElement | null>) => {

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "О нас", ref: aboutRef },
    { name: "Преимущества", ref: advantagesRef },
    { name: "Услуги", ref: servicesRef },
    { name: "Связаться", ref: contactRef },
  ];

  return (
    <nav className="text-white/60 z-20 relative w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="nav-item pb-2 cursor-pointer hover:text-white transition-colors duration-200"
                onClick={() => handleScroll(item.ref)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-600 rounded-md shadow-lg">
          <ul className="flex flex-col p-4 ">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="nav-item py-2 cursor-pointer hover:text-white transition-colors duration-200"
                onClick={() => handleScroll(item.ref)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}