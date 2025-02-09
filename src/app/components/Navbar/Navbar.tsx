"use client";
import { RefObject } from "react";

interface NavbarProps {
  aboutRef: RefObject<HTMLDivElement>;
  advantagesRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

export default function Navbar({ aboutRef, advantagesRef, servicesRef, contactRef }: NavbarProps) {
  const handleScroll = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="text-white/60 z-20 relative w-full">
      <ul className="flex space-x-4 p-4 cursor-pointer">
        <li className="nav-item pb-2" onClick={() => handleScroll(aboutRef)}>О нас</li>
        <li className="nav-item pb-2" onClick={() => handleScroll(advantagesRef)}>Преимущества</li>
        <li className="nav-item pb-2" onClick={() => handleScroll(servicesRef)}>Услуги</li>
        <li className="nav-item pb-2" onClick={() => handleScroll(contactRef)}>Связаться</li>
      </ul>
    </nav>
  );
}
