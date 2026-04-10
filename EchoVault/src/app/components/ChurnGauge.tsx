import { motion } from 'motion/react';

interface ChurnGaugeProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ChurnGauge({ percentage, size = 'md' }: ChurnGaugeProps) {
  const sizes = {
    sm: { width: 120, strokeWidth: 8 },
    md: { width: 180, strokeWidth: 12 },
    lg: { width: 240, strokeWidth: 16 }
  };

  const { width, strokeWidth } = sizes[size];
  const radius = (width - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  const getColor = () => {
    if (percentage <= 20) return '#00C2A0';
    if (percentage <= 50) return '#3B82F6';
    if (percentage <= 75) return '#6C3BFF';
    return '#FF6B4A';
  };

  const color = getColor();

  return (
    <div className="flex flex-col items-center gap-4">
      <svg width={width} height={width / 2 + 20} className="overflow-visible">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C2A0" />
            <stop offset="50%" stopColor="#6C3BFF" />
            <stop offset="100%" stopColor="#FF6B4A" />
          </linearGradient>
        </defs>
        
        {/* Background arc */}
        <path
          d={`M ${strokeWidth / 2} ${width / 2} A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${width / 2}`}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Progress arc */}
        <motion.path
          d={`M ${strokeWidth / 2} ${width / 2} A ${radius} ${radius} 0 0 1 ${width - strokeWidth / 2} ${width / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            filter: `drop-shadow(0 0 8px ${color}40)`
          }}
        />
        
        {/* Center text */}
        <text
          x={width / 2}
          y={width / 2 - 10}
          textAnchor="middle"
          className="text-3xl font-bold"
          fill="rgba(255, 255, 255, 0.92)"
        >
          {percentage}%
        </text>
        <text
          x={width / 2}
          y={width / 2 + 15}
          textAnchor="middle"
          className="text-sm"
          fill="rgba(255, 255, 255, 0.65)"
        >
          Churn Risk
        </text>
      </svg>
      
      <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#00C2A0]"></div>
          <span className="text-[rgba(255,255,255,0.65)]">Low</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#6C3BFF]"></div>
          <span className="text-[rgba(255,255,255,0.65)]">Medium</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#FF6B4A]"></div>
          <span className="text-[rgba(255,255,255,0.65)]">High</span>
        </div>
      </div>
    </div>
  );
}
