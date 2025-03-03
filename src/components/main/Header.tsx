/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { DownloadIcon } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const handleDownload = () => {
    // Replace with your actual PDF file URL or local path
    const pdfUrl = "/intern-resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "intern-resume.pdf"; // Updated the download file name for clarity
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <motion.header
      className="sticky top-0 z-30 bg-background/50 backdrop-blur-sm text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-1 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Flowers & Saints</span>
            <img
              className="h-8 w-auto"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
              alt="Flowers & Saints Logo"
            />
          </Link> */}
        </div>
        <div className="flex gap-x-12">
          <a
            href="#work-experience"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Work Experience
          </a>
          <a
            href="#projects"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-primary text-white hover:bg-primary/80 transition-all"
          >
            <DownloadIcon className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
