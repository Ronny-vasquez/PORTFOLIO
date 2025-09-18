"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useSafeTranslation } from "@/hooks/use-safe-translation";

export function Hero() {
  const { t } = useSafeTranslation();
  
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8 animate-float">
            <Image
              src="/Ronny Vasquez Perfil.png"
              alt="Ronny Vasquez"
              width={200}
              height={200}
              className="mx-auto rounded-full border-4 border-primary/20 shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
            {t('hero.greeting')}{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ronny Vásquez
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <a
              href="#proyectos"
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/80 transition-colors"
            >
              {t('hero.viewProjects')}
            </a>
            <a
              href="/CV%20RONNY%20VASQUEZ%20DESARROLLADOR%20-%20FORMAL%20ESPAÑOL.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t('hero.resume')}
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            <a
              href="https://github.com/Ronny-vasquez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/ronny-vasquez-b43b26224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
