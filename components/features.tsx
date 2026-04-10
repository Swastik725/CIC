"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Trophy, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Memory",
    description: "Our learning agent remembers every interaction, preference, and milestone of your fans.",
  },
  {
    icon: Trophy,
    title: "Dynamic Rewards",
    description: "NFT tickets and rewards that evolve based on fan loyalty and engagement.",
  },
  {
    icon: Users,
    title: "Fan Segmentation",
    description: "Automatically categorize fans by behavior, interests, and value to your brand.",
  },
  {
    icon: Zap,
    title: "Proactive Engagement",
    description: "AI suggests personalized offers and communications at the perfect moment.",
  },
]

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionize Fan Relationships
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Harness the power of AI to create unforgettable experiences and build lifelong fan loyalty.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}