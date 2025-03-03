"use client"

import { cn } from "@/libs/utils"
import { motion } from "framer-motion"
import type React from "react"

export const AnimatedGradient = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#2D84B4EB] to-[#6C58B3EB] bg-[#5B48B8EB] opacity-100"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />
      <div className="relative bg-transparent z-10 m-[2px] rounded-lg">{children}</div>
    </motion.div>
  )
}

