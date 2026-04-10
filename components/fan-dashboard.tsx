"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { MemoryVault } from "@/components/memory-vault"
import { NFTPGallery } from "@/components/nft-gallery"
import { ProactiveOffers } from "@/components/proactive-offers"
import { FanInsights } from "@/components/fan-insights"
import { Heart, Star, Gift, Award } from "lucide-react"

// Mock data
const fanData = {
  name: "Alex Chen",
  loyaltyScore: 85,
  totalMemories: 156,
  nftTickets: 12,
  offers: [
    { id: 1, title: "VIP Backstage Pass", description: "Exclusive access to meet & greet", value: "Premium" },
    { id: 2, title: "Early Bird Discount", description: "20% off next concert ticket", value: "Gold" },
  ],
}

export function FanDashboard() {
  const [activeTab, setActiveTab] = useState("vault")

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="fan" userName={fanData.name} />

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Loyalty Score</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fanData.loyaltyScore}</div>
              <Progress value={fanData.loyaltyScore} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Memories</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fanData.totalMemories}</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFT Tickets</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fanData.nftTickets}</div>
              <p className="text-xs text-muted-foreground">3 unclaimed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Offers</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{fanData.offers.length}</div>
              <p className="text-xs text-muted-foreground">Personalized for you</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="vault">Memory Vault</TabsTrigger>
            <TabsTrigger value="nfts">NFT Gallery</TabsTrigger>
            <TabsTrigger value="offers">Proactive Offers</TabsTrigger>
            <TabsTrigger value="insights">My Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="vault">
            <MemoryVault />
          </TabsContent>

          <TabsContent value="nfts">
            <NFTPGallery />
          </TabsContent>

          <TabsContent value="offers">
            <ProactiveOffers offers={fanData.offers} />
          </TabsContent>

          <TabsContent value="insights">
            <FanInsights />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}