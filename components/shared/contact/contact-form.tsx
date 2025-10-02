"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/components/shared/i18n-provider";

export function ContactForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "less-25k",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row md:pt-20 pt-15">
      {/* Left side - Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 flex items-center"
      >
        <div className="w-full max-w-xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t("contact_headline")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-primary-foreground/80 mb-8 leading-relaxed"
          >
            {t("contact_sub")}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* First name and Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2">
                  {t("label_first_name")}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-2">
                  {t("label_last_name")}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                {t("label_email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm mb-2">
                {t("label_company")}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="phone" className="block text-sm">
                  {t("label_phone")}
                </label>
                <span className="text-sm text-muted-foreground">
                  {t("optional")}
                </span>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="message" className="block text-sm">
                  {t("help_question")}
                </label>
                <span className="text-sm text-muted-foreground">
                  {t("max_chars")}
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 rounded-lg transition-colors"
            >
              {t("send_message")}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-screen"
      >
        <Image
          src="/img/Shpia/1.jpg"
          alt={t("contact_image_alt")}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
