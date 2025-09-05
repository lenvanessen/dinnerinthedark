
import React from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Utensils, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="evenement" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Een Unieke Ervaring
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ontdek hoe het is om te dineren zonder zicht. Een ervaring die je andere zintuigen 
            wakker maakt en je een nieuw perspectief geeft op het dagelijks leven.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <EyeOff className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Dineren Zonder Zicht</h3>
                <p className="text-gray-400">
                  Diner zonder zicht en ontdek hoe je andere zintuigen tot leven komen.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Utensils className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Verrassingsmenu</h3>
                <p className="text-gray-400">
                  Een speciaal samengesteld menu dat je smaakpapillen uitdaagt en verrast.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Eye className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Bewustwording</h3>
                <p className="text-gray-400">
                  Krijg inzicht in de dagelijkse uitdagingen van mensen met een visuele beperking.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Goed Doel</h3>
                <p className="text-gray-400">
                  100% van de opbrengst gaat naar Bartiméus om blinde en slechtziende mensen te helpen.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-12 border border-amber-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Waarom Dinner in the Dark?
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Deze unieke ervaring opent letterlijk en figuurlijk je ogen voor hoe het is om blind of slechtziend te zijn. 
            Terwijl je geniet van een heerlijk diner, ondersteun je tegelijkertijd het belangrijke werk van Bartiméus. 
            Een avond die je nooit meer vergeet, voor een doel dat er echt toe doet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
