import { useState } from 'react';
import { GlassCard } from './glass/GlassCard';
import { GlassButton } from './glass/GlassButton';
import { motion } from 'motion/react';
import { ExternalLink, Send } from 'lucide-react';

interface NFTTicketCardProps {
  eventName: string;
  date: string;
  badge?: 'VIP' | 'Upgraded' | 'Limited';
  section?: string;
  row?: string;
  seat?: string;
  transferHistory?: number;
  royalty?: string;
  imageUrl?: string;
}

export function NFTTicketCard({
  eventName,
  date,
  badge,
  section,
  row,
  seat,
  transferHistory,
  royalty,
  imageUrl
}: NFTTicketCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const badgeColors = {
    VIP: 'bg-[#6C3BFF] text-white',
    Upgraded: 'bg-[#00C2A0] text-white',
    Limited: 'bg-[#FF6B4A] text-white'
  };

  return (
    <div className="relative h-64 cursor-pointer perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <GlassCard size="md" className="h-full flex flex-col justify-between" gradient>
            {imageUrl && (
              <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
                <img src={imageUrl} alt={eventName} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-[rgba(255,255,255,0.92)] mb-1">
                    {eventName}
                  </h3>
                  <p className="text-sm text-[rgba(255,255,255,0.65)]">{date}</p>
                </div>
                {badge && (
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[badge]}`}>
                    {badge}
                  </span>
                )}
              </div>
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" fill="#9B6BFF" />
                </svg>
                <span className="text-xs text-[rgba(255,255,255,0.65)]">Polygon</span>
              </div>
              <span className="text-xs text-[rgba(255,255,255,0.40)]">Tap to flip</span>
            </div>
          </GlassCard>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <GlassCard size="md" className="h-full flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-[rgba(255,255,255,0.92)] mb-4">Ticket Details</h4>
              <div className="space-y-2 text-sm">
                {section && (
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.65)]">Section</span>
                    <span className="text-[rgba(255,255,255,0.92)]">{section}</span>
                  </div>
                )}
                {row && (
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.65)]">Row</span>
                    <span className="text-[rgba(255,255,255,0.92)]">{row}</span>
                  </div>
                )}
                {seat && (
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.65)]">Seat</span>
                    <span className="text-[rgba(255,255,255,0.92)]">{seat}</span>
                  </div>
                )}
                {transferHistory !== undefined && (
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.65)]">Transfer History</span>
                    <span className="text-[rgba(255,255,255,0.92)]">{transferHistory} times</span>
                  </div>
                )}
                {royalty && (
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.65)]">Artist Royalty</span>
                    <span className="text-[rgba(255,255,255,0.92)]">{royalty}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <GlassButton variant="ghost" size="sm" className="flex-1 !py-2">
                <Send className="w-4 h-4 mr-2" />
                Transfer
              </GlassButton>
              <GlassButton variant="ghost" size="sm" className="flex-1 !py-2">
                <ExternalLink className="w-4 h-4 mr-2" />
                Sell
              </GlassButton>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </div>
  );
}
