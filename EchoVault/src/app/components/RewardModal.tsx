import { useState, useEffect } from 'react';
import { GlassCard } from './glass/GlassCard';
import { GlassButton } from './glass/GlassButton';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, QrCode, Share2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  reward: {
    title: string;
    description: string;
    evidence: string;
  };
}

export function RewardModal({ isOpen, onClose, reward }: RewardModalProps) {
  const [step, setStep] = useState<'details' | 'redeeming' | 'success'>('details');

  const handleRedeem = () => {
    setStep('redeeming');
    setTimeout(() => {
      setStep('success');
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 2000);
  };

  const handleShare = () => {
    // Share functionality
    alert('Share feature would open social sharing here');
  };

  useEffect(() => {
    if (!isOpen) {
      setStep('details');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <GlassCard size="lg" className="relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-xl hover:bg-[rgba(255,255,255,0.08)] transition-colors text-[rgba(255,255,255,0.65)]"
                >
                  <X className="w-5 h-5" />
                </button>

                {step === 'details' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C3BFF] to-[#9B6BFF] flex items-center justify-center mx-auto mb-4">
                        <Gift className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
                        {reward.title}
                      </h2>
                      <p className="text-[rgba(255,255,255,0.65)]">
                        {reward.description}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)] mb-6 text-left">
                      <p className="text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                        Why you earned this:
                      </p>
                      <p className="text-sm text-[rgba(255,255,255,0.85)]">
                        {reward.evidence}
                      </p>
                    </div>

                    <GlassButton
                      variant="primary"
                      size="lg"
                      fullWidth
                      onClick={handleRedeem}
                    >
                      Redeem Reward
                    </GlassButton>
                  </motion.div>
                )}

                {step === 'redeeming' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="mb-6">
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C3BFF] to-[#9B6BFF] flex items-center justify-center mx-auto"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <QrCode className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                      Generating NFT...
                    </h3>
                    <p className="text-[rgba(255,255,255,0.65)]">
                      Minting your reward on the blockchain
                    </p>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C2A0] to-[#33E0C0] flex items-center justify-center mx-auto mb-4"
                      >
                        <Check className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2 className="text-2xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
                        Reward Claimed! 🎉
                      </h2>
                      <p className="text-[rgba(255,255,255,0.65)]">
                        Your VIP upgrade is now live in your NFT vault
                      </p>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="mb-6 p-8 rounded-2xl bg-white">
                      <div className="w-full aspect-square bg-gradient-to-br from-[#6C3BFF] to-[#00C2A0] rounded-xl opacity-20"></div>
                    </div>

                    <div className="space-y-3">
                      <GlassButton
                        variant="ghost"
                        size="lg"
                        fullWidth
                        onClick={handleShare}
                      >
                        <Share2 className="w-5 h-5 mr-2 inline" />
                        Share on Social
                      </GlassButton>
                      <GlassButton
                        variant="primary"
                        size="lg"
                        fullWidth
                        onClick={onClose}
                      >
                        Done
                      </GlassButton>
                    </div>
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
