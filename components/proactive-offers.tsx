"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Clock, Star } from "lucide-react"

interface Offer {
  id: number
  title: string
  description: string
  value: string
}

interface ProactiveOffersProps {
  offers: Offer[]
}

export function ProactiveOffers({ offers }: ProactiveOffersProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Proactive Offers
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            AI-powered personalized offers based on your fan journey
          </p>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{offer.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {offer.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {offer.value}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="h-4 w-4" />
                  Expires in 24 hours
                </div>
                <Button className="w-full">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">AI Insight</h3>
              <p className="text-sm text-muted-foreground">
                Based on your 6-month history, you're most likely to engage with exclusive experiences.
                More personalized offers coming soon!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}