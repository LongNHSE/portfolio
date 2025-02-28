"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

interface MetalBadgeProps {
  title?: string;
  sections?: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
  className?: string;
}

export default function MetalBadge({
  title = "Open to Work",
  className = "",
}: MetalBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative max-w-64 mx-auto ${className}`}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main badge container */}
      <div className="relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {/* Metallic background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 z-0"></div>

        {/* Metallic texture overlay */}
        <div className="absolute inset-0 opacity-10 z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+CiAgPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgogIDxwYXRoIGQ9Ik0wIDAgTDMwIDMwIE0zMCAwIEwwIDMwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')]"></div>

        {/* Light reflection effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 z-20 transition-opacity duration-500 ${
            isHovered ? "opacity-20" : "opacity-5"
          }`}
        ></div>

        {/* Badge content */}
        <div className="relative z-30">
          {/* Badge header */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800"></div>
            <div className="relative px-6 py-3 flex justify-center items-center">
              <div className="absolute left-0 top-0 bottom-0 w-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 border border-gray-300 shadow-inner"></div>
              </div>
              <span className="relative flex h-3 w-3 mr-4 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
              </span>
              <h3 className="text-center font-extrabold tracking-wider text-gray-100 text-lg">
                {title}
              </h3>
              <div className="absolute right-0 top-0 bottom-0 w-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400 border border-gray-300 shadow-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shadow effect */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 opacity-75 blur-sm -z-10"></div>
    </motion.div>
  );
}
