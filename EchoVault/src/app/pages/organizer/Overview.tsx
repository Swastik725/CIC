import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { ChurnGauge } from '../../components/ChurnGauge';
import { TrendingUp, TrendingDown, Users, Award, AlertTriangle, Send, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const kpiData = [
  { label: 'Total Fans', value: '12,847', change: '+12.5%', trending: 'up' },
  { label: 'Avg Loyalty Score', value: '642', change: '+8.2%', trending: 'up' },
  { label: 'Projected Churn', value: '18.3%', change: '-3.1%', trending: 'down' }
];

const loyaltyDistribution = [
  { range: '0-200', count: 1200 },
  { range: '201-400', count: 2800 },
  { range: '401-600', count: 3500 },
  { range: '601-800', count: 3200 },
  { range: '801-1000', count: 2147 }
];

const atRiskFans = [
  { name: 'Sarah Mitchell', lastEvent: '4 months ago', churnProbability: 89 },
  { name: 'James Chen', lastEvent: '3 months ago', churnProbability: 76 },
  { name: 'Emma Davis', lastEvent: '5 months ago', churnProbability: 92 },
  { name: 'Michael Brown', lastEvent: '2 months ago', churnProbability: 68 }
];

const reflections = [
  'Hindsight noticed: 43 fans stopped attending after price increase to $89',
  'Top 10% of fans account for 67% of total revenue',
  'Fans who joined Discord have 3.2x higher retention rate'
];

export function Overview() {
  const [dateRange, setDateRange] = useState('Last 30 days');

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
            Overview
          </h1>
          <p className="text-[rgba(255,255,255,0.65)]">
            Your fan relationship health at a glance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <GlassButton variant="primary">
            <Calendar className="w-4 h-4 mr-2 inline" />
            Create Campaign
          </GlassButton>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiData.map((kpi) => (
          <GlassCard key={kpi.label} size="lg" hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[rgba(255,255,255,0.65)] mb-2">{kpi.label}</p>
                <p className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
                  {kpi.value}
                </p>
                <div className={`flex items-center gap-1 text-sm ${
                  kpi.trending === 'up' ? 'text-[#00C2A0]' : 'text-[#FF6B4A]'
                }`}>
                  {kpi.trending === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{kpi.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                kpi.trending === 'up' 
                  ? 'bg-[rgba(0,194,160,0.2)]' 
                  : 'bg-[rgba(255,107,74,0.2)]'
              }`}>
                {kpi.label.includes('Fans') && <Users className="w-6 h-6 text-[#00C2A0]" />}
                {kpi.label.includes('Loyalty') && <Award className="w-6 h-6 text-[#6C3BFF]" />}
                {kpi.label.includes('Churn') && <AlertTriangle className="w-6 h-6 text-[#FF6B4A]" />}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Churn Risk Gauge */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Churn Risk Meter
          </h2>
          <div className="flex justify-center py-4">
            <ChurnGauge percentage={18.3} size="lg" />
          </div>
        </GlassCard>

        {/* Loyalty Distribution */}
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Loyalty Score Distribution
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={loyaltyDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis 
                dataKey="range" 
                stroke="rgba(255,255,255,0.65)"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.65)"
                style={{ fontSize: '12px' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(16px)'
                }}
                labelStyle={{ color: 'rgba(255,255,255,0.92)' }}
              />
              <Bar dataKey="count" fill="#6C3BFF" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* At-Risk Fans */}
      <GlassCard size="lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)]">
            At-Risk Fans
          </h2>
          <span className="text-sm text-[rgba(255,255,255,0.65)]">
            {atRiskFans.length} fans need attention
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Last Event</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Churn Probability</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Action</th>
              </tr>
            </thead>
            <tbody>
              {atRiskFans.map((fan, index) => (
                <tr key={index} className="border-b border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                  <td className="py-4 px-4 text-[rgba(255,255,255,0.92)]">{fan.name}</td>
                  <td className="py-4 px-4 text-[rgba(255,255,255,0.65)]">{fan.lastEvent}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden max-w-[100px]">
                        <div
                          className="h-full bg-[#FF6B4A] rounded-full"
                          style={{ width: `${fan.churnProbability}%` }}
                        />
                      </div>
                      <span className="text-sm text-[rgba(255,255,255,0.92)] font-medium">
                        {fan.churnProbability}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <GlassButton variant="ghost" size="sm">
                      <Send className="w-4 h-4 mr-1 inline" />
                      Save
                    </GlassButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Hindsight Reflections */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-4">
          Recent Hindsight Reflections
        </h2>
        <div className="space-y-3">
          {reflections.map((reflection, index) => (
            <div key={index} className="p-4 rounded-2xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)]">
              <p className="text-[rgba(255,255,255,0.92)]">{reflection}</p>
            </div>
          ))}
        </div>
        <GlassButton variant="ghost" size="md" fullWidth className="mt-4">
          Send Push to At-Risk Segment
        </GlassButton>
      </GlassCard>
    </div>
  );
}
