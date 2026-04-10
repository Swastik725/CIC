import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { Shield, Download, Trash2, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

const memoryNodes = [
  { id: '1', type: 'ticket', label: 'Arctic Monkeys', x: 50, y: 50 },
  { id: '2', type: 'merch', label: 'Hoodie Purchase', x: 150, y: 80 },
  { id: '3', type: 'social', label: 'Discord Join', x: 100, y: 150 },
  { id: '4', type: 'ticket', label: 'Billie Eilish', x: 200, y: 120 },
  { id: '5', type: 'spotify', label: 'Spotify Connect', x: 250, y: 50 }
];

export function PrivacyCenter() {
  const [connections, setConnections] = useState({
    organizers: true,
    spotify: true,
    discord: true
  });
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);

  const consentHistory = [
    { date: 'Apr 10, 2026', action: 'Connected Spotify', status: 'Active' },
    { date: 'Mar 15, 2026', action: 'Enabled organizer data sharing', status: 'Active' },
    { date: 'Feb 1, 2026', action: 'Joined Discord community', status: 'Active' }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-[rgba(10,10,15,0.9)] border-b border-[rgba(255,255,255,0.08)] px-6 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C2A0] to-[#33E0C0] flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[rgba(255,255,255,0.92)]">
              Privacy Center
            </h1>
          </div>
        </div>
        <p className="text-sm text-[rgba(255,255,255,0.65)]">
          Your data, your control
        </p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Memory Graph Visualization */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4">
            Your Memory Graph
          </h2>
          <div className="relative h-64 bg-[rgba(0,0,0,0.2)] rounded-2xl overflow-hidden">
            <svg className="w-full h-full">
              {/* Connections */}
              <line x1="50" y1="50" x2="150" y2="80" stroke="rgba(108,59,255,0.3)" strokeWidth="2" />
              <line x1="150" y1="80" x2="100" y2="150" stroke="rgba(108,59,255,0.3)" strokeWidth="2" />
              <line x1="50" y1="50" x2="200" y2="120" stroke="rgba(108,59,255,0.3)" strokeWidth="2" />
              <line x1="200" y1="120" x2="250" y2="50" stroke="rgba(108,59,255,0.3)" strokeWidth="2" />

              {/* Nodes */}
              {memoryNodes.map((node) => (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={selectedMemory === node.id ? 20 : 16}
                    fill={selectedMemory === node.id ? '#6C3BFF' : 'rgba(108,59,255,0.5)'}
                    className="cursor-pointer transition-all"
                    onClick={() => setSelectedMemory(node.id)}
                  />
                  <text
                    x={node.x}
                    y={node.y + 35}
                    textAnchor="middle"
                    className="text-xs fill-[rgba(255,255,255,0.65)]"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <p className="text-xs text-[rgba(255,255,255,0.65)] mt-4 text-center">
            Tap any node to select • Selected memories can be deleted or marked as outdated
          </p>
          {selectedMemory && (
            <div className="flex gap-3 mt-4">
              <GlassButton variant="ghost" size="sm" fullWidth>
                Mark as Outdated
              </GlassButton>
              <GlassButton variant="danger" size="sm" fullWidth>
                <Trash2 className="w-4 h-4 mr-2 inline" />
                Delete
              </GlassButton>
            </div>
          )}
        </GlassCard>

        {/* Privacy Controls */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4">
            Data Sharing
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgba(255,255,255,0.92)]">
                  Share with Organizers
                </p>
                <p className="text-xs text-[rgba(255,255,255,0.65)]">
                  Anonymized data helps improve your experience
                </p>
              </div>
              <button
                onClick={() => setConnections({ ...connections, organizers: !connections.organizers })}
                className={`w-12 h-6 rounded-full transition-all ${
                  connections.organizers ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    connections.organizers ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgba(255,255,255,0.92)]">
                  Learn from Spotify
                </p>
                <p className="text-xs text-[rgba(255,255,255,0.65)]">
                  Better music recommendations
                </p>
              </div>
              <button
                onClick={() => setConnections({ ...connections, spotify: !connections.spotify })}
                className={`w-12 h-6 rounded-full transition-all ${
                  connections.spotify ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    connections.spotify ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgba(255,255,255,0.92)]">
                  Learn from Discord
                </p>
                <p className="text-xs text-[rgba(255,255,255,0.65)]">
                  Community insights and preferences
                </p>
              </div>
              <button
                onClick={() => setConnections({ ...connections, discord: !connections.discord })}
                className={`w-12 h-6 rounded-full transition-all ${
                  connections.discord ? 'bg-[#00C2A0]' : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    connections.discord ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Data Export */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4">
            Your Data
          </h2>
          <GlassButton variant="ghost" size="md" fullWidth>
            <Download className="w-5 h-5 mr-2 inline" />
            Download Memory JSON (GDPR)
          </GlassButton>
        </GlassCard>

        {/* Consent History */}
        <GlassCard size="lg">
          <h2 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-4">
            Consent History
          </h2>
          <div className="space-y-3">
            {consentHistory.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.08)] last:border-0">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[rgba(255,255,255,0.40)]" />
                  <div>
                    <p className="text-sm text-[rgba(255,255,255,0.92)]">{item.action}</p>
                    <p className="text-xs text-[rgba(255,255,255,0.65)]">{item.date}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[rgba(0,194,160,0.2)] text-[#00C2A0]">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Warning */}
        <div className="p-4 rounded-2xl bg-[rgba(255,107,74,0.1)] border border-[rgba(255,107,74,0.2)]">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FF6B4A] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-[rgba(255,255,255,0.92)] font-semibold mb-1">
                Permanent Deletion
              </p>
              <p className="text-sm text-[rgba(255,255,255,0.65)]">
                Deleted memories cannot be recovered. Hindsight will need to relearn your preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
