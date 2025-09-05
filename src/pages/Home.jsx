
import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Euro, Heart, Clock, Users, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

import Hero from "../components/sections/Hero";
import EventDetails from "../components/sections/EventDetails";
import About from "../components/sections/About";
import Bartimeus from "../components/sections/Bartimeus";
import Contact from "../components/sections/Contact";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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
    metaDescription.content = "Ervaar een uniek 5-gangen diner zonder zicht en steun het goede doel Bartiméus. Een onvergetelijke avond georganiseerd door JCI Utrecht op 31 oktober & 1 november in Zeist.";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-amber-400"
            >
              Dinner in the Dark
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <a href="#evenement" className="hover:text-amber-400 transition-colors">Evenement</a>
              <a href="#details" className="hover:text-amber-400 transition-colors">Details</a>
              <a href="#bartimeus" className="hover:text-amber-400 transition-colors">Bartiméus</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <EventDetails />
      <Bartimeus />
      <Contact />

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Dinner in the Dark - Alle opbrengsten gaan naar Bartiméus
          </p>
          <div className="flex justify-center space-x-6">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="text-sm text-gray-500">Met liefde georganiseerd voor een goed doel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
