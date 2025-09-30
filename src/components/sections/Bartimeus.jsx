
import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Home, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Bartimeus() {
  return (
    <section id="bartimeus" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900" aria-labelledby="bartimeus-title">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="bartimeus-title" className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Een Avond voor het Goede Doel
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Dit evenement wordt met trots georganiseerd door JCI Utrecht.
            De volledige opbrengst van Dinner in the Dark doneren wij aan Bartiméus.
          </p>
        </motion.div>

        {/* JCI Utrecht Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <img 
                src="https://jci-utrecht.nl/wp-content/uploads/2023/07/NC-Lunch-2022-24-scaled-e1688317040171.jpg" 
                alt="Leden van JCI Utrecht" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Over JCI Utrecht</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                JCI (Junior Chamber International) Utrecht is een netwerk van jonge, ondernemende mensen 
                die zich inzetten voor persoonlijke ontwikkeling en een positieve impact op de maatschappij. 
                Met projecten zoals Dinner in the Dark willen we niet alleen een unieke ervaring bieden, maar ook 
                concreet bijdragen aan belangrijke maatschappelijke doelen.
              </p>
              <a 
                href="https://jci-utrecht.nl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  aria-label="Bezoek de website van JCI Utrecht voor meer informatie (opent in nieuw venster)"
                >
                  Meer over JCI Utrecht
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Bartiméus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-red-500/20 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">De Missie van Bartiméus</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-2">
                Het Bartiméus Fonds heeft een missie: wij willen dat mensen met een visuele beperking voluit kunnen meedoen in de samenleving. We zetten alles op alles om dat te bereiken.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Concreet draagt Dinner in the Dark bij aan het openhouden van het zwembad van Bartiméus, zwembad De Bies in Doorn.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://bartimeus.nl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    aria-label="Bezoek de website van Bartiméus voor meer informatie (opent in nieuw venster)"
                  >
                    Meer over Bartiméus
                  </Button>
                </a>
                <a 
                  href="https://bartimeusfonds.nl/zwembadcampagne/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button 
                    variant="outline"
                    className="border-red-500 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    aria-label="Lees meer over de zwembadcampagne van Bartiméus (opent in nieuw venster)"
                  >
                    Meer over het zwembad
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <img 
                src="https://bartimeus.nl/media/cache/generic/rc/71d1nXVo/uploads/media/621dd41c12569/so-leerling-slechtzien.png" 
                alt="Bartiméus begeleiding voor mensen met visuele beperking" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
