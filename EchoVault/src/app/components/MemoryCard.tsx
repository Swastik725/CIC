import { Ticket, ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';
import { GlassCard } from './glass/GlassCard';

interface MemoryCardProps {
  type: 'ticket' | 'merch' | 'social' | 'ai';
  timestamp: string;
  content: string;
  aiReflection?: string;
  confidence?: number;
}

const iconMap = {
  ticket: Ticket,
  merch: ShoppingBag,
  social: MessageCircle,
  ai: Sparkles
};

const iconColors = {
  ticket: '#6C3BFF',
  merch: '#00C2A0',
  social: '#3B82F6',
  ai: '#FF6B4A'
};

export function MemoryCard({ type, timestamp, content, aiReflection, confidence }: MemoryCardProps) {
  const Icon = iconMap[type];
  const color = iconColors[type];

  return (
    <GlassCard size="md" className="relative">
      <div className="flex gap-4">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-[rgba(255,255,255,0.40)] mb-1">{timestamp}</p>
          <p className="text-[rgba(255,255,255,0.92)] mb-2">{content}</p>
          {aiReflection && (
            <div className="mt-3 p-3 rounded-xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)]">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3 h-3 text-[#9B6BFF]" />
                <span className="text-xs font-semibold text-[#9B6BFF]">Hindsight noticed</span>
              </div>
              <p className="text-sm text-[rgba(255,255,255,0.85)]">
                {aiReflection}
                {confidence && (
                  <span className="text-xs text-[rgba(255,255,255,0.65)] ml-1">
                    ({confidence}% confidence)
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
