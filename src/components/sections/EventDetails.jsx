
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Euro, Users, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EventDetails() {
  return (
    <section id="details" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Evenement Details
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Alle praktische informatie voor jouw Dinner in the Dark ervaring
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Datum & Tijd */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-400 text-2xl">
                  <Calendar className="w-8 h-8" />
                  Data & Tijden
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-orange-600 text-white">Donderdag</Badge>
                    <h3 className="text-xl font-semibold text-white">31 Oktober 2024</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span>19:00 - 22:30</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-lg p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-orange-600 text-white">Vrijdag</Badge>
                    <h3 className="text-xl font-semibold text-white">1 November 2024</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-5 h-5" />
                    <span>19:00 - 22:30</span>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400">
                    <strong>Aankomst:</strong> 18:45 voor ontvangst en instructies
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Locatie */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-400 text-2xl">
                  <MapPin className="w-8 h-8" />
                  Locatie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Adres</h3>
                  <address className="text-gray-300 not-italic text-lg leading-relaxed">
                    Van Renesselaan 30a<br />
                    3703 AJ Zeist<br />
                    Nederland
                  </address>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-white">Bereikbaarheid</h4>
                  <div className="text-sm text-gray-400 space-y-2">
                    <p>🚗 <strong>Auto:</strong> Gratis parkeren beschikbaar</p>
                    <p>🚌 <strong>OV:</strong> Bus 50, 51 - Halte Van Renesselaan</p>
                    <p>🚶 <strong>Te voet:</strong> 10 min. lopen vanaf Zeist CS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Prijs & Wat is inbegrepen */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-400 text-2xl">
                  <Euro className="w-8 h-8" />
                  Prijs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-8 border border-green-500/20">
                  <div className="text-5xl font-bold text-white mb-2">€55</div>
                  <div className="text-lg text-gray-300 mb-4">per persoon</div>
                  <Badge className="bg-green-600 text-white">Volledige opbrengst naar Bartiméus</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-400 text-2xl">
                  <Utensils className="w-8 h-8" />
                  Inbegrepen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>5-gangen verrassingsmenu</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Welkomstdrankje</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Begeleiding door ervaren staff</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Unieke zintuiglijke ervaring</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>Informatiesessie over Bartiméus</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
