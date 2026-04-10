"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Overview } from "@/components/overview"
import { FanSegments } from "@/components/fan-segments"
import { RewardRulesBuilder } from "@/components/reward-rules-builder"
import { AgentSuggestions } from "@/components/agent-suggestions"
import { CampaignLauncher } from "@/components/campaign-launcher"
import { TrendingUp, Users, DollarSign, Target } from "lucide-react"

// Mock data
const organizerData = {
  name: "Sarah Johnson",
  metrics: {
    totalFans: 15420,
    activeFans: 12850,
    avgLTV: 245,
    churnRisk: 12,
  },
  recentActivity: [
    { action: "New fan segment created", time: "2 minutes ago" },
    { action: "Campaign 'Summer Festival' launched", time: "1 hour ago" },
    { action: "Reward rule updated", time: "3 hours ago" },
  ],
}

export function OrganizerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Navbar userRole="organizer" userName={organizerData.name} />

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Fans</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{organizerData.metrics.totalFans.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Fans</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{organizerData.metrics.activeFans.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">83% engagement rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg LTV</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${organizerData.metrics.avgLTV}</div>
              <p className="text-xs text-muted-foreground">+8% from last quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Churn Risk</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{organizerData.metrics.churnRisk}%</div>
              <p className="text-xs text-muted-foreground">-2% from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="segments">Fan Segments</TabsTrigger>
            <TabsTrigger value="rewards">Reward Rules</TabsTrigger>
            <TabsTrigger value="agent">AI Agent</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Overview />
          </TabsContent>

          <TabsContent value="segments">
            <FanSegments />
          </TabsContent>

          <TabsContent value="rewards">
            <RewardRulesBuilder />
          </TabsContent>

          <TabsContent value="agent">
            <AgentSuggestions />
          </TabsContent>

          <TabsContent value="campaigns">
            <CampaignLauncher />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}