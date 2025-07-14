import { Container } from "@/components/container";

export const metadata = {
  title: "Politique de confidentialité | Urahost",
  description: "Politique de confidentialité et protection des données personnelles d'Urahost",
};

export default function PolitiqueConfidentialite() {
  return (
    <Container className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Protection et traitement de vos données personnelles
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-4">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
        
        <div className="space-y-12">
          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Collecte des données
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Données collectées
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Identification</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Nom, prénom, adresse email</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Connexion</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Adresse IP, logs, données de navigation</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Techniques</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Projets hébergés, configurations serveurs</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <h4 className="font-medium text-neutral-800 dark:text-neutral-200 mb-2">Facturation</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Informations de paiement (via prestataires)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Moyens de collecte
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Inscription sur notre plateforme</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Utilisation de nos services</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Cookies et technologies similaires</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Communications avec notre support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Utilisation des données
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Finalités du traitement
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p>• Fourniture et gestion de nos services d&apos;hébergement</p>
                  <p>• Gestion de votre compte utilisateur</p>
                  <p>• Support technique et assistance</p>
                  <p>• Facturation et gestion des paiements</p>
                  <p>• Amélioration de nos services</p>
                  <p>• Communication commerciale (avec consentement)</p>
                  <p>• Respect de nos obligations légales</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Base légale
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="font-medium text-green-800 dark:text-green-200">Exécution du contrat</p>
                    <p className="text-sm text-green-700 dark:text-green-300">Pour la fourniture de nos services</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="font-medium text-blue-800 dark:text-blue-200">Intérêt légitime</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Amélioration et sécurité</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="font-medium text-purple-800 dark:text-purple-200">Consentement</p>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Communications commerciales</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Conservation et sécurité
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Durée de conservation
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Données de compte</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">Suppression + 1 an</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Données de facturation</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">10 ans</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Logs techniques</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">12 mois max</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg">
                    <span className="text-neutral-700 dark:text-neutral-300">Données de prospection</span>
                    <span className="font-medium text-neutral-900 dark:text-neutral-100">3 ans</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Mesures de sécurité
                </h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Chiffrement des données en transit et au repos</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Contrôle d&apos;accès strict</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Surveillance et monitoring des systèmes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Formation régulière de nos équipes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Assurance RC Professionnelle (Hiscox)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h2 className="text-3xl font-bold mb-8 text-blue-900 dark:text-blue-100">
              Vos droits RGPD
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit d&apos;accès
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Obtenir une copie de vos données personnelles
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit de rectification
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Corriger vos données inexactes ou incomplètes
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit à l&apos;effacement
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Supprimer vos données dans certains cas
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit à la limitation
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Limiter le traitement de vos données
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit à la portabilité
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Récupérer vos données dans un format structuré
                </p>
              </div>
              
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-200">
                  Droit d&apos;opposition
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Vous opposer au traitement de vos données
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Exercer vos droits
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :
                </p>
                <div className="space-y-2">
                  <p><span className="font-medium">Email :</span> contact@urahost.fr</p>
                  <p><span className="font-medium">Adresse :</span> 16 rue gustave courbet, 59300 aulnoy-lez-valenciennes</p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-4">
                  Vous pouvez également déposer une réclamation auprès de la 
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 ml-1">CNIL</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}