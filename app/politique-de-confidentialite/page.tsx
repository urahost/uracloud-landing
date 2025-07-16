"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { IconShield, IconEye, IconLock, IconClock, IconUserCheck, IconAlertCircle } from "@tabler/icons-react";

export default function PolitiqueConfidentialite() {
  return (
    <Container className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mb-6"
          >
            <IconShield className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
          >
            Politique de confidentialité
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            Protection et traitement de vos données personnelles
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-neutral-500 dark:text-neutral-500 mt-4"
          >
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </motion.p>
        </div>
        
        <div className="space-y-12">
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <IconEye className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Collecte des données
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Données collectées
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Identification
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Nom, prénom, adresse email</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Connexion
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-200">Adresse IP, logs, données de navigation</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      Techniques
                    </h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Projets hébergés, configurations serveurs</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                    <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Facturation
                    </h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Informations de paiement (via prestataires)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Moyens de collecte
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Inscription sur notre plateforme</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Utilisation de nos services</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Cookies et technologies similaires</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Communications avec notre support</p>
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
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <IconUserCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Utilisation des données
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Finalités du traitement
                </h3>
                <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Fourniture et gestion de nos services d&apos;hébergement</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Gestion de votre compte utilisateur</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Support technique et assistance</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Facturation et gestion des paiements</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Amélioration de nos services</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Communication commerciale (avec consentement)</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Respect de nos obligations légales</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Base légale
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <p className="font-medium text-green-900 dark:text-green-100">Exécution du contrat</p>
                    <p className="text-sm text-green-800 dark:text-green-200">Pour la fourniture de nos services</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                    <p className="font-medium text-blue-900 dark:text-blue-100">Intérêt légitime</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Amélioration et sécurité</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                    <p className="font-medium text-purple-900 dark:text-purple-100">Consentement</p>
                    <p className="text-sm text-purple-800 dark:text-purple-200">Communications commerciales</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <IconLock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Conservation et sécurité
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Durée de conservation
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Données de compte</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-sm">Suppression + 1 an</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Données de facturation</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-sm">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Logs techniques</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-sm">12 mois max</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-700 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Données de prospection</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full text-sm">3 ans</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Mesures de sécurité
                </h3>
                <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800 dark:text-green-200">Chiffrement des données en transit et au repos</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800 dark:text-green-200">Contrôle d&apos;accès strict</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800 dark:text-green-200">Surveillance et monitoring des systèmes</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800 dark:text-green-200">Formation régulière de nos équipes</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-800 dark:text-green-200">Assurance RC Professionnelle (Hiscox)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <IconAlertCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                Vos droits RGPD
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit d&apos;accès
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Obtenir une copie de vos données personnelles
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit de rectification
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Corriger vos données inexactes ou incomplètes
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit à l&apos;effacement
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Supprimer vos données dans certains cas
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit à la limitation
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Limiter le traitement de vos données
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit à la portabilité
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Récupérer vos données dans un format structuré
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit d&apos;opposition
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Vous opposer au traitement de vos données
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                Exercer vos droits
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p><span className="font-medium">Email :</span> contact@urahost.fr</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                  <p><span className="font-medium">Adresse :</span> 16 rue gustave courbet, 59300 aulnoy-lez-valenciennes</p>
                </div>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Vous pouvez également déposer une réclamation auprès de la 
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 ml-1 underline hover:no-underline">CNIL</a>
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </Container>
  );
}