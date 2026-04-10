import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { GlassInput } from '../../components/glass/GlassInput';
import { Check, X, Key, Users, CreditCard, Calendar } from 'lucide-react';

const integrations = [
  { name: 'Ticketmaster', icon: '🎫', connected: true },
  { name: 'Shopify', icon: '🛍️', connected: false },
  { name: 'Discord', icon: '💬', connected: true },
  { name: 'Spotify', icon: '🎵', connected: false }
];

const teamMembers = [
  { name: 'Sarah Johnson', email: 'sarah@acme.com', role: 'Admin' },
  { name: 'Mike Chen', email: 'mike@acme.com', role: 'Analyst' },
  { name: 'Emma Davis', email: 'emma@acme.com', role: 'Viewer' }
];

export function OrganizerSettings() {
  const [syncSchedule, setSyncSchedule] = useState('hourly');
  const [anonymizeData, setAnonymizeData] = useState(true);
  const [allowFanDeletion, setAllowFanDeletion] = useState(true);

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
          Settings
        </h1>
        <p className="text-[rgba(255,255,255,0.65)]">
          Manage integrations, team, and account settings
        </p>
      </div>

      {/* Connected Platforms */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Connected Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{integration.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
                      {integration.name}
                    </p>
                    <p className="text-xs text-[rgba(255,255,255,0.65)]">
                      {integration.connected ? 'Connected' : 'Not connected'}
                    </p>
                  </div>
                </div>
                {integration.connected ? (
                  <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(0,194,160,0.2)] text-[#00C2A0] text-xs font-semibold hover:bg-[rgba(0,194,160,0.3)] transition-colors">
                    <Check className="w-3 h-3" />
                    Connected
                  </button>
                ) : (
                  <GlassButton variant="ghost" size="sm">
                    Connect
                  </GlassButton>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-3">
            Data Sync Schedule
          </label>
          <div className="flex gap-3">
            {['hourly', 'daily', 'manual'].map((schedule) => (
              <button
                key={schedule}
                onClick={() => setSyncSchedule(schedule)}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all ${
                  syncSchedule === schedule
                    ? 'bg-[#6C3BFF] text-white'
                    : 'bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.65)] hover:bg-[rgba(255,255,255,0.08)]'
                }`}
              >
                {schedule.charAt(0).toUpperCase() + schedule.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Privacy Settings */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
          Privacy Settings
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[rgba(255,255,255,0.04)]">
            <div className="flex-1">
              <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-1">
                Anonymize Fan Data
              </p>
              <p className="text-xs text-[rgba(255,255,255,0.65)]">
                Remove personally identifiable information from reports
              </p>
            </div>
            <button
              onClick={() => setAnonymizeData(!anonymizeData)}
              className={`w-12 h-6 rounded-full transition-all ${
                anonymizeData ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  anonymizeData ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-[rgba(255,255,255,0.04)]">
            <div className="flex-1">
              <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-1">
                Allow Fans to Delete Memories
              </p>
              <p className="text-xs text-[rgba(255,255,255,0.65)]">
                Recommended for GDPR compliance
              </p>
            </div>
            <button
              onClick={() => setAllowFanDeletion(!allowFanDeletion)}
              className={`w-12 h-6 rounded-full transition-all ${
                allowFanDeletion ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  allowFanDeletion ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Billing */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Billing & Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="text-sm text-[rgba(255,255,255,0.65)] mb-2">Current Plan</p>
            <p className="text-2xl font-bold text-[rgba(255,255,255,0.92)] mb-1">Pro</p>
            <p className="text-[rgba(255,255,255,0.65)]">$499/month</p>
          </div>
          <div>
            <p className="text-sm text-[rgba(255,255,255,0.65)] mb-2">Next Billing Date</p>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[rgba(255,255,255,0.65)]" />
              <p className="text-[rgba(255,255,255,0.92)]">May 10, 2026</p>
            </div>
          </div>
        </div>
        <GlassButton variant="ghost" size="md">
          Upgrade to Enterprise
        </GlassButton>
      </GlassCard>

      {/* API Keys */}
      <GlassCard size="lg">
        <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6 flex items-center gap-2">
          <Key className="w-5 h-5" />
          API Keys
        </h2>
        <p className="text-sm text-[rgba(255,255,255,0.65)] mb-4">
          Generate API keys for webhook integrations and custom applications
        </p>
        <GlassButton variant="ghost" size="md">
          Generate New Key
        </GlassButton>
      </GlassCard>

      {/* Team Members */}
      <GlassCard size="lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] flex items-center gap-2">
            <Users className="w-5 h-5" />
            Team Members
          </h2>
          <GlassButton variant="ghost" size="sm">
            + Invite Member
          </GlassButton>
        </div>
        <div className="space-y-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C3BFF] to-[#00C2A0]"></div>
                <div>
                  <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">{member.name}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.65)]">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(108,59,255,0.2)] text-[#9B6BFF]">
                  {member.role}
                </span>
                <button className="text-[rgba(255,255,255,0.40)] hover:text-[#FF6B4A] transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
