"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import { useI18n } from "@/components/shared/i18n-provider";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    const { t } = useI18n();

    const formSchema = useMemo(
        () =>
            z.object({
                firstName: z
                    .string()
                    .min(
                        1,
                        t?.("First name is required") ||
                            "First name is required"
                    ),
                lastName: z
                    .string()
                    .min(
                        1,
                        t?.("Last name is required") || "Last name is required"
                    ),
                email: z
                    .string()
                    .email(
                        t?.("Invalid email address") || "Invalid email address"
                    ),
                company: z.string().optional().or(z.literal("")),
                phone: z.string().optional().or(z.literal("")),
                message: z
                    .string()
                    .min(1, t?.("Message is required") || "Message is required")
                    .max(
                        500,
                        t?.("Message must be at most 500 characters") ||
                            "Message must be at most 500 characters"
                    ),
            }),
        [t]
    );

    type ContactFormValues = z.infer<typeof formSchema>;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (values: ContactFormValues) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                const errorMessage =
                    (data && data.error) ||
                    t?.("contact_error") ||
                    "Failed to send message.";
                toast.error(errorMessage);
                return;
            }

            toast.success(
                t?.("Message sent successfully.") ||
                    "Message sent successfully."
            );
            reset();
        } catch {
            toast.error(
                t?.("Failed to send message.") || "Failed to send message."
            );
        }
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
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        {/* First name and Last name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label
                                    htmlFor="firstName"
                                    className="mb-2 block"
                                >
                                    {t("label_first_name")}
                                </Label>
                                <Input
                                    id="firstName"
                                    aria-invalid={!!errors.firstName}
                                    {...register("firstName")}
                                />
                                {errors.firstName?.message ? (
                                    <p className="text-sm text-destructive mt-1">
                                        {errors.firstName.message as string}
                                    </p>
                                ) : null}
                            </div>
                            <div>
                                <Label
                                    htmlFor="lastName"
                                    className="mb-2 block"
                                >
                                    {t("label_last_name")}
                                </Label>
                                <Input
                                    id="lastName"
                                    aria-invalid={!!errors.lastName}
                                    {...register("lastName")}
                                />
                                {errors.lastName?.message ? (
                                    <p className="text-sm text-destructive mt-1">
                                        {errors.lastName.message as string}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email" className="mb-2 block">
                                {t("label_email")}
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                aria-invalid={!!errors.email}
                                {...register("email")}
                            />
                            {errors.email?.message ? (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.email.message as string}
                                </p>
                            ) : null}
                        </div>

                        {/* Company */}
                        <div>
                            <Label htmlFor="company" className="mb-2 block">
                                {t("label_company")}
                            </Label>
                            <Input
                                id="company"
                                aria-invalid={!!errors.company}
                                {...register("company")}
                            />
                            {errors.company?.message ? (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.company.message as string}
                                </p>
                            ) : null}
                        </div>

                        {/* Phone */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <Label
                                    htmlFor="phone"
                                    className="block text-sm"
                                >
                                    {t("label_phone")}
                                </Label>
                                <span className="text-sm text-muted-foreground">
                                    {t("optional")}
                                </span>
                            </div>
                            <Input
                                id="phone"
                                type="tel"
                                aria-invalid={!!errors.phone}
                                {...register("phone")}
                            />
                            {errors.phone?.message ? (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.phone.message as string}
                                </p>
                            ) : null}
                        </div>

                        {/* Message */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <Label
                                    htmlFor="message"
                                    className="block text-sm"
                                >
                                    {t("help_question")}
                                </Label>
                                <span className="text-sm text-muted-foreground">
                                    {t("max_chars")}
                                </span>
                            </div>
                            <Textarea
                                id="message"
                                aria-invalid={!!errors.message}
                                maxLength={500}
                                rows={4}
                                {...register("message")}
                            />
                            {errors.message?.message ? (
                                <p className="text-sm text-destructive mt-1">
                                    {errors.message.message as string}
                                </p>
                            ) : null}
                        </div>

                        {/* Submit button */}
                        <Button
                            asChild
                            disabled={isSubmitting}
                            className="w-full"
                            variant="secondary"
                        >
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting
                                    ? t?.("sending") || "Sending..."
                                    : t("send_message")}
                            </motion.button>
                        </Button>
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
