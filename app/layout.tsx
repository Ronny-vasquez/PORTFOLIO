import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Ronny Vásquez",
  description:
    "Portafolio profesional de Ronny Vásquez - Desarrollador Frontend especializado en React, Next.js y TypeScript",
  keywords: [
    "frontend",
    "developer",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Ronny Vásquez" }],
  openGraph: {
    title: "Ronny Vásquez - Frontend Developer",
    description: "Portafolio frontend",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <I18nProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </I18nProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
