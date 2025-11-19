"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-textPrimary">
              Get in Touch
            </h2>
            <p className="text-lg text-textSecondary leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-beige flex items-center justify-center text-textPrimary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary">Email</h3>
                    <p className="text-textSecondary">{portfolioData.personal.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-beige flex items-center justify-center text-textPrimary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary">Phone</h3>
                    <p className="text-textSecondary">{portfolioData.personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-beige flex items-center justify-center text-textPrimary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textPrimary">Location</h3>
                    <p className="text-textSecondary">{portfolioData.personal.location}</p>
                  </div>
                </div>
              </div>

              {portfolioData.testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-cream border-none">
                  <CardContent className="p-6">
                    <p className="text-textPrimary font-medium italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-textPrimary/10" />
                      <div>
                        <p className="text-sm font-bold text-textPrimary">{testimonial.author}</p>
                        <p className="text-xs text-textSecondary">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-textPrimary">
                          Name
                        </label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-textPrimary">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-sm font-medium text-textPrimary">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Project Inquiry" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-sm font-medium text-textPrimary">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px]" />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto mt-2">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
