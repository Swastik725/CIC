import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function GlassButton({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  disabled,
  ...props 
}: GlassButtonProps) {
  const baseClasses = 'rounded-full font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-[#6C3BFF] hover:bg-[#9B6BFF] text-white shadow-lg shadow-[#6C3BFF]/20',
    secondary: 'bg-[#00C2A0] hover:bg-[#33E0C0] text-white shadow-lg shadow-[#00C2A0]/20',
    ghost: 'bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.92)] border border-[rgba(255,255,255,0.08)]',
    danger: 'bg-[#FF6B4A] hover:bg-[#FF8A6F] text-white shadow-lg shadow-[#FF6B4A]/20'
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
