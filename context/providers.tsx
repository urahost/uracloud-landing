"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider 
      {...props}
      // Désactiver les transitions pour éviter le lag
      disableTransitionOnChange={true}
      storageKey="theme"
      enableSystem={true}
      enableColorScheme={true}
    >
      {children}
    </NextThemesProvider>
  );
}
