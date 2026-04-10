import { useState } from 'react';
import { MemoryCard } from '../../components/MemoryCard';
import { LoyaltyBadge } from '../../components/LoyaltyBadge';
import { GlassInput } from '../../components/glass/GlassInput';
import { GlassButton } from '../../components/glass/GlassButton';
import { Search, Network, TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const memories = [
  {
    type: 'ticket' as const,
    timestamp: '2 days ago',
    content: 'You attended Arctic Monkeys at Madison Square Garden, Section A, Row 4',
    aiReflection: 'You prefer left side seating',
    confidence: 87
  },
  {
    type: 'merch' as const,
    timestamp: '1 week ago',
    content: 'Purchased limited edition hoodie from The Weeknd merch store',
  },
  {
    type: 'social' as const,
    timestamp: '2 weeks ago',
    content: 'Connected Discord account - joined 3 artist communities',
    aiReflection: 'You engage most on weekends',
    confidence: 92
  },
  {
    type: 'ticket' as const,
    timestamp: '3 weeks ago',
    content: 'Attended Billie Eilish at Barclays Center, VIP Section',
    aiReflection: 'You attend concerts 2x more than average fans',
    confidence: 95
  },
  {
    type: 'ai' as const,
    timestamp: '1 month ago',
    content: 'Hindsight learned your preference: You love indie-pop artists with strong visuals',
    confidence: 88
  }
];

const filterChips = ['All Time', 'This Month', 'Last 3 Months', 'This Year'];

export function MemoryTimeline() {
  const [viewMode, setViewMode] = useState<'timeline' | 'graph'>('timeline');
  const [selectedFilter, setSelectedFilter] = useState('All Time');
  const [showProactiveChip, setShowProactiveChip] = useState(true);

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-[rgba(10,10,15,0.9)] border-b border-[rgba(255,255,255,0.08)] px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C3BFF] to-[#00C2A0]"></div>
            <div>
              <h2 className="font-semibold text-[rgba(255,255,255,0.92)]">Alex Johnson</h2>
              <LoyaltyBadge score={847} animated />
            </div>
          </div>
          <button
            onClick={() => setViewMode(viewMode === 'timeline' ? 'graph' : 'timeline')}
            className="p-2 rounded-xl bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          >
            <Network className="w-5 h-5 text-[rgba(255,255,255,0.92)]" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[rgba(255,255,255,0.40)]" />
          <input
            type="text"
            placeholder="Search memories..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)] focus:outline-none focus:ring-2 focus:ring-[#6C3BFF]"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setSelectedFilter(chip)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedFilter === chip
                  ? 'bg-[#6C3BFF] text-white'
                  : 'bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.65)] hover:bg-[rgba(255,255,255,0.08)]'
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 py-6">
        {viewMode === 'timeline' ? (
          <div className="space-y-4">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MemoryCard {...memory} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <Network className="w-16 h-16 text-[rgba(255,255,255,0.2)] mx-auto mb-4" />
              <p className="text-[rgba(255,255,255,0.65)]">Graph view coming soon</p>
            </div>
          </div>
        )}
      </div>

      {/* Proactive Agent Chip */}
      {showProactiveChip && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed bottom-24 left-0 right-0 px-6"
        >
          <div className="max-w-md mx-auto p-4 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-[rgba(108,59,255,0.9)] to-[rgba(155,107,255,0.9)] border border-[rgba(255,255,255,0.2)] shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-white" />
                <p className="text-sm text-white font-medium">Early access available for you 👀</p>
              </div>
              <button
                onClick={() => setShowProactiveChip(false)}
                className="text-white hover:text-[rgba(255,255,255,0.7)] transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
