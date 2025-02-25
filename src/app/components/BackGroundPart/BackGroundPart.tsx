"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Navbar from "../Navbar/Navbar"
import Header from "../Header/Header"

interface BackgroundPartProps {
  aboutRef: React.RefObject<HTMLDivElement>
  advantagesRef: React.RefObject<HTMLDivElement>
  servicesRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function BackgroundPart({ aboutRef, advantagesRef, servicesRef, contactRef }: BackgroundPartProps) {
  const videoRef = useRef(null)
  const videoInView = useInView(videoRef, { once: true })
  const bottomDivRef = useRef(null)
  const bottomDivInView = useInView(bottomDivRef, { once: true })

  return (
    <div className="w-full h-screen relative bg-transparent overflow-hidden">
      <motion.div
        ref={videoRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={videoInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 z-10 w-full h-full"
      >
        <video src="vidik.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-20"></div>
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>
      <div className="absolute top-20 left-0 w-full z-30 px-4 sm:px-8">
        <Navbar aboutRef={aboutRef} advantagesRef={advantagesRef} servicesRef={servicesRef} contactRef={contactRef} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full px-4 sm:px-8">
        <motion.div
          className="text-white text-center flex flex-col gap-6 sm:gap-10"
          ref={bottomDivRef}
          initial={{ opacity: 0, y: 50 }}
          animate={bottomDivInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">ОПС Строй</h2>
          <p className="text-lg sm:text-xl md:text-2xl">Безопасность — наша приоритетная задача</p>
        </motion.div>
      </div>
    </div>
  )
}

