"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LogoLoop } from "@/components/logo-loop";
import { useSafeTranslation } from "@/hooks/use-safe-translation";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiFramer,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
  SiSass,
  SiMui,
  SiShadcnui,
  SiAstro,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { url } from "inspector";

export function Skills() {
  const { t } = useSafeTranslation();
  
  const technologies = [
    { icon: <SiReact className="w-12 h-12" />, url: "https://react.dev" },
    { icon: <SiNextdotjs className="w-12 h-12" />, url: "https://nextjs.org" },
    {
      icon: <SiTypescript className="w-12 h-12" />,
      url: "https://www.typescriptlang.org",
    },
    {
      icon: <SiJavascript className="w-12 h-12" />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <SiTailwindcss className="w-12 h-12" />,
      url: "https://tailwindcss.com",
    },
    { icon: <SiNodedotjs className="w-12 h-12" />, url: "https://nodejs.org" },
    { icon: <SiHtml5 className="w-12 h-12" />, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { icon: <SiCss3 className="w-12 h-12" />, url: "https://developer.mozilla.org/es/docs/Web/HTML" },
    { icon: <SiGit className="w-12 h-12" />, url: "https://git-scm.com" },
    { icon: <SiFigma className="w-12 h-12" />, url: "https://www.figma.com" },
    {
      icon: <SiFramer className="w-12 h-12" />,
      url: "https://www.framer.com/motion",
    },
    {
      icon: <SiShadcnui className="w-12 h-12" />,
      url: "https://ui.shadcn.com/",
    },
    {
      icon: <SiAstro className="w-12 h-12" />,
      url: "https://astro.build/",
    },
    {
      icon: <SiCypress className="w-12 h-12" />,
      url: "https://www.cypress.io",
    },
    { icon: <SiSass className="w-12 h-12" />, url: "https://sass-lang.com" },
    { icon: <SiMui className="w-12 h-12" />, url: "https://mui.com" },
  ];

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-4xl font-bold text-foreground mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-2xl  text-muted-foreground max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            {/* <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Tecnologías que Utilizo</h3> */}
            <LogoLoop technologies={technologies} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
