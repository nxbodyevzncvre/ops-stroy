"use client";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

export default function BackgroundPart({ aboutRef, advantagesRef, servicesRef, contactRef }: any) {
  return (
    <div className="w-full h-screen relative bg-transparent overflow-hidden">
      <video
        src="vidik.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 z-10 w-full h-full object-cover"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20"></div>
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>
      <div className="absolute top-24 left-8 w-full z-30">
        <Navbar
          aboutRef={aboutRef}
          advantagesRef={advantagesRef}
          servicesRef={servicesRef}
          contactRef={contactRef}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-white text-4xl font-bold text-center flex flex-col gap-10">
        <h2>ОПС Кузет</h2>
        <p>Безопасность — наша приоритетная задача</p>
      </div>
    </div>
  );
}
