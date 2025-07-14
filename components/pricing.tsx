"use client";
import React from "react";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { CONSTANTS } from "@/constants/links";


export enum plan {
  hobby = "hobby",
  starter = "starter",
  pro = "pro",
}

export type Plan = {
  id: string;
  name: string;
  price: number | string;
  subText?: string;
  currency: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
  additionalFeatures?: string[];
  onClick: () => void;
};


export function Pricing() {
  const router = useRouter()
  const plans: Array<Plan> = [
    {
      id: plan.hobby,
      name: "Découverte",
      price: 0,
      subText: "/mois",
      currency: "€",
      features: [
        "2 sites/applications inclus",
        "Déploiement d'applications populaires (WordPress, n8n, Appwrite, Grafana, etc.)",
        "Bases de données prêtes à l'emploi (Postgres, MariaDB, MongoDB, MySQL, Redis...)",
        "Pas d'accès aux serveurs de jeux",
        "Formations gratuites incluses",
        "Hébergement rapide et sécurisé",
        "Support par email",
      ],
      buttonText: "Commencer gratuitement",
      onClick: () => {
        router.push(CONSTANTS.LOGIN_LINK)
      },
    },
    {
      id: plan.starter,
      name: "Standard",
      price: 14.99,
      subText: "/mois",
      currency: "€",
      featured: true,
      features: [
        "20 sites/applications inclus",
        "Déploiement d'applications populaires (WordPress, n8n, Appwrite, Grafana, etc.)",
        "Bases de données prêtes à l'emploi (Postgres, MariaDB, MongoDB, MySQL, Redis...)",
        "2 serveurs de jeux (bientôt disponible)",
        "4 GB RAM + 4 vCPU par serveur de jeux",
        "Jusqu'à 10 joueurs simultanés",
        "Formations gratuites incluses",
        "Hébergement rapide et sécurisé",
        "Support prioritaire",
      ],
      buttonText: "Choisir Standard",
      additionalFeatures: [],
      onClick: () => {
        router.push(CONSTANTS.LOGIN_LINK)
      },
    },
    {
      id: plan.pro,
      name: "Premium",
      price: 24.99,
      subText: "/mois",
      currency: "€",
      features: [
        "30 sites/applications inclus",
        "Déploiement d'applications populaires (WordPress, n8n, Appwrite, Grafana, etc.)",
        "Bases de données prêtes à l'emploi (Postgres, MariaDB, MongoDB, MySQL, Redis...)",
        "5 serveurs de jeux (bientôt disponible)",
        "8 GB RAM + 8 vCPU par serveur de jeux",
        "Jusqu'à 50 joueurs simultanés",
        "Mods et plugins personnalisés",
        "Formations gratuites incluses",
        "IA de génération de sites avec déploiement instantané",
        "Assistants IA avancés pour automatisation",
        "Hébergement rapide et sécurisé",
        "Support premium 7j/7",
      ],
      additionalFeatures: [],
      buttonText: "Choisir Premium",
      onClick: () => {
        router.push(CONSTANTS.LOGIN_LINK)
      },
    },
    {
      id: "pay-as-you-go",
      name: "Pay-as-you-go",
      price: "À la carte",
      subText: "",
      currency: "",
      features: [
        "Facturation uniquement selon l'usage",
        "Sites web : 3.99€/mois par site actif",
        "Serveurs de jeux : à partir de 3.99€/mois",
        "Applications : 2.99€/mois par application",
        "Bases de données : 4.99€/mois par base",
        "Formations gratuites incluses",
        "Pas de limite sur le nombre de services",
        "Support par ticket",
      ],
      buttonText: "Bientôt disponible",
      onClick: () => {
        // Disabled for now
      },
    },
  ];
  return (
    <div
      id="pricing"
      className="relative isolate bg-white dark:bg-neutral-950 w-full px-4 py-0 sm:py-20 lg:px-4 "
    >
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      ></div>
      <>
        <h2 className="pt-4 font-bold text-lg md:text-4xl text-center text-neutral-800 dark:text-neutral-100">
          Des tarifs simples, adaptés à tous
        </h2>
        <p className="max-w-md mx-auto text-base text-center text-neutral-600 dark:text-neutral-300 mt-4">
          Des offres claires pour tous vos besoins, sans surprise.
        </p>
      </>

      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-4  mt-20 ",
          "max-w-7xl mx-auto  md:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {plans.slice(0, 3).map((tier, tierIdx) => {
          return <Card plan={tier} key={tier.id} onClick={tier.onClick} />;
        })}
      </div>
      
      {/* Pay-as-you-go plan displayed horizontally */}
      <div className="max-w-7xl mx-auto mt-8">
        <HorizontalCard plan={plans[3]} onClick={plans[3].onClick} />
      </div>
    </div>
  );
}

const Card = ({ plan, onClick }: { plan: Plan; onClick: () => void }) => {
  return (
    <div
      className={cn(
        "p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800"
      )}
    >
      <div className="flex flex-col gap-4 h-full justify-start">
        <div
          className={cn(
            "p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input w-full dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]"
          )}
        >
          <div className="flex justify-between items-start ">
            <div className="flex gap-2 flex-col">
              <p
                className={cn("font-medium text-lg text-black dark:text-white")}
              >
                {plan.name}
              </p>
            </div>

            {plan.featured && (
              <div
                className={cn(
                  "font-medium text-xs px-3 py-1 rounded-full relative bg-neutral-900 dark:bg-white dark:text-black text-white"
                )}
              >
                <div className="absolute inset-x-0 bottom-0 w-3/4 mx-auto h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                Populaire
              </div>
            )}
          </div>
          <div className="mt-8 ">
            <div className="flex items-end">
              <span
                className={cn(
                  "text-lg font-bold text-neutral-500 dark:text-neutral-200"
                )}
              >
                {plan.currency}
              </span>
              <div className="flex items-start gap-2">
                <span
                  className={cn(
                    "text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800"
                  )}
                >
                  {plan?.price}
                </span>
              </div>
              <span
                className={cn(
                  "text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2"
                )}
              >
                {plan.subText}
              </span>
            </div>
          </div>
          <Button variant="gradient" className="w-full mt-10" onClick={onClick}>
            {plan.buttonText}
          </Button>
        </div>
        <div className="mt-1 p-4">
          {plan.features.map((feature, idx) => (
            <Step key={idx}>{feature}</Step>
          ))}
        </div>
        {plan.additionalFeatures && plan.additionalFeatures.length > 0 && (
          <Divider />
        )}
        <div className="p-4">
          {plan.additionalFeatures?.map((feature, idx) => (
            <Step additional key={idx}>
              {feature}
            </Step>
          ))}
        </div>
      </div>
    </div>
  );
};

const Step = ({
  children,
  additional,
}: {
  children: React.ReactNode;
  additional?: boolean;
  featured?: boolean;
}) => {
  return (
    <div className="flex items-start justify-start gap-2 my-4">
      <div
        className={cn(
          "h-4 w-4 rounded-full bg-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5",
          additional ? "bg-sky-500" : "bg-neutral-700"
        )}
      >
        <IconCheck className="h-3 w-3 [stroke-width:4px] text-neutral-300" />
      </div>
      <div className={cn("font-medium text-black text-sm dark:text-white")}>
        {children}
      </div>
    </div>
  );
};

const HorizontalCard = ({ plan, onClick }: { plan: Plan; onClick: () => void }) => {
  return (
    <div
      className={cn(
        "p-1 sm:p-4 md:p-4 rounded-3xl bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800"
      )}
    >
      <div className="flex flex-col md:flex-row gap-4 h-full justify-between items-center">
        <div
          className={cn(
            "p-4 bg-white dark:bg-neutral-800 rounded-2xl shadow-input flex-1 dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)]"
          )}
        >
          <div className="flex justify-between items-start ">
            <div className="flex gap-2 flex-col">
              <p
                className={cn("font-medium text-lg text-black dark:text-white")}
              >
                {plan.name}
              </p>
            </div>
          </div>
          <div className="mt-8 ">
            <div className="flex items-end">
              <span
                className={cn(
                  "text-lg font-bold text-neutral-500 dark:text-neutral-200"
                )}
              >
                {plan.currency}
              </span>
              <div className="flex items-start gap-2">
                <span
                  className={cn(
                    "text-3xl md:text-7xl font-bold dark:text-neutral-50 text-neutral-800"
                  )}
                >
                  {plan?.price}
                </span>
              </div>
              <span
                className={cn(
                  "text-base font-normal text-neutral-500 dark:text-neutral-200 mb-1 md:mb-2"
                )}
              >
                {plan.subText}
              </span>
            </div>
          </div>
          <Button variant="gradient" className="w-full mt-10" onClick={onClick} disabled={plan.id === "pay-as-you-go"}>
            {plan.buttonText}
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 flex-2">
          {plan.features.map((feature, idx) => (
            <Step key={idx}>{feature}</Step>
          ))}
        </div>
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="relative">
      <div className={cn("w-full h-px dark:bg-neutral-950 bg-white")} />
      <div className={cn("w-full h-px bg-neutral-200 dark:bg-neutral-800")} />
      <div
        className={cn(
          "absolute inset-0 h-5 w-5 m-auto rounded-xl dark:bg-neutral-800 bg-white shadow-[0px_-1px_0px_0px_var(--neutral-200)] dark:shadow-[0px_-1px_0px_0px_var(--neutral-700)] flex items-center justify-center"
        )}
      >
        <IconPlus
          className={cn(
            "h-3 w-3 [stroke-width:4px] dark:text-neutral-300 text-black"
          )}
        />
      </div>
    </div>
  );
};
