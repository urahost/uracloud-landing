"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { IconFileText, IconUser, IconServer, IconCreditCard, IconShield, IconAlertTriangle, IconCheck, IconX } from "@tabler/icons-react";

export default function ConditionsGenerales() {
  return (
    <Container className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6"
          >
            <IconFileText className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100"
          >
            Conditions générales d&apos;utilisation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-600 dark:text-neutral-400"
          >
            Règles et conditions d&apos;utilisation de nos services
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
                <IconFileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Informations générales
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                  Objet
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et l&apos;utilisation de la plateforme Urahost, 
                  proposée par Bourez Bastien, microentreprise immatriculée sous le SIRET 925 398 075 00018.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100">
                  Acceptation
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  L&apos;utilisation de la plateforme Urahost implique l&apos;acceptation pleine et entière des présentes CGU. 
                  Si vous n&apos;acceptez pas ces conditions, vous devez cesser immédiatement d&apos;utiliser nos services.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                Définitions
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Plateforme</h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200">Le site web Urahost et l&apos;ensemble de ses services</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4 border border-orange-200 dark:border-orange-800">
                  <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">Utilisateur</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">Toute personne physique ou morale utilisant la plateforme</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800">
                  <h4 className="font-medium text-teal-900 dark:text-teal-100 mb-2">Services</h4>
                  <p className="text-sm text-teal-800 dark:text-teal-200">L&apos;ensemble des prestations proposées</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-4 border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-medium text-indigo-900 dark:text-indigo-100 mb-2">Contenu</h4>
                  <p className="text-sm text-indigo-800 dark:text-indigo-200">Tous éléments publiés sur la plateforme</p>
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
                <IconServer className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Nos services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                  Hébergement web
                </h3>
                <div className="space-y-2 text-blue-800 dark:text-blue-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Hébergement de sites web et applications</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Déploiement en un clic</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Gestion de bases de données</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Support technique</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100 flex items-center gap-2">
                  Serveurs de jeux
                  <span className="text-xs bg-green-200 dark:bg-green-700 px-2 py-1 rounded-full">Bientôt</span>
                </h3>
                <div className="space-y-2 text-green-800 dark:text-green-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Hébergement serveurs multijoueurs</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Configuration automatisée</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Support mods et plugins</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Maintenance incluse</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-100">
                  Services complémentaires
                </h3>
                <div className="space-y-2 text-purple-800 dark:text-purple-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <p>Formations gratuites</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <p>Assistance IA (Premium)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <p>Génération automatique de sites</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <p>Support prioritaire</p>
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
                <IconUser className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Inscription et compte
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Conditions d&apos;inscription
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-800 dark:text-blue-200">Ouvert à toute personne physique ou morale ayant la capacité juridique</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-800 dark:text-blue-200">Les informations fournies doivent être exactes et à jour</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-blue-800 dark:text-blue-200">Un seul compte par utilisateur</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Responsabilité du compte
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-orange-800 dark:text-orange-200">Confidentialité des identifiants de connexion</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-orange-800 dark:text-orange-200">Responsabilité de toutes les activités du compte</p>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-orange-800 dark:text-orange-200">Notification immédiate en cas d&apos;utilisation non autorisée</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <IconShield className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Utilisation acceptable
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100 flex items-center gap-2">
                  <IconCheck className="w-5 h-5" />
                  Utilisations autorisées
                </h3>
                <div className="space-y-2 text-green-800 dark:text-green-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Héberger des sites web légaux</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Développer et déployer des applications conformes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Organiser des sessions de jeu en ligne</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Utiliser les ressources allouées normalement</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <p>Créer du contenu respectueux des droits</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-semibold mb-4 text-red-900 dark:text-red-100 flex items-center gap-2">
                  <IconX className="w-5 h-5" />
                  Utilisations interdites
                </h3>
                <div className="space-y-2 text-red-800 dark:text-red-200">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <p>Contenu illégal, diffamatoire ou offensant</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <p>Activités de piratage ou cybercriminalité</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <p>Distribution de virus ou malwares</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <p>Utilisation excessive des ressources</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <p>Revente non autorisée des services</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <p>Contenu pornographique ou violent</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <IconCreditCard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-900 dark:text-green-100">
                Tarification et paiement
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Découverte
                </h3>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Gratuit</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Avec limitations</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Standard
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">14,99€</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">par mois</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Premium
                </h3>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">24,99€</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">par mois</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Pay-as-you-go
                </h3>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">À la carte</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Selon usage</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Modalités de paiement
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Paiements par carte bancaire ou virement</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Facturation mensuelle automatique</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Possibilité de facturation annuelle</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Aucune commission sur les transactions</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Politique de remboursement
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p>Aucun remboursement sauf non-conformité avérée</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p>Demandes dans les 7 jours suivant facturation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p>Résiliation possible à tout moment</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <p>Services jusqu&apos;à fin de période payée</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-200 dark:border-neutral-700">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <IconAlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                Disponibilité et responsabilités
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Disponibilité
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-xl border border-green-200 dark:border-green-800">
                    <p className="font-medium text-green-900 dark:text-green-100">Objectif 99,9%</p>
                    <p className="text-sm text-green-800 dark:text-green-200">Disponibilité visée (indicatif)</p>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Interruptions possibles pour maintenance programmée
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Responsabilité utilisateur
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Contenu publié ou hébergé</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Respect de la législation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Sauvegarde des données</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <p>Sécurisation des applications</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Limitation de responsabilité
                </h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-3 rounded-xl border border-orange-200 dark:border-orange-800">
                    <p className="font-medium text-orange-900 dark:text-orange-100">Responsabilité limitée</p>
                    <p className="text-sm text-orange-800 dark:text-orange-200">Au montant effectivement payé</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-3 rounded-xl border border-blue-200 dark:border-blue-800">
                    <p className="font-medium text-blue-900 dark:text-blue-100">Assurance RC Pro</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200">Couverture Hiscox</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-indigo-200 dark:border-indigo-800"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <IconFileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-indigo-900 dark:text-indigo-100">
                Résiliation et dispositions finales
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Résiliation
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Par l&apos;utilisateur</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Résiliation possible à tout moment depuis l&apos;espace personnel. 
                      Effet à la fin de la période de facturation en cours.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">Par Urahost</h4>
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      Suspension ou résiliation en cas de violation des CGU, 
                      avec préavis de 7 jours sauf urgence.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Dispositions légales
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Modifications des CGU</h4>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Information par email 30 jours avant l&apos;entrée en vigueur des modifications.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
                    <h4 className="font-medium text-teal-900 dark:text-teal-100 mb-2">Droit applicable</h4>
                    <p className="text-sm text-teal-800 dark:text-teal-200">
                      Droit français - Tribunaux compétents de Valenciennes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                Contact et assistance
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">Email</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">contact@urahost.fr</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">Adresse</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">16 rue gustave courbet<br />59300 aulnoy-lez-valenciennes</p>
                </div>
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">SIRET</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">925 398 075 00018</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-neutral-600 dark:text-neutral-400">
                  Pour plus d&apos;informations sur la protection de vos données, consultez notre 
                  <a href="/politique-de-confidentialite" className="font-medium underline hover:no-underline ml-1 text-blue-600 dark:text-blue-400">
                    Politique de confidentialité
                  </a>
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </Container>
  );
}