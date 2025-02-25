"use client"

import { MouseEvent } from "react"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [showNotification, setShowNotification] = useState(false)

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const phoneNumber = "+77054000201"
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 2000) 
      }).catch(err => {
        console.error("Failed to copy: ", err)
      })
    } else {
      // Fallback method for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = phoneNumber
      document.body.appendChild(textArea)
      textArea.select()
      try {
        document.execCommand("copy")
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 2000)
      } catch (err) {
        console.error("Failed to copy: ", err)
      }
      document.body.removeChild(textArea)
    }
  }

  return (
    <header className="top-0 left-0 w-full z-50 bg-transparent text-white p-6 flex justify-between items-center text-xl">
      <Link href="/" passHref>
        <h1 className="cursor-pointer">ОПС Строй</h1>
      </Link>
      <a href="#" onClick={handlePhoneClick}>
        +7(705) 400-0201
      </a>
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-6 bg-black/10 text-gray-300 px-4 py-2 rounded-md shadow-lg "
          >
            Номер скопирован!
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

