
import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Euro, Heart, Clock, Users, Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import About from "../components/sections/About";
import Bartimeus from "../components/sections/Bartimeus";
import Contact from "../components/sections/Contact";
import EventDetails from "../components/sections/EventDetails";
import Hero from "../components/sections/Hero";
import ReadAloudButton from "../components/accessibility/ReadAloudButton";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set page title
    document.title = "Dinner in the Dark | JCI Utrecht voor Bartiméus";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Ervaar een uniek 5-gangen diner zonder zicht en steun het goede doel Bartiméus. Een onvergetelijke avond georganiseerd door JCI Utrecht op 31 oktober & 1 november 2025 in Zeist.";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800" role="navigation" aria-label="Hoofdnavigatie">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">

            {/* Logo Section (Left) */}
            <div className="flex items-center">
              <a href="#" aria-label="Home">
                <img 
                  src="/logo.png"
                  alt="Dinner in the Dark logo" 
                  className="h-16 w-auto transition-transform duration-300 hover:scale-105"
                />
              </a>
            </div>

            {/* Mobile: Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open hoofdmenu</span>
                {mobileMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
            
            {/* Desktop: Right Button */}
            <div className="hidden md:flex items-center">
              <a href="https://eventix.shop/r2trrkkw" target="_blank" rel="noopener noreferrer" aria-label="Koop tickets via Eventix (opent in nieuw venster)">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transform transition-transform hover:scale-105 font-bold px-6">
                      Koop Tickets
                  </Button>
              </a>
            </div>

          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-50" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
              <a href="#details" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-label="Ga naar de evenement details">Het Event</a>
              <a href="mailto:info@dinnerinthedark.nl" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-label="Stuur een e-mail naar info@dinnerinthedark.nl">Contact</a>
              <a href="https://eventix.shop/r2trrkkw" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold hover:bg-gray-700 hover:text-amber-300 block px-3 py-2 rounded-md text-base" aria-label="Koop tickets via Eventix (opent in nieuw venster)">
                Koop Tickets
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="main-content">
        <Hero />
        <About />
        <EventDetails />
        <Contact />
        <Bartimeus />
      </main>

      <ReadAloudButton />

      {/* Footer */}
      <footer className="bg-black py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Dinner in the Dark - Alle opbrengsten gaan naar Bartiméus
          </p>
          <div className="flex justify-center space-x-6">
            <Heart className="w-5 h-5 text-red-500" aria-hidden="true" />
              <span className="text-sm text-gray-500">Met liefde georganiseerd door <a className="underline underline-offset-2" href="https://jci-utrecht.nl/"
                                                                                       target="_blank" rel="noopener noreferrer"
                                                                                       aria-label="Bezoek de website van JCI Utrecht (opent in nieuw venster)">JCI Utrecht</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
