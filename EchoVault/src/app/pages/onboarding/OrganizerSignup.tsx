import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { GlassInput } from '../../components/glass/GlassInput';
import { motion } from 'motion/react';
import { ArrowLeft, Building, Music, Calendar, ShoppingBag, Check } from 'lucide-react';

const integrations = [
  { name: 'Ticketmaster', icon: '🎫', connected: false },
  { name: 'Shopify', icon: '🛍️', connected: false },
  { name: 'Discord', icon: '💬', connected: false },
  { name: 'Stripe', icon: '💳', connected: false }
];

const plans = [
  { name: 'Pro', price: 499, features: ['Up to 10K fans', 'Basic analytics', 'Email support'] },
  { name: 'Enterprise', price: 2999, features: ['Unlimited fans', 'Advanced AI', 'Priority support', 'Custom integrations'] }
];

export function OrganizerSignup() {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/organizer');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto py-12">
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
            Join as an Organizer
          </h1>
          <p className="text-[rgba(255,255,255,0.65)] mb-8">
            Start building deeper relationships with your fans
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Details */}
            <GlassCard size="lg">
              <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
                Company Details
              </h2>
              <div className="space-y-4">
                <GlassInput
                  label="Company Name"
                  placeholder="Acme Events Inc."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
                <div>
                  <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-2">
                    Event Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Music, label: 'Music & Concerts' },
                      { icon: Calendar, label: 'Conferences' },
                      { icon: ShoppingBag, label: 'Retail & Merch' },
                      { icon: Building, label: 'Sports & Teams' }
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        type="button"
                        className="p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[#6C3BFF] transition-all text-left"
                      >
                        <Icon className="w-5 h-5 text-[#6C3BFF] mb-2" />
                        <span className="text-sm text-[rgba(255,255,255,0.92)]">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Integrations */}
            <GlassCard size="lg">
              <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
                Connect Existing Data
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <button
                    key={integration.name}
                    type="button"
                    className="p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] transition-all text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{integration.icon}</span>
                        <span className="text-sm text-[rgba(255,255,255,0.92)]">
                          {integration.name}
                        </span>
                      </div>
                      <span className="text-xs text-[rgba(255,255,255,0.40)]">Connect</span>
                    </div>
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Pricing */}
            <GlassCard size="lg">
              <h2 className="text-xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plans.map((plan) => (
                  <button
                    key={plan.name}
                    type="button"
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${
                      selectedPlan === plan.name
                        ? 'border-[#6C3BFF] bg-[rgba(108,59,255,0.1)]'
                        : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.15)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[rgba(255,255,255,0.92)]">
                        {plan.name}
                      </h3>
                      {selectedPlan === plan.name && (
                        <div className="w-6 h-6 rounded-full bg-[#6C3BFF] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-[rgba(255,255,255,0.92)]">
                        ${plan.price}
                      </span>
                      <span className="text-[rgba(255,255,255,0.65)]">/month</span>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.65)]">
                          <Check className="w-4 h-4 text-[#00C2A0]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
                <p className="text-xs text-[rgba(255,255,255,0.65)] text-center">
                  🧪 Test mode enabled - No charges will be made
                </p>
              </div>
            </GlassCard>

            <GlassButton type="submit" variant="primary" size="lg" fullWidth>
              Get Started with {selectedPlan}
            </GlassButton>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
