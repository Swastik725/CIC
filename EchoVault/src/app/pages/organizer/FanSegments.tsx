import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { Plus, X, Download, Zap } from 'lucide-react';

interface Condition {
  id: string;
  field: string;
  operator: string;
  value: string;
}

const segments = [
  { name: 'VIP Fans', size: 1247, loyalty: 850, spend: 450, churn: 8 },
  { name: 'At Risk', size: 892, loyalty: 320, spend: 120, churn: 78 },
  { name: 'New Fans', size: 2150, loyalty: 180, spend: 65, churn: 35 }
];

export function FanSegments() {
  const [conditions, setConditions] = useState<Condition[]>([
    { id: '1', field: 'loyalty_score', operator: 'greater_than', value: '750' }
  ]);
  const [audienceSize, setAudienceSize] = useState(1247);

  const addCondition = () => {
    setConditions([
      ...conditions,
      { id: Date.now().toString(), field: 'loyalty_score', operator: 'greater_than', value: '' }
    ]);
  };

  const removeCondition = (id: string) => {
    setConditions(conditions.filter(c => c.id !== id));
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
          Fan Segmentation
        </h1>
        <p className="text-[rgba(255,255,255,0.65)]">
          Build and analyze custom fan segments
        </p>
      </div>

      {/* Filter Builder */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Build Segment
        </h2>
        
        <div className="space-y-4 mb-6">
          {conditions.map((condition, index) => (
            <div key={condition.id} className="flex items-center gap-3">
              {index > 0 && (
                <span className="text-sm text-[rgba(255,255,255,0.65)] font-semibold">AND</span>
              )}
              <div className="flex-1 flex items-center gap-3">
                <select
                  value={condition.field}
                  onChange={(e) => {
                    const newConditions = [...conditions];
                    newConditions[index].field = e.target.value;
                    setConditions(newConditions);
                  }}
                  className="flex-1 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                >
                  <option value="loyalty_score">Loyalty Score</option>
                  <option value="last_event">Last Event</option>
                  <option value="merch_spend">Merch Spend</option>
                  <option value="attendance_count">Attendance Count</option>
                  <option value="social_engagement">Social Engagement</option>
                </select>

                <select
                  value={condition.operator}
                  onChange={(e) => {
                    const newConditions = [...conditions];
                    newConditions[index].operator = e.target.value;
                    setConditions(newConditions);
                  }}
                  className="flex-1 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                >
                  <option value="greater_than">is greater than</option>
                  <option value="less_than">is less than</option>
                  <option value="equals">equals</option>
                  <option value="contains">contains</option>
                </select>

                <input
                  type="text"
                  value={condition.value}
                  onChange={(e) => {
                    const newConditions = [...conditions];
                    newConditions[index].value = e.target.value;
                    setConditions(newConditions);
                  }}
                  placeholder="Value"
                  className="flex-1 px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                />

                <button
                  onClick={() => removeCondition(condition.id)}
                  className="p-3 rounded-xl bg-[rgba(255,107,74,0.1)] hover:bg-[rgba(255,107,74,0.2)] text-[#FF6B4A] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <GlassButton variant="ghost" onClick={addCondition}>
            <Plus className="w-4 h-4 mr-2 inline" />
            Add Condition
          </GlassButton>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-[rgba(255,255,255,0.65)]">Audience Size</p>
              <p className="text-2xl font-bold text-[rgba(255,255,255,0.92)]">
                {audienceSize.toLocaleString()} fans
              </p>
            </div>
            <GlassButton variant="primary">
              Save Segment
            </GlassButton>
          </div>
        </div>
      </GlassCard>

      {/* Saved Segments */}
      <GlassCard size="lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)]">
            Saved Segments
          </h2>
          <GlassButton variant="ghost" size="sm">
            <Download className="w-4 h-4 mr-2 inline" />
            Export CSV
          </GlassButton>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.08)]">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Segment</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Size</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Avg Loyalty</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Avg Spend</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Churn %</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-[rgba(255,255,255,0.65)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {segments.map((segment, index) => (
                <tr key={index} className="border-b border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                  <td className="py-4 px-4 text-[rgba(255,255,255,0.92)] font-medium">{segment.name}</td>
                  <td className="py-4 px-4 text-right text-[rgba(255,255,255,0.92)]">
                    {segment.size.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-right text-[rgba(255,255,255,0.92)]">
                    {segment.loyalty}
                  </td>
                  <td className="py-4 px-4 text-right text-[rgba(255,255,255,0.92)]">
                    ${segment.spend}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      segment.churn < 20 ? 'bg-[rgba(0,194,160,0.2)] text-[#00C2A0]' :
                      segment.churn < 50 ? 'bg-[rgba(108,59,255,0.2)] text-[#9B6BFF]' :
                      'bg-[rgba(255,107,74,0.2)] text-[#FF6B4A]'
                    }`}>
                      {segment.churn}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <GlassButton variant="ghost" size="sm">
                      <Zap className="w-4 h-4 mr-1 inline" />
                      Campaign
                    </GlassButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Comparison */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Segment Comparison
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {segments.map((segment) => (
            <div key={segment.name} className="p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
              <h3 className="font-semibold text-[rgba(255,255,255,0.92)] mb-4">{segment.name}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[rgba(255,255,255,0.65)] mb-1">Loyalty Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#6C3BFF] rounded-full"
                        style={{ width: `${(segment.loyalty / 1000) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-[rgba(255,255,255,0.92)] font-medium min-w-[40px] text-right">
                      {segment.loyalty}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[rgba(255,255,255,0.65)] mb-1">Avg Spend</p>
                  <p className="text-lg font-semibold text-[rgba(255,255,255,0.92)]">${segment.spend}</p>
                </div>
                <div>
                  <p className="text-xs text-[rgba(255,255,255,0.65)] mb-1">Churn Risk</p>
                  <p className={`text-lg font-semibold ${
                    segment.churn < 20 ? 'text-[#00C2A0]' :
                    segment.churn < 50 ? 'text-[#6C3BFF]' :
                    'text-[#FF6B4A]'
                  }`}>
                    {segment.churn}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
