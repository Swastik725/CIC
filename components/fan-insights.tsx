"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, TrendingUp, Calendar, Music } from "lucide-react"

const insights = [
  {
    category: "Music Preferences",
    items: [
      "Prefers indie rock and electronic music",
      "Attends 3-4 concerts per quarter",
      "Loves festival atmospheres",
    ],
  },
  {
    category: "Engagement Patterns",
    items: [
      "Most active during weekends",
      "Responds well to exclusive offers",
      "Shares experiences on social media",
    ],
  },
  {
    category: "Loyalty Milestones",
    items: [
      "First concert: 6 months ago",
      "Became VIP member: 4 months ago",
      "Referred 2 friends: 2 months ago",
    ],
  },
]

export function FanInsights() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            What EchoVault Remembers About Me
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            AI-powered insights from your 6-month fan journey
          </p>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Music className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Events Attended</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">+45%</p>
                <p className="text-sm text-muted-foreground">Engagement Growth</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Calendar className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-sm text-muted-foreground">Months Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {insights.map((insight, index) => (
              <AccordionItem key={insight.category} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{insight.category}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 mt-4">
                    {insight.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}