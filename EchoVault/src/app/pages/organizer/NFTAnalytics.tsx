import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { TrendingUp, AlertTriangle, Download, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Oct', primary: 45000, secondary: 3200 },
  { month: 'Nov', primary: 52000, secondary: 4100 },
  { month: 'Dec', primary: 48000, secondary: 5300 },
  { month: 'Jan', primary: 61000, secondary: 6800 },
  { month: 'Feb', primary: 58000, secondary: 7200 },
  { month: 'Mar', primary: 67000, secondary: 8900 },
  { month: 'Apr', primary: 72000, secondary: 12430 }
];

const topTradedTickets = [
  { event: 'Arctic Monkeys - MSG', trades: 47, avgPrice: '$285', royalties: '$3,340' },
  { event: 'The Weeknd - Barclays', trades: 38, avgPrice: '$310', royalties: '$3,562' },
  { event: 'Billie Eilish - Forum', trades: 29, avgPrice: '$265', royalties: '$2,318' },
  { event: 'Taylor Swift - MetLife', trades: 52, avgPrice: '$420', royalties: '$6,552' }
];

const fraudAlerts = [
  { wallet: '0x1234...5678', event: 'Coldplay Concert', count: 12, status: 'Flagged' },
  { wallet: '0xabcd...ef90', event: 'The Weeknd', count: 8, status: 'Under Review' }
];

export function NFTAnalytics() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
            NFT Analytics
          </h1>
          <p className="text-[rgba(255,255,255,0.65)]">
            Track blockchain performance and secondary market insights
          </p>
        </div>
        <GlassButton variant="ghost">
          <Download className="w-4 h-4 mr-2 inline" />
          Export Report
        </GlassButton>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard size="lg" className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Revenue Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis 
                dataKey="month" 
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
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
              <Line 
                type="monotone" 
                dataKey="primary" 
                name="Primary Sales"
                stroke="#6C3BFF" 
                strokeWidth={3}
                dot={{ fill: '#6C3BFF', r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="secondary" 
                name="Secondary Royalties"
                stroke="#00C2A0" 
                strokeWidth={3}
                dot={{ fill: '#00C2A0', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Royalty Earnings
          </h2>
          <div className="text-center py-8">
            <div className="mb-4">
              <DollarSign className="w-12 h-12 text-[#00C2A0] mx-auto mb-2" />
            </div>
            <div className="mb-2">
              <span className="text-4xl font-bold text-[rgba(255,255,255,0.92)]">$12,430</span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.65)] mb-6">
              Earned from resales this month
            </p>
            <div className="flex items-center justify-center gap-2 text-[#00C2A0]">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">+38.2% vs last month</span>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-[rgba(0,194,160,0.1)] border border-[rgba(0,194,160,0.2)]">
            <p className="text-xs text-[rgba(255,255,255,0.85)]">
              💡 Secondary market royalties generate passive income forever
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Top Traded Tickets */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Most Traded Tickets
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Event Name</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]"># Trades</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Avg Price</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Royalties Earned</th>
              </tr>
            </thead>
            <tbody>
              {topTradedTickets.map((ticket, index) => (
                <tr key={index} className="border-b border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                  <td className="py-4 px-4 text-[rgba(255,255,255,0.92)]">{ticket.event}</td>
                  <td className="py-4 px-4 text-right text-[rgba(255,255,255,0.92)]">{ticket.trades}</td>
                  <td className="py-4 px-4 text-right text-[rgba(255,255,255,0.92)]">{ticket.avgPrice}</td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-[#00C2A0] font-semibold">{ticket.royalties}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Fraud Alerts & NFT Upgrades */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#FF6B4A]" />
            Fraud Alerts
          </h2>
          <div className="space-y-4">
            {fraudAlerts.map((alert, index) => (
              <div key={index} className="p-4 rounded-2xl bg-[rgba(255,107,74,0.1)] border border-[rgba(255,107,74,0.2)]">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-1">
                      {alert.event}
                    </p>
                    <p className="text-xs text-[rgba(255,255,255,0.65)] mb-1">
                      Wallet: {alert.wallet}
                    </p>
                    <p className="text-xs text-[#FF6B4A]">
                      Resold {alert.count} tickets in 24 hours
                    </p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-[rgba(255,107,74,0.2)] text-[#FF6B4A]">
                    {alert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard size="lg">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Dynamic NFT Upgrades
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)]">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
                  VIP Upgrades via Hindsight
                </p>
                <span className="text-2xl font-bold text-[#6C3BFF]">342</span>
              </div>
              <p className="text-xs text-[rgba(255,255,255,0.65)]">
                Fans automatically upgraded based on loyalty
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">Bronze → Silver</span>
                <span className="text-sm text-[rgba(255,255,255,0.92)] font-semibold">156</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">Silver → Gold</span>
                <span className="text-sm text-[rgba(255,255,255,0.92)] font-semibold">124</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">Gold → Platinum</span>
                <span className="text-sm text-[rgba(255,255,255,0.92)] font-semibold">62</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
