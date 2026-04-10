"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, Target, Heart } from "lucide-react"

const segments = [
  {
    name: "VIP Elite",
    count: 1542,
    growth: "+12%",
    avgLTV: 450,
    engagement: 95,
    color: "bg-yellow-100 text-yellow-800",
    icon: Heart,
  },
  {
    name: "Festival Lovers",
    count: 4231,
    growth: "+8%",
    avgLTV: 280,
    engagement: 78,
    color: "bg-green-100 text-green-800",
    icon: Target,
  },
  {
    name: "Casual Fans",
    count: 5644,
    growth: "+15%",
    avgLTV: 120,
    engagement: 45,
    color: "bg-blue-100 text-blue-800",
    icon: Users,
  },
  {
    name: "New Joiners",
    count: 4003,
    growth: "+25%",
    avgLTV: 65,
    engagement: 32,
    color: "bg-purple-100 text-purple-800",
    icon: TrendingUp,
  },
]

export function FanSegments() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Fan Segment Insights</CardTitle>
          <CardDescription>
            AI-powered segmentation based on behavior, preferences, and engagement patterns
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {segments.map((segment, index) => (
          <Card key={segment.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${segment.color}`}>
                    <segment.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{segment.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{segment.count.toLocaleString()} fans</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600">
                  {segment.growth}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Avg LTV</p>
                  <p className="text-lg font-semibold">${segment.avgLTV}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-lg font-semibold">{segment.engagement}%</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">AI Insight</h3>
              <p className="text-sm text-muted-foreground">
                "Festival Lovers" segment shows highest growth potential. Consider targeted campaigns
                for outdoor events and multi-day experiences.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}