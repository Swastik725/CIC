import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { Plus, Play, Pause, CheckCircle2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const campaigns = [
  { name: 'VIP Upgrade Campaign', type: 'NFT Upgrade', audienceSize: 1247, status: 'Active', redemptionRate: 42 },
  { name: 'Win-Back Discount', type: 'Discount Code', audienceSize: 892, status: 'Active', redemptionRate: 28 },
  { name: 'Early Access Drop', type: 'Early Access', audienceSize: 2150, status: 'Paused', redemptionRate: 15 },
  { name: 'Referral Bonus', type: 'Merch', audienceSize: 450, status: 'Completed', redemptionRate: 67 },
  { name: 'Summer Festival', type: 'Discount Code', audienceSize: 3200, status: 'Draft', redemptionRate: 0 }
];

const performanceData = [
  { day: 'Day 1', vipUpgrade: 12, winBack: 8 },
  { day: 'Day 3', vipUpgrade: 28, winBack: 15 },
  { day: 'Day 5', vipUpgrade: 45, winBack: 22 },
  { day: 'Day 7', vipUpgrade: 68, winBack: 31 },
  { day: 'Day 10', vipUpgrade: 92, winBack: 38 },
  { day: 'Day 14', vipUpgrade: 124, winBack: 48 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-[rgba(0,194,160,0.2)] text-[#00C2A0]';
    case 'Paused':
      return 'bg-[rgba(59,130,246,0.2)] text-[#3B82F6]';
    case 'Completed':
      return 'bg-[rgba(108,59,255,0.2)] text-[#9B6BFF]';
    case 'Draft':
      return 'bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.65)]';
    default:
      return 'bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.65)]';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Active':
      return <Play className="w-3 h-3" />;
    case 'Paused':
      return <Pause className="w-3 h-3" />;
    case 'Completed':
      return <CheckCircle2 className="w-3 h-3" />;
    default:
      return null;
  }
};

export function Campaigns() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
            Campaign Management
          </h1>
          <p className="text-[rgba(255,255,255,0.65)]">
            Track and optimize your reward campaigns
          </p>
        </div>
        <GlassButton variant="primary">
          <Plus className="w-4 h-4 mr-2 inline" />
          Create Campaign
        </GlassButton>
      </div>

      {/* Campaign List */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          All Campaigns
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Name</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Type</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Audience</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Status</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Redemption Rate</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-b border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                  <td className="py-4 px-4 text-[rgba(255,255,255,0.92)] font-medium">
                    {campaign.name}
                  </td>
                  <td className="py-4 px-4 text-[rgba(255,255,255,0.65)]">
                    {campaign.type}
                  </td>
                  <td className="py-4 px-4 text-right text-[rgba(255,255,255,0.92)]">
                    {campaign.audienceSize.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(campaign.status)}`}>
                      {getStatusIcon(campaign.status)}
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-16 h-2 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#6C3BFF] rounded-full"
                          style={{ width: `${campaign.redemptionRate}%` }}
                        />
                      </div>
                      <span className="text-sm text-[rgba(255,255,255,0.92)] font-medium min-w-[40px]">
                        {campaign.redemptionRate}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-sm text-[#6C3BFF] hover:text-[#9B6BFF] transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Performance Chart */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Redemption Rate Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis 
              dataKey="day" 
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
            <Line 
              type="monotone" 
              dataKey="vipUpgrade" 
              name="VIP Upgrade"
              stroke="#6C3BFF" 
              strokeWidth={3}
              dot={{ fill: '#6C3BFF', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="winBack" 
              name="Win-Back"
              stroke="#00C2A0" 
              strokeWidth={3}
              dot={{ fill: '#00C2A0', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </GlassCard>

      {/* A/B Test Results */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          A/B Test Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.04)] border-2 border-[#00C2A0]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[rgba(255,255,255,0.92)]">Version B (Winner)</h3>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(0,194,160,0.2)] text-[#00C2A0]">
                Best Performer
              </span>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.65)] mb-4">
              Early access to new event
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">Redemption Rate</span>
                <span className="text-lg font-bold text-[#00C2A0]">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">ROI</span>
                <span className="text-lg font-bold text-[#00C2A0]">3.2x</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[rgba(255,255,255,0.92)]">Version A</h3>
            </div>
            <p className="text-sm text-[rgba(255,255,255,0.65)] mb-4">
              20% discount code
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">Redemption Rate</span>
                <span className="text-lg font-bold text-[rgba(255,255,255,0.92)]">21%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[rgba(255,255,255,0.65)]">ROI</span>
                <span className="text-lg font-bold text-[rgba(255,255,255,0.92)]">1.0x</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
