import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export function GlassCard({ 
  children, 
  className, 
  size = 'md', 
  hover = false,
  gradient = false,
  onClick 
}: GlassCardProps) {
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-3xl backdrop-blur-md border transition-all duration-300',
        'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]',
        hover && 'hover:bg-[rgba(255,255,255,0.08)] hover:scale-[1.01] cursor-pointer',
        gradient && 'relative overflow-hidden',
        sizeClasses[size],
        className
      )}
      style={{
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)'
      }}
    >
      {gradient && (
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #6C3BFF 0%, #00C2A0 100%)'
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
