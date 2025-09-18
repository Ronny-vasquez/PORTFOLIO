"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useSafeTranslation } from "@/hooks/use-safe-translation";

export function Projects() {
  const { t } = useSafeTranslation();
  
  const projects = [
    {
      title: "SIGA",
      description:
        "El proyecto es un CRM, una herramienta que busco resolver las deficiencias de las plataformas educativas del MINER (Ministerio de Educación de la República Dominicana).Mi objetivo principal es mejorar la comunicación y la gestión de las interacciones entre el ministerio, los estudiantes, los docentes y las familias.",
      image: "/1.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MotionFrame",
        "Shadcn UI",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Ronny-vasquez/SIGA",
      featured: true,
    },
    {
      title: "Pokemon-API",
      description:
        "Pequeña pokedex donde puedes hacer búsquedas de un pokemon, mostrar pokemons en una cuadrícula y finalmente ver una descripción de cada pokemon.",
      image: "/2.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      liveUrl: "https://example.com",
      githubUrl:
        "https://github.com/Ronny-vasquez/Pokemon-Api/tree/master/shadcn",
      featured: false,
    },
    {
      title: "Task Manager Pro",
      description: "Es un proyecto Simple donde puedes gestionar tus agendas.",
      image: "/3.png",
      technologies: ["React", "Css", "FireBase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Ronny-vasquez/Task-Manager-Pro",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {t('projects.inDevelopment')}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      {/* <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </a> */}
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {t('projects.code')}
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            {t('projects.otherProjects')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      asChild
                    >
                      {/* <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a> */}
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:!bg-white !hover:!text-black !bg-transparent"
          >
            <a
              href="https://github.com/Ronny-vasquez?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              {t('projects.viewMore')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
