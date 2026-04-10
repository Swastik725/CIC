import { motion } from 'motion/react';

interface LoyaltyBadgeProps {
  score: number;
  maxScore?: number;
  animated?: boolean;
}

export function LoyaltyBadge({ score, maxScore = 1000, animated = false }: LoyaltyBadgeProps) {
  const percentage = (score / maxScore) * 100;
  
  const getColor = () => {
    if (percentage >= 75) return '#00C2A0';
    if (percentage >= 50) return '#6C3BFF';
    if (percentage >= 25) return '#3B82F6';
    return '#FF6B4A';
  };

  const color = getColor();

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md">
      <motion.div 
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        animate={animated ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
      />
      <span className="text-sm font-semibold text-[rgba(255,255,255,0.92)]">
        {score.toLocaleString()}
      </span>
      <span className="text-xs text-[rgba(255,255,255,0.65)]">loyalty</span>
    </div>
  );
}
