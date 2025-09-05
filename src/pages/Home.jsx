
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
              <svg width="215" height="20" viewBox="0 0 215 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M127.373 20V12.7273H132.273V13.9951H128.91V15.728H132.021V16.9958H128.91V18.7323H132.287V20H127.373Z" fill="white"/>
                  <path d="M119.112 20V12.7273H120.649V15.728H123.771V12.7273H125.305V20H123.771V16.9958H120.649V20H119.112Z" fill="white"/>
                  <path d="M111.355 13.9951V12.7273H117.328V13.9951H115.101V20H113.582V13.9951H111.355Z" fill="white"/>
                  <path d="M121.318 0.727295V8.00002H119.99L116.826 3.42261H116.773V8.00002H115.235V0.727295H116.584L119.723 5.30116H119.787V0.727295H121.318Z" fill="white"/>
                  <path d="M113.17 0.727295V8.00002H111.632V0.727295H113.17Z" fill="white"/>
                  <path d="M198.893 20V1H202.91V9.37744H203.16L209.998 1H214.812L207.762 9.50732L214.896 20H210.09L204.886 12.1885L202.91 14.6006V20H198.893Z" fill="white"/>
                  <path d="M179.657 20V1H187.153C188.588 1 189.813 1.25667 190.827 1.77002C191.848 2.27718 192.624 2.99772 193.156 3.93164C193.694 4.85938 193.963 5.95101 193.963 7.20654C193.963 8.46826 193.691 9.55371 193.146 10.4629C192.602 11.3659 191.814 12.0586 190.781 12.541C189.754 13.0234 188.511 13.2646 187.051 13.2646H182.032V10.0361H186.402C187.169 10.0361 187.806 9.93099 188.313 9.7207C188.82 9.51042 189.197 9.19499 189.445 8.77441C189.698 8.35384 189.825 7.83122 189.825 7.20654C189.825 6.57568 189.698 6.04378 189.445 5.61084C189.197 5.1779 188.817 4.8501 188.304 4.62744C187.797 4.3986 187.156 4.28418 186.383 4.28418H183.674V20H179.657ZM189.918 11.3535L194.64 20H190.206L185.585 11.3535H189.918Z" fill="white"/>
                  <path d="M161.3 20H156.996L163.555 1H168.731L175.281 20H170.977L166.217 5.3418H166.069L161.3 20ZM161.031 12.5317H171.199V15.6675H161.031V12.5317Z" fill="white"/>
                  <path d="M144.735 20H138V1H144.791C146.702 1 148.347 1.38037 149.727 2.14111C151.106 2.89567 152.167 3.98112 152.909 5.39746C153.657 6.8138 154.031 8.50846 154.031 10.4814C154.031 12.4606 153.657 14.1615 152.909 15.584C152.167 17.0065 151.1 18.0981 149.708 18.8589C148.323 19.6196 146.665 20 144.735 20ZM142.017 16.5581H144.568C145.756 16.5581 146.755 16.3478 147.565 15.9272C148.381 15.5005 148.994 14.8418 149.402 13.9512C149.816 13.0544 150.023 11.8978 150.023 10.4814C150.023 9.07747 149.816 7.93018 149.402 7.03955C148.994 6.14893 148.384 5.49333 147.574 5.07275C146.764 4.65218 145.765 4.4419 144.578 4.4419H142.017V16.5581Z" fill="white"/>
                  <path d="M91.4321 20V1H98.9282C100.363 1 101.588 1.25667 102.602 1.77002C103.623 2.27718 104.399 2.99772 104.931 3.93164C105.469 4.85938 105.738 5.95101 105.738 7.20654C105.738 8.46826 105.466 9.55371 104.921 10.4629C104.377 11.3659 103.589 12.0586 102.556 12.541C101.529 13.0234 100.286 13.2646 98.8262 13.2646H93.8071V10.0361H98.1768C98.9437 10.0361 99.5807 9.93099 100.088 9.7207C100.595 9.51042 100.972 9.19499 101.22 8.77441C101.473 8.35384 101.6 7.83122 101.6 7.20654C101.6 6.57568 101.473 6.04378 101.22 5.61084C100.972 5.1779 100.592 4.8501 100.079 4.62744C99.5714 4.3986 98.9313 4.28418 98.1582 4.28418H95.4492V20H91.4321ZM101.693 11.3535L106.415 20H101.98L97.3604 11.3535H101.693Z" fill="white"/>
                  <path d="M73.3464 20V1H86.1492V4.31201H77.3635V8.83936H85.4905V12.1514H77.3635V16.688H86.1863V20H73.3464Z" fill="white"/>
                  <path d="M67.9368 1V20H64.467L56.2009 8.0415H56.0618V20H52.0447V1H55.5701L63.7712 12.9492H63.9382V1H67.9368Z" fill="white"/>
                  <path d="M46.6362 1V20H43.1665L34.9004 8.0415H34.7612V20H30.7441V1H34.2695L42.4707 12.9492H42.6377V1H46.6362Z" fill="white"/>
                  <path d="M25.3486 1V20H21.3315V1H25.3486Z" fill="white"/>
                  <path d="M6.96997 20H0.234619V1H7.02563C8.93677 1 10.582 1.38037 11.9612 2.14111C13.3404 2.89567 14.4011 3.98112 15.1433 5.39746C15.8917 6.8138 16.2659 8.50846 16.2659 10.4814C16.2659 12.4606 15.8917 14.1615 15.1433 15.584C14.4011 17.0065 13.3342 18.0981 11.9426 18.8589C10.5572 19.6196 8.89966 20 6.96997 20ZM4.25171 16.5581H6.80298C7.99048 16.5581 8.98934 16.3478 9.79956 15.9272C10.616 15.5005 11.2283 14.8418 11.6365 13.9512C12.0509 13.0544 12.2581 11.8978 12.2581 10.4814C12.2581 9.07747 12.0509 7.93018 11.6365 7.03955C11.2283 6.14893 10.6191 5.49333 9.80884 5.07275C8.99862 4.65218 7.99976 4.4419 6.81226 4.4419H4.25171V16.5581Z" fill="white"/>
              </svg>

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
              <span className="text-sm text-gray-500">Met liefde georganiseerd door <a class="underline underline-offset-2" href="https://jci-utrecht.nl/"
                                                                                       target="_blank">JCI Utrecht</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
