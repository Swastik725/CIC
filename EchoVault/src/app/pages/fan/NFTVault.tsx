import { NFTTicketCard } from '../../components/NFTTicketCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { QrCode, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const nfts = [
  {
    eventName: 'Arctic Monkeys',
    date: 'Dec 15, 2025',
    badge: 'VIP' as const,
    section: 'A',
    row: '4',
    seat: '12',
    transferHistory: 0,
    royalty: '5% to artist'
  },
  {
    eventName: 'The Weeknd',
    date: 'Jan 8, 2026',
    badge: 'Upgraded' as const,
    section: 'GA',
    row: 'Floor',
    seat: 'Standing',
    transferHistory: 1,
    royalty: '7.5% to artist'
  },
  {
    eventName: 'Billie Eilish',
    date: 'Nov 28, 2025',
    badge: 'Limited' as const,
    section: 'VIP',
    row: '1',
    seat: '5',
    transferHistory: 0,
    royalty: '10% to artist'
  },
  {
    eventName: 'Taylor Swift',
    date: 'Feb 14, 2026',
    section: 'B',
    row: '12',
    seat: '8',
    transferHistory: 2,
    royalty: '5% to artist'
  }
];

export function NFTVault() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-[rgba(10,10,15,0.9)] border-b border-[rgba(255,255,255,0.08)] px-6 py-6">
        <h1 className="text-2xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
          My NFT Vault
        </h1>
        <p className="text-sm text-[rgba(255,255,255,0.65)]">
          {nfts.length} tickets • Secured on Polygon
        </p>
      </div>

      {/* NFT Grid */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {nfts.map((nft, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <NFTTicketCard {...nft} />
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-4 max-w-md mx-auto">
          <GlassButton variant="primary" size="lg" fullWidth>
            <QrCode className="w-5 h-5 mr-2 inline" />
            Claim Ticket with QR
          </GlassButton>
          <GlassButton variant="ghost" size="lg" fullWidth>
            <Wallet className="w-5 h-5 mr-2 inline" />
            Import External NFT
          </GlassButton>
        </div>

        {/* Info */}
        <div className="mt-8 p-4 rounded-2xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)]">
          <p className="text-sm text-[rgba(255,255,255,0.85)] text-center">
            💡 Tap any ticket to see details and transfer options
          </p>
        </div>
      </div>
    </div>
  );
}
