"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { useSafeTranslation } from "@/hooks/use-safe-translation";

export function Experience() {
  const { t } = useSafeTranslation();
  
  const experiences = [
    {
      title: t('experience.customerService.title'),
      company: t('experience.customerService.company'),
      location: t('experience.customerService.location'),
      period: t('experience.customerService.period'),
      description: t('experience.customerService.description'),
      achievements: [
        "Mejoré el rendimiento de la aplicación principal en un 40%",
        "Implementé un sistema de design system que redujo el tiempo de desarrollo en 30%",
        "Mentoricé a 3 desarrolladores junior en mejores prácticas de React",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
    {
      title: t('experience.freelance.title'),
      company: t('experience.freelance.company'),
      location: t('experience.freelance.location'),
      period: t('experience.freelance.period'),
      description: t('experience.freelance.description'),
      achievements: [
        "Desarrollé 15+ componentes reutilizables para la librería de la empresa",
        "Implementé pruebas automatizadas que aumentaron la cobertura al 85%",
        "Optimicé el bundle de JavaScript reduciendo el tamaño en 25%",
      ],
      technologies: ["React", "JavaScript", "Sass", "Jest", "Webpack"],
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  <Card className="max-w-2xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            {experience.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        {/* <h4 className="text-sm font-semibold text-foreground mb-2">
                          Logros principales:
                        </h4> */}
                        {/* <ul className="space-y-1">
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="text-sm text-muted-foreground flex items-start"
                              >
                                <span className="text-primary mr-2 mt-1">
                                  •
                                </span>
                                {achievement}
                              </li>
                            )
                          )}
                        </ul> */}
                      </div>

                      <div>
                        {/* <h4 className="text-sm font-semibold text-foreground mb-2">
                          Tecnologías utilizadas:
                        </h4> */}
                        {/* <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
