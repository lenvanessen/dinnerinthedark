import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Home, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Bartimeus() {
  return (
    <section id="bartimeus" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Over JCI Utrecht</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                JCI (Junior Chamber International) Utrecht is een netwerk van jonge, ondernemende mensen 
                die zich inzetten voor persoonlijke ontwikkeling en een positieve impact op de maatschappij. 
                Met projecten zoals Dinner in the Dark willen we niet alleen een unieke ervaring bieden, maar ook 
                concreet bijdragen aan belangrijke maatschappelijke doelen.
              </p>
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">De Missie van Bartiméus</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Bartiméus gelooft dat iedereen het recht heeft om een zelfstandig en zinvol leven te leiden. 
                Zij bieden ondersteuning, begeleiding en innovatieve oplossingen aan mensen met 
                een visuele beperking, zodat zij hun dromen kunnen waarmaken.
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center mb-16">
            <h3 className="text-2xl font-semibold text-white">Hoe Bartiméus helpt</h3>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Wonen & Leven</h3>
                <p className="text-gray-400">
                  Ondersteuning bij zelfstandig wonen en dagelijkse activiteiten.
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
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Briefcase className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Werk & Carrière</h3>
                <p className="text-gray-400">
                  Begeleiding bij het vinden en behouden van een passende baan.
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
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <GraduationCap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Onderwijs</h3>
                <p className="text-gray-400">
                  Onderwijs en training op maat voor kinderen, jongeren en volwassenen.
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
            <Card className="bg-gray-800 border-gray-700 h-full">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Samenleving</h3>
                <p className="text-gray-400">
                  Participatie in de samenleving en sociale contacten versterken.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  );
}