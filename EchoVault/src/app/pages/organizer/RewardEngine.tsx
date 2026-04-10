import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { Plus, X, Calendar, DollarSign } from 'lucide-react';

interface Rule {
  id: string;
  condition: {
    field: string;
    operator: string;
    value: string;
  };
  reward: {
    type: string;
    value: string;
  };
}

const conditionFields = [
  'Attendance Count (last 3 months)',
  'Attendance Count (last 6 months)',
  'Attendance Count (last 12 months)',
  'Total Merch Spend',
  'Social Engagement Score',
  'Referrals Made',
  'Churn Risk Score'
];

const rewardTypes = [
  'NFT Upgrade (Bronze→Silver→Gold→Platinum)',
  'Early Access Code',
  'Discount Code (% off)',
  'Discount Code ($ off)',
  'Physical Merch',
  'Backstage Pass'
];

export function RewardEngine() {
  const [rules, setRules] = useState<Rule[]>([
    {
      id: '1',
      condition: { field: conditionFields[1], operator: 'greater_than', value: '3' },
      reward: { type: rewardTypes[0], value: 'Silver' }
    }
  ]);
  const [qualifyingFans, setQualifyingFans] = useState(1247);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const addRule = () => {
    setRules([
      ...rules,
      {
        id: Date.now().toString(),
        condition: { field: conditionFields[0], operator: 'greater_than', value: '' },
        reward: { type: rewardTypes[0], value: '' }
      }
    ]);
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(r => r.id !== id));
  };

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
          Reward Engine
        </h1>
        <p className="text-[rgba(255,255,255,0.65)]">
          Create automated reward rules to drive fan engagement
        </p>
      </div>

      {/* Rule Builder */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Build Reward Rules
        </h2>

        <div className="space-y-6">
          {rules.map((rule, index) => (
            <div key={rule.id} className="p-6 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-4">
                  {/* IF Section */}
                  <div>
                    <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-3">
                      IF
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <select
                        value={rule.condition.field}
                        onChange={(e) => {
                          const newRules = [...rules];
                          newRules[index].condition.field = e.target.value;
                          setRules(newRules);
                        }}
                        className="px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                      >
                        {conditionFields.map((field) => (
                          <option key={field} value={field}>{field}</option>
                        ))}
                      </select>

                      <select
                        value={rule.condition.operator}
                        onChange={(e) => {
                          const newRules = [...rules];
                          newRules[index].condition.operator = e.target.value;
                          setRules(newRules);
                        }}
                        className="px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                      >
                        <option value="greater_than">is greater than</option>
                        <option value="less_than">is less than</option>
                        <option value="equals">equals</option>
                      </select>

                      <input
                        type="text"
                        value={rule.condition.value}
                        onChange={(e) => {
                          const newRules = [...rules];
                          newRules[index].condition.value = e.target.value;
                          setRules(newRules);
                        }}
                        placeholder="Value"
                        className="px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                      />
                    </div>
                  </div>

                  {/* THEN Section */}
                  <div>
                    <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-3">
                      THEN
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        value={rule.reward.type}
                        onChange={(e) => {
                          const newRules = [...rules];
                          newRules[index].reward.type = e.target.value;
                          setRules(newRules);
                        }}
                        className="px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                      >
                        {rewardTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>

                      <input
                        type="text"
                        value={rule.reward.value}
                        onChange={(e) => {
                          const newRules = [...rules];
                          newRules[index].reward.value = e.target.value;
                          setRules(newRules);
                        }}
                        placeholder="Reward Value"
                        className="px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeRule(rule.id)}
                  className="p-2 rounded-xl bg-[rgba(255,107,74,0.1)] hover:bg-[rgba(255,107,74,0.2)] text-[#FF6B4A] transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <GlassButton variant="ghost" onClick={addRule} className="mt-6">
          <Plus className="w-4 h-4 mr-2 inline" />
          Add Rule
        </GlassButton>
      </GlassCard>

      {/* Campaign Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Schedule
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                Start Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(255,255,255,0.40)]" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                End Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(255,255,255,0.40)]" />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
                />
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-6">
            Budget Control
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                Max Redemptions
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Optional limit"
                className="w-full px-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
              />
            </div>
            <div className="p-4 rounded-2xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)]">
              <p className="text-sm text-[rgba(255,255,255,0.85)]">
                💡 Leave empty for unlimited redemptions
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Preview */}
      <GlassCard size="lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-2">
              Preview
            </h2>
            <p className="text-[rgba(255,255,255,0.65)]">
              <span className="text-2xl font-bold text-[#6C3BFF]">{qualifyingFans.toLocaleString()}</span> fans qualify for these rewards
            </p>
          </div>
          <div className="flex gap-3">
            <GlassButton variant="ghost" size="lg">
              Save Draft
            </GlassButton>
            <GlassButton variant="primary" size="lg">
              Launch Campaign
            </GlassButton>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
