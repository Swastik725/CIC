"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, Users, Target, Lightbulb } from "lucide-react"

const suggestions = [
  {
    id: 1,
    type: "campaign",
    title: "Launch Summer Festival Campaign",
    description: "Based on fan behavior analysis, 68% of your audience shows interest in outdoor events. Launch a targeted campaign for your upcoming summer festival.",
    impact: "High",
    confidence: 92,
    icon: TrendingUp,
  },
  {
    id: 2,
    type: "segment",
    title: "Create 'VIP Referrers' Segment",
    description: "Fans who have referred 3+ friends show 40% higher LTV. Create a dedicated segment for proactive engagement.",
    impact: "Medium",
    confidence: 87,
    icon: Users,
  },
  {
    id: 3,
    type: "reward",
    title: "Implement Milestone Rewards",
    description: "Fans reaching 50 event attendance should get exclusive backstage access. This could increase retention by 25%.",
    impact: "High",
    confidence: 89,
    icon: Target,
  },
  {
    id: 4,
    type: "timing",
    title: "Optimize Send Times",
    description: "Your fans are most active on weekends between 7-9 PM. Schedule campaigns during this window for 35% higher engagement.",
    impact: "Medium",
    confidence: 78,
    icon: Brain,
  },
]

export function AgentSuggestions() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Agent Suggestions
          </CardTitle>
          <CardDescription>
            Live recommendations powered by EchoVault's learning agent
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4">
        {suggestions.map((suggestion) => (
          <Card key={suggestion.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  suggestion.type === 'campaign' ? 'bg-blue-100 text-blue-600' :
                  suggestion.type === 'segment' ? 'bg-green-100 text-green-600' :
                  suggestion.type === 'reward' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <suggestion.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{suggestion.title}</h3>
                    <Badge variant={suggestion.impact === 'High' ? 'default' : 'secondary'}>
                      {suggestion.impact} Impact
                    </Badge>
                    <Badge variant="outline">
                      {suggestion.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{suggestion.description}</p>
                  <div className="flex gap-2">
                    <Button>Implement</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Agent Status</h3>
              <p className="text-sm text-muted-foreground">
                EchoVault AI is continuously learning from your fan interactions.
                Last updated: 2 minutes ago. Processing 1,247 new data points.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}