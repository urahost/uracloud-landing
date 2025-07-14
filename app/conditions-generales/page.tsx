import { Container } from "@/components/container";

export const metadata = {
  title: "Conditions générales d'utilisation | Urahost",
  description: "Conditions générales d'utilisation des services Urahost",
};

export default function ConditionsGenerales() {
  return (
    <Container className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Conditions générales d&apos;utilisation
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Règles et conditions d&apos;utilisation de nos services
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
        
        <div className="space-y-12">
          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Informations générales
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Objet
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;accès et l&apos;utilisation de la plateforme Urahost, 
                  proposée par Bourez Bastien, microentreprise immatriculée sous le SIRET 925 398 075 00018.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Acceptation
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
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
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Plateforme</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Le site web Urahost et l&apos;ensemble de ses services</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Utilisateur</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Toute personne physique ou morale utilisant la plateforme</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Services</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">L&apos;ensemble des prestations proposées</p>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                  <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Contenu</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Tous éléments publiés sur la plateforme</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Nos services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                  Hébergement web
                </h3>
                <div className="space-y-2 text-blue-800 dark:text-blue-200">
                  <p>• Hébergement de sites web et applications</p>
                  <p>• Déploiement en un clic</p>
                  <p>• Gestion de bases de données</p>
                  <p>• Support technique</p>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100">
                  Serveurs de jeux
                  <span className="text-sm bg-green-100 dark:bg-green-800 px-2 py-1 rounded-full ml-2">Bientôt</span>
                </h3>
                <div className="space-y-2 text-green-800 dark:text-green-200">
                  <p>• Hébergement serveurs multijoueurs</p>
                  <p>• Configuration automatisée</p>
                  <p>• Support mods et plugins</p>
                  <p>• Maintenance incluse</p>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold mb-4 text-purple-900 dark:text-purple-100">
                  Services complémentaires
                </h3>
                <div className="space-y-2 text-purple-800 dark:text-purple-200">
                  <p>• Formations gratuites</p>
                  <p>• Assistance IA (Premium)</p>
                  <p>• Génération automatique de sites</p>
                  <p>• Support prioritaire</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Inscription et compte
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Conditions d&apos;inscription
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Ouvert à toute personne physique ou morale ayant la capacité juridique</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Les informations fournies doivent être exactes et à jour</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Un seul compte par utilisateur</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Responsabilité du compte
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Confidentialité des identifiants de connexion</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Responsabilité de toutes les activités du compte</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Notification immédiate en cas d&apos;utilisation non autorisée</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Utilisation acceptable
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-100">
                  ✅ Utilisations autorisées
                </h3>
                <div className="space-y-2 text-green-800 dark:text-green-200">
                  <p>• Héberger des sites web légaux</p>
                  <p>• Développer et déployer des applications conformes</p>
                  <p>• Organiser des sessions de jeu en ligne</p>
                  <p>• Utiliser les ressources allouées normalement</p>
                  <p>• Créer du contenu respectueux des droits</p>
                </div>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-semibold mb-4 text-red-900 dark:text-red-100">
                  ❌ Utilisations interdites
                </h3>
                <div className="space-y-2 text-red-800 dark:text-red-200">
                  <p>• Contenu illégal, diffamatoire ou offensant</p>
                  <p>• Activités de piratage ou cybercriminalité</p>
                  <p>• Distribution de virus ou malwares</p>
                  <p>• Utilisation excessive des ressources</p>
                  <p>• Revente non autorisée des services</p>
                  <p>• Contenu pornographique ou violent</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800">
            <h2 className="text-3xl font-bold mb-8 text-green-900 dark:text-green-100">
              Tarification et paiement
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Découverte
                </h3>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Gratuit</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Avec limitations</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Standard
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">14,99€</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">par mois</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Premium
                </h3>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">24,99€</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">par mois</p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Pay-as-you-go
                </h3>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">À la carte</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Selon usage</p>
              </div>
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Modalités de paiement
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p>• Paiements par carte bancaire ou virement</p>
                  <p>• Facturation mensuelle automatique</p>
                  <p>• Possibilité de facturation annuelle</p>
                  <p>• Aucune commission sur les transactions</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Politique de remboursement
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p>• Aucun remboursement sauf non-conformité avérée</p>
                  <p>• Demandes dans les 7 jours suivant facturation</p>
                  <p>• Résiliation possible à tout moment</p>
                  <p>• Services jusqu&apos;à fin de période payée</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Disponibilité et responsabilités
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Disponibilité
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="font-medium text-green-800 dark:text-green-200">Objectif 99,9%</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Disponibilité visée (indicatif)</p>
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
                  <p>• Contenu publié ou hébergé</p>
                  <p>• Respect de la législation</p>
                  <p>• Sauvegarde des données</p>
                  <p>• Sécurisation des applications</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Limitation de responsabilité
                </h3>
                <div className="space-y-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                    <p className="font-medium text-orange-800 dark:text-orange-200">Responsabilité limitée</p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Au montant effectivement payé</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                    <p className="font-medium text-blue-800 dark:text-blue-200">Assurance RC Pro</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Couverture Hiscox</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Résiliation et dispositions finales
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Résiliation
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Par l&apos;utilisateur</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Résiliation possible à tout moment depuis l&apos;espace personnel. 
                      Effet à la fin de la période de facturation en cours.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Par Uracloud</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Suspension ou résiliation en cas de violation des CGU, 
                      avec préavis de 7 jours sauf urgence.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Dispositions légales
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Modifications des CGU</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Information par email 30 jours avant l&apos;entrée en vigueur des modifications.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Droit applicable</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Droit français - Tribunaux compétents de Valenciennes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-blue-100">
                Contact et assistance
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-blue-800 dark:text-blue-200">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">contact@urahost.fr</p>
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-sm">16 rue gustave courbet<br />59300 aulnoy-lez-valenciennes</p>
                </div>
                <div>
                  <p className="font-medium">SIRET</p>
                  <p className="text-sm">925 398 075 00018</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-blue-800 dark:text-blue-200">
                  Pour plus d&apos;informations sur la protection de vos données, consultez notre 
                  <a href="/politique-de-confidentialite" className="font-medium underline hover:no-underline ml-1">
                    Politique de confidentialité
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}