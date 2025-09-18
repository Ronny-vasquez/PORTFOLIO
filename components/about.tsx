"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import { useSafeTranslation } from "@/hooks/use-safe-translation";

export function About() {
  const { t } = useSafeTranslation();
  
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.experience')}
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              {t('about.passion')}
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Proyectos Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Tecnologías Dominadas
                </div>
              </div>
            </div> */}
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Code className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('about.frontend.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('about.frontend.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Palette className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('about.uiux.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('about.uiux.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Zap className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {t('about.optimization.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('about.optimization.description')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
