"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Rocket, Calendar, Target, Users } from "lucide-react"

const recentCampaigns = [
  {
    name: "Summer Festival 2024",
    status: "Active",
    reach: "12,450 fans",
    engagement: "23%",
    launched: "2 days ago",
  },
  {
    name: "VIP Early Access",
    status: "Completed",
    reach: "8,230 fans",
    engagement: "31%",
    launched: "1 week ago",
  },
  {
    name: "Album Release",
    status: "Scheduled",
    reach: "15,670 fans",
    engagement: "N/A",
    launched: "In 3 days",
  },
]

export function CampaignLauncher() {
  const { toast } = useToast()
  const [isCreating, setIsCreating] = useState(false)
  const [campaign, setCampaign] = useState({
    name: "",
    description: "",
    targetSegment: "",
    goal: "",
    launchDate: "",
  })

  const launchCampaign = () => {
    if (!campaign.name || !campaign.targetSegment) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Simulate launch
    toast({
      title: "Campaign Launched! 🚀",
      description: `"${campaign.name}" has been launched successfully.`,
    })

    setCampaign({
      name: "",
      description: "",
      targetSegment: "",
      goal: "",
      launchDate: "",
    })
    setIsCreating(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Campaign Launcher
          </CardTitle>
          <CardDescription>
            Create and launch targeted campaigns to engage your fan community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => setIsCreating(true)}
            className="mb-6"
            disabled={isCreating}
          >
            <Rocket className="mr-2 h-4 w-4" />
            Launch New Campaign
          </Button>

          {isCreating && (
            <Card className="mb-6 border-dashed">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="col-span-2">
                    <Label htmlFor="name">Campaign Name *</Label>
                    <Input
                      id="name"
                      value={campaign.name}
                      onChange={(e) => setCampaign({ ...campaign, name: e.target.value })}
                      placeholder="e.g., Summer Festival 2024"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={campaign.description}
                      onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
                      placeholder="Describe your campaign goals and messaging..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="segment">Target Segment *</Label>
                    <Select value={campaign.targetSegment} onValueChange={(value) => setCampaign({ ...campaign, targetSegment: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select segment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Fans</SelectItem>
                        <SelectItem value="vip">VIP Elite</SelectItem>
                        <SelectItem value="festival">Festival Lovers</SelectItem>
                        <SelectItem value="casual">Casual Fans</SelectItem>
                        <SelectItem value="new">New Joiners</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="goal">Campaign Goal</Label>
                    <Select value={campaign.goal} onValueChange={(value) => setCampaign({ ...campaign, goal: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="engagement">Increase Engagement</SelectItem>
                        <SelectItem value="sales">Drive Sales</SelectItem>
                        <SelectItem value="retention">Improve Retention</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Launch Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={campaign.launchDate}
                      onChange={(e) => setCampaign({ ...campaign, launchDate: e.target.value })}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={launchCampaign}>
                    <Rocket className="mr-2 h-4 w-4" />
                    Launch Campaign
                  </Button>
                  <Button variant="outline" onClick={() => setIsCreating(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Recent Campaigns</h3>
            {recentCampaigns.map((camp, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{camp.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {camp.reach}
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          {camp.engagement} engagement
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {camp.launched}
                        </span>
                      </div>
                    </div>
                    <Badge variant={
                      camp.status === 'Active' ? 'default' :
                      camp.status === 'Completed' ? 'secondary' :
                      'outline'
                    }>
                      {camp.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}