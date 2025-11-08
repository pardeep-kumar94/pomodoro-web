"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["how-it-works", "pricing"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Reset to empty if at top
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works", id: "how-it-works" },
    { href: "#pricing", label: "Pricing", id: "pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ff9d5c] to-[#ff8040] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-[#3d3d3d] group-hover:text-[#ff9d5c] transition-colors">MindAnchor</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors font-medium relative pb-1 ${
                  activeSection === link.id
                    ? "text-[#ff9d5c]"
                    : "text-[#3d3d3d] hover:text-[#ff9d5c]"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff9d5c] rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#launch-countdown"
              className="bg-[#ff9d5c] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#ff8040] transition-all hover:shadow-lg hover:shadow-[#ff9d5c]/30 hover:scale-105 transform"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('launch-countdown')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Download Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
