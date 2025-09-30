
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/components/hooks/useReducedMotion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const variant = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: shouldReduceMotion ? 0 : delay } },
  });

  const cardVariant = (delay = 0) => ({
      initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      animate: { opacity: 1, y: 0, transition: { delay: shouldReduceMotion ? 0 : delay } },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxdMjA3fDB8MHwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />

      <div className="relative py-24 md:py-0 z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          variants={variant()}
          initial="initial"
          animate="animate"
        >
          <p className="text-base md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed pt-20" style={{ fontFamily: 'Playfair Display, serif' }}>
            Beleef een vijfgangenreis in het donker! Tijdens "Dinner in the Dark" ervaar jij hoe het is om te dineren zonder zicht. Geniet van een verfijnd vijf-gangen menu en steun het goede doel!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto">
            <motion.div 
              variants={cardVariant(0.3)}
              initial="initial"
              animate="animate"
              className="bg-gray-800/50 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-gray-700 flex md:flex-col items-center md:text-center text-left gap-3 md:gap-0"
            >
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-amber-400 flex-shrink-0 md:mx-auto md:mb-4" />
              <div className="flex-1 md:flex-none">
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Data</h3>
                <p className="text-sm md:text-base text-gray-300">
                  Vrijdag 31 Oktober 2025<br />
                  & Zaterdag 1 November 2025
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariant(0.4)}
              initial="initial"
              animate="animate"
              className="bg-gray-800/50 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-gray-700 flex md:flex-col items-center md:text-center text-left gap-3 md:gap-0"
            >
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-amber-400 flex-shrink-0 md:mx-auto md:mb-4" />
              <div className="flex-1 md:flex-none">
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Locatie</h3>
                <p className="text-sm md:text-base text-gray-300">Van Renesselaan 30a<br />3703 AJ Zeist</p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariant(0.5)}
              initial="initial"
              animate="animate"
              className="bg-gray-800/50 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-gray-700 flex md:flex-col items-center md:text-center text-left gap-3 md:gap-0"
            >
              <Euro className="w-6 h-6 md:w-8 md:h-8 text-amber-400 flex-shrink-0 md:mx-auto md:mb-4" />
              <div className="flex-1 md:flex-none">
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Prijs</h3>
                <p className="text-sm md:text-base text-gray-300">€62 per persoon</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariant(0.6)}
            initial="initial"
            animate="animate"
          >
            <a href="https://eventix.shop/r2trrkkw" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-8 py-4 rounded-full shadow-xl transform transition-transform hover:scale-105"
                aria-label="Koop tickets via Eventix (opent in nieuw venster)"
              >
                Koop Tickets
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-amber-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
