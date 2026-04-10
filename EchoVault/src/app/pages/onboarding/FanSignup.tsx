import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { GlassInput } from '../../components/glass/GlassInput';
import { motion } from 'motion/react';
import { Mail, QrCode, Wallet, ArrowLeft, Shield } from 'lucide-react';

export function FanSignup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/onboarding/quiz');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={() => navigate('/onboarding')}
          className="flex items-center gap-2 text-[rgba(255,255,255,0.65)] hover:text-[rgba(255,255,255,0.92)] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
            Join as a Fan
          </h1>
          <p className="text-[rgba(255,255,255,0.65)] mb-8">
            Start building your memory vault and claim your first NFT ticket
          </p>

          <GlassCard size="lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <GlassInput
                type="email"
                label="Email Address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <GlassButton type="submit" variant="primary" size="lg" fullWidth>
                <Mail className="w-5 h-5 mr-2 inline" />
                Claim My First NFT Ticket
              </GlassButton>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[rgba(255,255,255,0.08)]"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#0A0A0F] px-4 text-[rgba(255,255,255,0.40)]">Or</span>
                </div>
              </div>

              <GlassButton type="button" variant="ghost" size="lg" fullWidth>
                <QrCode className="w-5 h-5 mr-2 inline" />
                Scan QR Code
              </GlassButton>

              <button
                type="button"
                className="w-full text-center text-sm text-[rgba(255,255,255,0.65)] hover:text-[#6C3BFF] transition-colors"
              >
                <Wallet className="w-4 h-4 inline mr-1" />
                Connect Wallet (Optional)
              </button>
            </form>
          </GlassCard>

          {/* Privacy Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-[rgba(0,194,160,0.1)] border border-[rgba(0,194,160,0.2)]">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-[#00C2A0] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[rgba(255,255,255,0.92)] font-semibold mb-1">
                  Your Memory, Your Control
                </p>
                <p className="text-sm text-[rgba(255,255,255,0.65)]">
                  You own your data. Delete anytime, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
