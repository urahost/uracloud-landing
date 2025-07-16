import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Feedback } from "@/components/feedback";
import { ThemeProvider } from "@/context/providers";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urahost | Hébergement d'applications en 1 clic",
  description:
    "Urahost permet à tous de déployer facilement des applications et bases de données populaires en un clic. Simple, rapide, sans complexité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased dark:bg-black bg-white", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={true}
          storageKey="urahost-theme"
        >
          <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col">
            <Navbar />
            <main className="flex-1 w-full max-w-full">{children}</main>
            <Toaster />
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
