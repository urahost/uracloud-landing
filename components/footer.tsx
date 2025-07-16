import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export function Footer() {

  const legals = [
    {
      title: "Mentions légales",
      href: "/mentions-legales",
    },
    {
      title: "Confidentialité",
      href: "/politique-de-confidentialite",
    },
    {
      title: "Conditions",
      href: "/conditions-generales",
    },
  ];

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden theme-transition">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="mt-2">
            &copy; Urahost 2025. Tous droits réservés.
          </div>
          <div className="flex flex-row gap-6">
            {legals.map((legal, idx) => (
              <Link
                key={"legal" + idx}
                className="transition-colors hover:text-neutral-800 text-neutral-600 dark:text-neutral-300"
                href={legal.href}
              >
                {legal.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        Urahost
      </p>
    </div>
  );
}
