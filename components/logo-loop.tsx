"use client"

import type React from "react"

interface Technology {
  icon: React.ReactNode
  url: string
}

interface LogoLoopProps {
  technologies: Technology[]
}

export function LogoLoop({ technologies }: LogoLoopProps) {
  // Duplicamos las tecnologías para crear el efecto infinito
  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <div className="w-full overflow-hidden bg-background/50 backdrop-blur-sm rounded-lg border">
      <div className="flex animate-loop-scroll">
        {duplicatedTechnologies.map((tech, index) => (
          <div key={index} className="flex-shrink-0 mx-6 my-8">
            <a
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200 cursor-pointer hover:scale-110 transform transition-transform block"
            >
              {tech.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
