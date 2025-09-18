"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { useSafeTranslation } from "@/hooks/use-safe-translation";

export function Education() {
  const { t } = useSafeTranslation();
  
  const education = [
    {
      title: t('education.softwareDevelopment.title'),
      institution: t('education.softwareDevelopment.institution'),
      location: t('education.softwareDevelopment.location'),
      period: t('education.softwareDevelopment.period'),
      description: t('education.softwareDevelopment.description'),
    },
    {
      title: t('education.scrumCertificate.title'),
      institution: t('education.scrumCertificate.institution'),
      location: t('education.scrumCertificate.location'),
      period: t('education.scrumCertificate.period'),
      status: "",
      description: t('education.scrumCertificate.description'),
    },
  ];

  return (
    <section id="educacion" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('education.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>
        <div className="relative">
          <div className="space-y-12 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {edu.title}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.period}
                          {edu.status && (
                            <>
                              <span className="mx-2">-</span>
                              <span className="font-bold">{edu.status}</span>
                            </>
                          )}
                        </div>
                        {edu.location && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </div>
                        )}
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
