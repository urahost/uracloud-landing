import { Container } from "@/components/container";

export const metadata = {
  title: "Mentions légales | Urahost",
  description: "Mentions légales et informations légales d'Urahost",
};

export default function MentionsLegales() {
  return (
    <Container className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Mentions légales
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Informations légales et obligations réglementaires d&apos;Urahost
          </p>
        </div>
        
        <div className="space-y-12">
          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Informations légales
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Éditeur du site
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Raison sociale :</span> Bourez Bastien</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Forme juridique :</span> Microentreprise</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">SIRET :</span> 925 398 075 00018</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">SIREN :</span> 925 398 075</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">N° TVA :</span> FR14925398075</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Contact
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Adresse :</span><br />16 rue gustave courbet<br />59300 aulnoy-lez-valenciennes</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Email :</span> contact@urahost.fr</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Téléphone :</span> 03 74 01 41 49</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Direction
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Directeur :</span> Bourez Bastien</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Email :</span> contact@urahost.fr</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Hébergement
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Hébergeur :</span> Vercel Inc.</p>
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">Localisation :</span> États-Unis</p>
                  <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">Site officiel</a></p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                  Assurance
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <p><span className="font-medium text-neutral-800 dark:text-neutral-200">RC Pro :</span> Hiscox</p>
                  <p className="text-sm">Couverture des activités d&apos;hébergement et services numériques</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700 pb-4">
              Dispositions légales
            </h2>
            
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
          </section>
        </div>
      </div>
    </Container>
  );
}