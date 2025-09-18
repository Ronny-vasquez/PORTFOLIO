"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export function useSafeTranslation() {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    const spanishTranslations: Record<string, string> = {
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.skills": "Habilidades",
      "nav.projects": "Proyectos",
      "nav.experience": "Experiencia",
      "nav.contact": "Contacto",
      "hero.greeting": "Hola, soy",
      "hero.subtitle":
        "Desarrollador Frontend especializado en crear experiencias web excepcionales.",
      "hero.viewProjects": "Ver Proyectos",
      "hero.resume": "Resumen",
      "about.title": "Sobre Mí",
      "about.description":
        "Soy Desarrollador de Software con especialización en Frontend y desarrollo web. Poseo sólidas habilidades de liderazgo y resolución de problemas, prospero en entornos de equipo, impulsando proyectos con pensamiento crítico y creativo. mi compromiso con el aprendizaje continuo alimenta mi pasión por afrontar los desafíos tecnológicos de frente.",
      "about.experience":
        "Con más de 1 años de experiencia personal en desarrollo frontend, me especializo en tecnologías como React, Next.js y TypeScript. Mi enfoque se centra en escribir código limpio, mantenible y escalable.",
      "about.passion":
        "Me apasiona estar al día con las últimas tendencias y mejores prácticas del desarrollo web, siempre buscando formas de mejorar la experiencia del usuario.",
      "about.frontend.title": "Desarrollo Frontend",
      "about.frontend.description":
        "Especializado en React, Next.js, TypeScript y las últimas tecnologías web para crear aplicaciones modernas y eficientes.",
      "about.uiux.title": "Diseño UI/UX",
      "about.uiux.description":
        "Combino habilidades técnicas con sensibilidad de diseño para crear interfaces atractivas y funcionales que mejoran la experiencia del usuario.",
      "about.optimization.title": "Optimización",
      "about.optimization.description":
        "Enfocado en el rendimiento, accesibilidad y para garantizar que las aplicaciones sean rápidas, inclusivas y bien posicionadas.",
      "skills.title": "Habilidades",
      "skills.subtitle": "Tecnologías y herramientas que domino",
      "projects.title": "Proyectos",
      "projects.subtitle":
        "Una selección de mis trabajos más recientes que demuestran mis habilidades en desarrollo frontend y diseño de experiencias de usuario.",
      "projects.inDevelopment": "Proyectos En Desarrollo",
      "projects.otherProjects": "Otros Proyectos",
      "projects.viewMore": "Ver Más en GitHub",
      "projects.code": "Código",
      "projects.demo": "Demo",
      "experience.title": "Experiencia Profesional",
      "experience.subtitle":
        "Mi trayectoria profesional en el desarrollo frontend, desde mis inicios hasta mi posición actual como desarrollador senior.",
      "experience.customerService.title": "Atención al Cliente",
      "experience.customerService.company": "VIXICOM",
      "experience.customerService.location": "República Dominicana",
      "experience.customerService.period": "2020-2021",
      "experience.customerService.description":
        "Atender llamadas de clientes para brindar asistencia, resolver dudas, procesar solicitudes y manejar quejas o reclamaciones",
      "experience.freelance.title": "Freelance",
      "experience.freelance.company": "Editor de videos",
      "experience.freelance.location": "República Dominicana",
      "experience.freelance.period": "2023 - PRESENTE",
      "experience.freelance.description":
        "Manejo Avanzado adobe Premiere pro, Davinci resolve. Para crear contenido atractivo, narrativas visuales y adaptar proyectos a diferentes plataformas.",
      "education.title": "Educación",
      "education.subtitle":
        "Presentar mi cronograma educativo, que muestra la riqueza de conocimientos que he adquirido a partir de mis estudios y los cursos que he completado.",
      "education.softwareDevelopment.title": "Desarrollo de Software",
      "education.softwareDevelopment.institution": "ITLA",
      "education.softwareDevelopment.location": "República Dominicana",
      "education.softwareDevelopment.period": "2019 - 2025",
      "education.softwareDevelopment.description":
        "Estoy cursando un Grado Asociado en Desarrollo de Software en ITLA, con fecha de finalización en abril de 2024. Este programa ha perfeccionado mis habilidades en programación, ingeniería de software, gestión de bases de datos y desarrollo web. Gracias a mi experiencia práctica y a la resolución de problemas, he adquirido un profundo conocimiento de las herramientas y prácticas estándar de la industria.",
      "education.scrumCertificate.title":
        "Scrum Foundation Professional Certificate",
      "education.scrumCertificate.institution":
        "(Scrum Master, QA, Development)",
      "education.scrumCertificate.location": "",
      "education.scrumCertificate.period": "16 April 2022",
      "education.scrumCertificate.description":
        "He finalizado mi Grado Asociado en Desarrollo de Software en el ITLA, concluyendo en abril de 2022. Este programa ha consolidado mi dominio de las metodologías ágiles, con un enfoque particular en Scrum. A través de mi experiencia práctica y la resolución de problemas, he adquirido un profundo conocimiento de las herramientas y prácticas estándar de la industria, incluyendo la gestión de proyectos, la colaboración en equipo y la entrega continua de valor.",
      "contact.title": "Contacto",
      "contact.subtitle":
        "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Contáctame y trabajemos juntos para hacer realidad tus ideas.",
      "contact.email": "Email",
      "contact.phone": "Teléfono",
      "contact.sendMessage": "Envíame un mensaje",
      "contact.name": "Nombre",
      "contact.namePlaceholder": "Tu nombre completo",
      "contact.emailPlaceholder": "tu@email.com",
      "contact.subject": "Asunto",
      "contact.subjectPlaceholder": "¿De qué quieres hablar?",
      "contact.message": "Mensaje",
      "contact.messagePlaceholder": "Cuéntame sobre tu proyecto o idea...",
      "contact.sending": "Enviando...",
      "contact.sendMessageButton": "Enviar Mensaje",
      "contact.messageSent": "¡Mensaje enviado correctamente!",
      "contact.errorMessage": "Error al enviar el mensaje. Intenta de nuevo.",
      "contact.footer":
        "© {{year}} Ronny Vásquez. Todos los derechos reservados.",
      "common.viewProject": "Ver Proyecto",
      "common.viewCode": "Ver Código",
      "common.downloadCV": "Descargar CV",
    };
    return {
      t: (key: string) => spanishTranslations[key] || key,
      i18n,
      isClient: false,
    };
  }

  return { t, i18n, isClient };
}
