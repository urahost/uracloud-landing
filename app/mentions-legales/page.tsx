"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { IconBuilding, IconPhone, IconMail, IconShield, IconCertificate, IconGavel } from "@tabler/icons-react";

export default function MentionsLegales() {
  return (
    <Container className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6"
          >
            <IconGavel className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
          >
            Mentions légales
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            Informations légales et obligations réglementaires d&apos;Urahost
          </motion.p>
        </div>
        
        <div className="space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <IconBuilding className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Informations légales
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <IconBuilding className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                    Éditeur du site
                  </h3>
                </div>
                <div className="space-y-3 text-blue-800 dark:text-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p><span className="font-medium">Raison sociale :</span> Bourez Bastien</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p><span className="font-medium">Forme juridique :</span> Microentreprise</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p><span className="font-medium">SIRET :</span> 925 398 075 00018</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p><span className="font-medium">SIREN :</span> 925 398 075</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p><span className="font-medium">N° TVA :</span> FR14925398075</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <IconMail className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">
                    Contact
                  </h3>
                </div>
                <div className="space-y-3 text-green-800 dark:text-green-200">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Adresse :</p>
                      <p className="text-sm">16 rue gustave courbet<br />59300 aulnoy-lez-valenciennes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p><span className="font-medium">Email :</span> contact@urahost.fr</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p><span className="font-medium">Téléphone :</span> 03 74 01 41 49</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <IconCertificate className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100">
                    Direction
                  </h3>
                </div>
                <div className="space-y-2 text-purple-800 dark:text-purple-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <p><span className="font-medium">Directeur :</span> Bourez Bastien</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <p><span className="font-medium">Email :</span> contact@urahost.fr</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                <div className="flex items-center gap-3 mb-4">
                  <IconShield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100">
                    Hébergement
                  </h3>
                </div>
                <div className="space-y-2 text-orange-800 dark:text-orange-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p><span className="font-medium">Hébergeur :</span> Vercel Inc.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p><span className="font-medium">Localisation :</span> États-Unis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-800 dark:text-orange-400 font-medium underline hover:no-underline">Site officiel</a></p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
                <div className="flex items-center gap-3 mb-4">
                  <IconShield className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                  <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-100">
                    Assurance
                  </h3>
                </div>
                <div className="space-y-2 text-teal-800 dark:text-teal-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    <p><span className="font-medium">RC Pro :</span> Hiscox</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1"></div>
                    <p className="text-sm">Couverture des activités d&apos;hébergement et services numériques</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <IconGavel className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Dispositions légales
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Propriété intellectuelle
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    L&apos;ensemble du site Urahost relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
                    Tous les droits de reproduction sont réservés.
                  </p>
                  <p>
                    La reproduction de tout ou partie du site Urahost sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Limitation de responsabilité
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible mais peuvent contenir des inexactitudes ou des omissions.
                  </p>
                  <p>
                    Pour signaler un dysfonctionnement : <span className="font-medium text-neutral-800 dark:text-neutral-200">contact@urahost.fr</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Juridiction
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Tout litige en relation avec l&apos;utilisation du site Urahost est soumis au droit français et aux tribunaux compétents de Valenciennes.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  Données personnelles
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Pour plus d&apos;informations sur le traitement de vos données personnelles, consultez notre 
                  <a href="/politique-de-confidentialite" className="font-medium underline hover:no-underline ml-1">Politique de confidentialité</a>.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Container>
  );
}