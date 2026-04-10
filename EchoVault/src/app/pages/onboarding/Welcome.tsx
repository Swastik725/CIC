import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { motion } from 'motion/react';
import { Heart, Users, Brain, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Hindsight Memory',
    description: 'AI remembers every interaction and learns your preferences over time'
  },
  {
    icon: Shield,
    title: 'Blockchain Ownership',
    description: 'Your tickets and memories are yours forever, secured on-chain'
  },
  {
    icon: Zap,
    title: 'Proactive Intelligence',
    description: 'Get personalized recommendations before you even know you want them'
  }
];

export function Welcome() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="mb-6 relative">
          <motion.div
            className="w-24 h-24 rounded-full mx-auto"
            style={{
              background: 'linear-gradient(135deg, #6C3BFF 0%, #00C2A0 100%)'
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(108, 59, 255, 0.3)',
                '0 0 40px rgba(108, 59, 255, 0.5)',
                '0 0 20px rgba(108, 59, 255, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[rgba(255,255,255,0.92)] mb-4">
          Welcome to EchoVault
        </h1>
        <p className="text-xl text-[rgba(255,255,255,0.65)] max-w-2xl mx-auto">
          Where AI memory meets blockchain ownership
        </p>
      </motion.div>

      {/* Feature Carousel */}
      <div className="max-w-md w-full mb-12">
        <GlassCard size="lg" className="min-h-[240px]">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C3BFF] to-[#9B6BFF] flex items-center justify-center">
                {(() => {
                  const Icon = features[currentSlide].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-[rgba(255,255,255,0.92)] mb-3">
              {features[currentSlide].title}
            </h3>
            <p className="text-[rgba(255,255,255,0.65)]">
              {features[currentSlide].description}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#6C3BFF] w-6'
                    : 'bg-[rgba(255,255,255,0.2)]'
                }`}
              />
            ))}
          </div>
        </GlassCard>
      </div>

      {/* CTAs */}
      <div className="max-w-md w-full space-y-4 mb-8">
        <GlassButton
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => navigate('/onboarding/fan-signup')}
        >
          <Users className="w-5 h-5 mr-2 inline" />
          I'm a Fan
        </GlassButton>
        <GlassButton
          variant="secondary"
          size="lg"
          fullWidth
          onClick={() => navigate('/onboarding/organizer-signup')}
        >
          <Users className="w-5 h-5 mr-2 inline" />
          I'm an Organizer
        </GlassButton>
      </div>

      {/* Skip */}
      <button
        onClick={() => navigate('/fan')}
        className="text-sm text-[rgba(255,255,255,0.40)] hover:text-[rgba(255,255,255,0.65)] transition-colors"
      >
        Skip for now
      </button>
    </div>
  );
}
