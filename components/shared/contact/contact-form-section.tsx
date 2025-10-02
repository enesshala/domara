"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function ContactFormSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedSubject, setSelectedSubject] = useState("general")

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-[#2d1810] rounded-2xl p-10 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-2xl font-light mb-2">Contact Information</h2>
              <p className="text-white/60 text-sm mb-12">Say something to start a live chat!</p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <Phone className="w-5 h-5 text-[#c9a961]" />
                  <span className="text-sm">+1012 3456 789</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <Mail className="w-5 h-5 text-[#c9a961]" />
                  <span className="text-sm">demo@gmail.com</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <MapPin className="w-5 h-5 text-[#c9a961] mt-1" />
                  <span className="text-sm leading-relaxed">
                    132 Dartmouth Street Boston,
                    <br />
                    Massachusetts 02156 United States
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex gap-4 mt-16"
              >
                {["twitter", "instagram", "discord"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/60 rounded-full" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Decorative circles */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 translate-y-16" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-light">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-light">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-light">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Choi"
                className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-light">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 012 3456 789"
                className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-sm font-light">Select Subject?</Label>
              <RadioGroup value={selectedSubject} onValueChange={setSelectedSubject} className="flex flex-wrap gap-4">
                {["General Inquiry", "General Inquiry", "General Inquiry", "General Inquiry"].map((subject, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem value={`general-${i}`} id={`subject-${i}`} />
                    <Label htmlFor={`subject-${i}`} className="text-sm font-light cursor-pointer">
                      {subject}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-light">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                rows={6}
                className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-foreground resize-none"
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex justify-end">
              <Button size="lg" className="bg-[#2d1810] hover:bg-[#2d1810]/90 text-white px-12">
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
