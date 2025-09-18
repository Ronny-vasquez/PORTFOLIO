"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { useSafeTranslation } from "@/hooks/use-safe-translation";

export function Contact() {
  const { t } = useSafeTranslation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(result.error || t('contact.errorMessage'));
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert(t('contact.errorMessage'));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact.email')}</h3>
                    <p className="text-muted-foreground">
                      Alexanderbonifacio8@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact.phone')}</h3>
                    <p className="text-muted-foreground">(829-257-1129)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Ronny-vasquez"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ronny-vasquez-b43b26224/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:alexanderbonifacio8@gmail.com"
                className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  {t('contact.sendMessage')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {sent ? (
                  <div className="text-green-500 text-center font-semibold py-8">
                    {t('contact.messageSent')}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          {t('contact.name')} *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.namePlaceholder')}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          {t('contact.email')} *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.emailPlaceholder')}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t('contact.subject')} *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t('contact.subjectPlaceholder')}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        {t('contact.message')} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.messagePlaceholder')}
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={loading}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {loading ? t('contact.sending') : t('contact.sendMessageButton')}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            {t('contact.footer', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </section>
  );
}
