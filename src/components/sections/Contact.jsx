
import React from "react";
import { motion } from "framer-motion";
import { Mail, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tickets & Contact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Koop hier direct je tickets of neem contact met ons op voor meer informatie
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-amber-400 text-xl">Contact Informatie</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:info@dinnerinthedark.nl"
                       className="text-gray-400 hover:text-amber-400 transition-colors"
                       aria-label="Stuur een email naar info@dinnerinthedark.nl">
                      info@dinnerinthedark.nl
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-amber-500/10 to-amber-600/10 border-amber-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Belangrijke Informatie</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    <span>Beperkt aantal plaatsen beschikbaar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    <span>Betalingen via de externe ticketshop (Eventix)</span>
                  </li>
                   <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    <span>Geschikt voor mensen vanaf 12 jaar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    <span>
                      <strong>Allergieën:</strong> We kunnen hier beperkt rekening mee houden. Geef ze door bij het boeken of mail ons vooraf bij twijfel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                    <span>
                      <strong>Verrassingsmenu:</strong> Je kunt bij het boeken kiezen uit een voorkeur voor vlees/vis/vegetarisch
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Ticket Button Section - Replaced WeeztixWidget with a button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-500/20 h-full flex flex-col items-center justify-center p-8 text-center">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-3xl font-bold text-amber-400">Koop je Tickets!</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="mb-8 max-w-md mx-auto">
                  Mis deze unieke ervaring niet en steun tegelijkertijd Bartiméus. De plaatsen zijn beperkt, dus wees er snel bij!
                </p>
                <a href="https://eventix.shop/r2trrkkw" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-white text-lg px-10 py-6 rounded-full shadow-xl transform transition-transform hover:scale-105"
                    aria-label="Koop tickets via Eventix (opent in nieuw venster)"
                  >
                    <Ticket className="w-5 h-5 mr-3" />
                    Direct naar de Ticketshop
                  </Button>
                </a>
                <p className="text-xs text-gray-500 mt-4">Je wordt doorgestuurd naar onze partner Eventix.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
