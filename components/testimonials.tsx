"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "EchoVault transformed how we connect with our fans. The AI remembers everything!",
    author: "Rolling Loud Festival",
    role: "Event Organizer",
  },
  {
    quote: "Our fan engagement increased 300% with personalized, evolving rewards.",
    author: "Tomorrowland",
    role: "Marketing Director",
  },
  {
    quote: "The proactive suggestions are like having a fan whisperer on our team.",
    author: "Coachella",
    role: "Community Manager",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <blockquote className="text-lg mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}