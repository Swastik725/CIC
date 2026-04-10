"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const fanGrowthData = [
  { month: 'Jan', fans: 12000 },
  { month: 'Feb', fans: 12500 },
  { month: 'Mar', fans: 13200 },
  { month: 'Apr', fans: 13800 },
  { month: 'May', fans: 14500 },
  { month: 'Jun', fans: 15420 },
]

const segmentData = [
  { name: 'VIP', value: 1542, color: '#F5C26B' },
  { name: 'Regular', value: 8234, color: '#0F766E' },
  { name: 'New', value: 5644, color: '#FB923C' },
]

export function Overview() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Fan Growth</CardTitle>
            <CardDescription>Monthly fan acquisition over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={fanGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="fans"
                  stroke="#F5C26B"
                  strokeWidth={2}
                  dot={{ fill: '#F5C26B' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fan Segments</CardTitle>
            <CardDescription>Distribution of fan types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {segmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions and updates from your fan community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New fan segment 'Festival Lovers' created", time: "2 minutes ago", type: "segment" },
              { action: "Campaign 'Summer Festival 2024' launched successfully", time: "1 hour ago", type: "campaign" },
              { action: "AI agent suggested 15 new reward opportunities", time: "3 hours ago", type: "ai" },
              { action: "Fan churn risk decreased by 2%", time: "5 hours ago", type: "metric" },
              { action: "New VIP member milestone reached", time: "1 day ago", type: "milestone" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
                <div className={`px-2 py-1 rounded text-xs ${
                  activity.type === 'segment' ? 'bg-blue-100 text-blue-800' :
                  activity.type === 'campaign' ? 'bg-green-100 text-green-800' :
                  activity.type === 'ai' ? 'bg-purple-100 text-purple-800' :
                  activity.type === 'metric' ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {activity.type}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}