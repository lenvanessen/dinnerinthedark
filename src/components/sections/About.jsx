
import React from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Utensils, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useReducedMotion } from "@/components/hooks/useReducedMotion";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariant = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay: shouldReduceMotion ? 0 : 0 }
  };

  const cardVariant = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 }, // Fixed variable name here
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: shouldReduceMotion ? 0 : delay }
  });

  return (
    <section id="evenement" className="py-20 bg-gray-800" aria-labelledby="evenement-title">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          {...sectionVariant}
          className="text-center mb-16"
        >
          <h2 id="evenement-title" className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Een Unieke Ervaring
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ontdek hoe het is om te dineren zonder zicht. Een ervaring die je andere zintuigen 
            extra prikkelt en je een nieuw perspectief geeft op het dagelijks leven.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div {...cardVariant(0.1)}>
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <EyeOff className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Dineren Zonder Zicht</h3>
                <p className="text-gray-400">
                  Je geniet in het donker van een smakelijk diner.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...cardVariant(0.2)}>
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Utensils className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Verrassingsmenu</h3>
                <p className="text-gray-400">
                  We serveren een speciaal samengesteld 5 gangen menu dat je smaakpapillen prikkelt.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...cardVariant(0.3)}>
            <Card className="bg-gray-900 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Eye className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Bewustwording</h3>
                <p className="text-gray-400">
                  Ervaar de dagelijkse uitdagingen van mensen met een visuele beperking.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...cardVariant(0.4)}>
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
          {...cardVariant(0.5)}
          className="mt-16 text-center bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-12 border border-amber-500/20"
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
