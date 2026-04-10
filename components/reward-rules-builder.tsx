"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Settings, Trash2 } from "lucide-react"

interface RewardRule {
  id: string
  name: string
  trigger: string
  condition: string
  reward: string
  active: boolean
}

const initialRules: RewardRule[] = [
  {
    id: "1",
    name: "VIP Upgrade",
    trigger: "loyalty_score",
    condition: "reaches 80",
    reward: "VIP Badge + 20% discount",
    active: true,
  },
  {
    id: "2",
    name: "Referral Bonus",
    trigger: "referral_count",
    condition: "reaches 3",
    reward: "Free concert ticket",
    active: true,
  },
]

export function RewardRulesBuilder() {
  const [rules, setRules] = useState<RewardRule[]>(initialRules)
  const [isAddingRule, setIsAddingRule] = useState(false)
  const [newRule, setNewRule] = useState<Partial<RewardRule>>({
    name: "",
    trigger: "",
    condition: "",
    reward: "",
  })

  const addRule = () => {
    if (newRule.name && newRule.trigger && newRule.condition && newRule.reward) {
      const rule: RewardRule = {
        id: Date.now().toString(),
        name: newRule.name,
        trigger: newRule.trigger,
        condition: newRule.condition,
        reward: newRule.reward,
        active: true,
      }
      setRules([...rules, rule])
      setNewRule({ name: "", trigger: "", condition: "", reward: "" })
      setIsAddingRule(false)
    }
  }

  const toggleRule = (id: string) => {
    setRules(rules.map(rule =>
      rule.id === id ? { ...rule, active: !rule.active } : rule
    ))
  }

  const deleteRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Reward Rules Builder
          </CardTitle>
          <CardDescription>
            Create automated reward rules based on fan behavior and milestones
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => setIsAddingRule(true)}
            className="mb-4"
            disabled={isAddingRule}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Rule
          </Button>

          {isAddingRule && (
            <Card className="mb-4 border-dashed">
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="name">Rule Name</Label>
                    <Input
                      id="name"
                      value={newRule.name}
                      onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                      placeholder="e.g., VIP Upgrade"
                    />
                  </div>
                  <div>
                    <Label htmlFor="trigger">Trigger Event</Label>
                    <Select value={newRule.trigger} onValueChange={(value) => setNewRule({ ...newRule, trigger: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trigger" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loyalty_score">Loyalty Score</SelectItem>
                        <SelectItem value="event_attendance">Event Attendance</SelectItem>
                        <SelectItem value="referral_count">Referral Count</SelectItem>
                        <SelectItem value="social_shares">Social Shares</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Input
                      id="condition"
                      value={newRule.condition}
                      onChange={(e) => setNewRule({ ...newRule, condition: e.target.value })}
                      placeholder="e.g., reaches 80"
                    />
                  </div>
                  <div>
                    <Label htmlFor="reward">Reward</Label>
                    <Input
                      id="reward"
                      value={newRule.reward}
                      onChange={(e) => setNewRule({ ...newRule, reward: e.target.value })}
                      placeholder="e.g., VIP Badge + 20% discount"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={addRule}>Add Rule</Button>
                  <Button variant="outline" onClick={() => setIsAddingRule(false)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            {rules.map((rule) => (
              <Card key={rule.id} className={`transition-opacity ${!rule.active ? 'opacity-50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{rule.name}</h3>
                        <Badge variant={rule.active ? "default" : "secondary"}>
                          {rule.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        When <strong>{rule.trigger.replace('_', ' ')}</strong> {rule.condition},
                        reward: <strong>{rule.reward}</strong>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleRule(rule.id)}
                      >
                        {rule.active ? "Deactivate" : "Activate"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteRule(rule.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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