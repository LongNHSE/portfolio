/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadIcon, Menu, X } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: "#work-experience", label: "Work Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-background/80 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-lg px-4 py-2 bg-primary text-white hover:bg-primary/80 transition-all"
          >
            <DownloadIcon className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pb-3 pt-2 bg-background/90 backdrop-blur-md border-t border-border/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-background/80 hover:text-primary"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-border/10">
                <button
                  onClick={() => {
                    handleDownload();
                    closeMenu();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 bg-primary text-white hover:bg-primary/80 transition-all"
                >
                  <DownloadIcon className="h-5 w-5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
