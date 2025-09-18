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
  title: "Frontend Developer Portfolio | Juan Pérez",
  description:
    "Portafolio profesional de Juan Pérez - Desarrollador Frontend especializado en React, Next.js y TypeScript",
  generator: "v0.app",
  keywords: [
    "frontend",
    "developer",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Juan Pérez" }],
  openGraph: {
    title: "Juan Pérez - Frontend Developer",
    description: "Portafolio profesional de desarrollador frontend",
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
