import { useState } from 'react';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { Sparkles, Ticket, ShoppingBag, AlertCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Suggestion {
  id: string;
  type: 'ticket' | 'merch' | 'churn';
  icon: any;
  title: string;
  description: string;
  reason: string;
  action: string;
}

const suggestions: Suggestion[] = [
  {
    id: '1',
    type: 'ticket',
    icon: Ticket,
    title: 'The Weeknd Early Access',
    description: 'Based on your last 3 shows, you'd love The Weeknd. Early access starts in 2 days.',
    reason: 'You attended similar artists 3x in the past 6 months and engaged with R&B content on Discord',
    action: 'Get Early Access'
  },
  {
    id: '2',
    type: 'merch',
    icon: ShoppingBag,
    title: 'Favorite Hoodie Back in Stock',
    description: 'Your favorite Arctic Monkeys hoodie is back — limited edition run of 500',
    reason: 'You viewed this item 4 times but it was sold out. You also purchased similar hoodies before.',
    action: 'Shop Now'
  },
  {
    id: '3',
    type: 'churn',
    icon: AlertCircle,
    title: 'We Miss You!',
    description: "You haven't attended in 6 months. Here's 15% off your next ticket.",
    reason: 'Your attendance dropped after ticket prices increased. Similar fans responded well to discounts.',
    action: 'Browse Events'
  }
];

export function ProactiveAgent() {
  const [activeSuggestions, setActiveSuggestions] = useState(suggestions);
  const [showReason, setShowReason] = useState<string | null>(null);

  const handleAccept = (id: string) => {
    setActiveSuggestions(activeSuggestions.filter(s => s.id !== id));
  };

  const handleDismiss = (id: string) => {
    setActiveSuggestions(activeSuggestions.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-[rgba(10,10,15,0.9)] border-b border-[rgba(255,255,255,0.08)] px-6 py-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6C3BFF] to-[#9B6BFF] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[rgba(255,255,255,0.92)]">
              Hindsight Agent
            </h1>
          </div>
        </div>
        <p className="text-sm text-[rgba(255,255,255,0.65)]">
          Personalized suggestions based on your behavior
        </p>
      </div>

      {/* Suggestions Feed */}
      <div className="px-6 py-6">
        <AnimatePresence mode="popLayout">
          {activeSuggestions.length > 0 ? (
            <div className="space-y-4">
              {activeSuggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard size="lg">
                    <div className="flex gap-4">
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          suggestion.type === 'ticket' ? 'bg-[rgba(108,59,255,0.2)]' :
                          suggestion.type === 'merch' ? 'bg-[rgba(0,194,160,0.2)]' :
                          'bg-[rgba(255,107,74,0.2)]'
                        }`}
                      >
                        <suggestion.icon 
                          className={`w-6 h-6 ${
                            suggestion.type === 'ticket' ? 'text-[#6C3BFF]' :
                            suggestion.type === 'merch' ? 'text-[#00C2A0]' :
                            'text-[#FF6B4A]'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                          {suggestion.title}
                        </h3>
                        <p className="text-sm text-[rgba(255,255,255,0.65)] mb-4">
                          {suggestion.description}
                        </p>

                        {/* Why button */}
                        <button
                          onClick={() => setShowReason(showReason === suggestion.id ? null : suggestion.id)}
                          className="flex items-center gap-1 text-xs text-[#9B6BFF] hover:text-[#6C3BFF] transition-colors mb-4"
                        >
                          <Sparkles className="w-3 h-3" />
                          Why did Hindsight suggest this?
                          <ChevronRight className={`w-3 h-3 transition-transform ${showReason === suggestion.id ? 'rotate-90' : ''}`} />
                        </button>

                        {/* Reason */}
                        <AnimatePresence>
                          {showReason === suggestion.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="mb-4 p-3 rounded-xl bg-[rgba(108,59,255,0.1)] border border-[rgba(108,59,255,0.2)] overflow-hidden"
                            >
                              <p className="text-xs text-[rgba(255,255,255,0.85)]">
                                {suggestion.reason}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <GlassButton
                            variant="primary"
                            size="sm"
                            onClick={() => handleAccept(suggestion.id)}
                            className="flex-1"
                          >
                            {suggestion.action}
                          </GlassButton>
                          <GlassButton
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDismiss(suggestion.id)}
                          >
                            Not Interested
                          </GlassButton>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Sparkles className="w-16 h-16 text-[rgba(255,255,255,0.2)] mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                All Caught Up!
              </h3>
              <p className="text-[rgba(255,255,255,0.65)]">
                Hindsight will notify you when new suggestions are available
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
