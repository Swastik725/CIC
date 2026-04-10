import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-[rgba(255,255,255,0.92)] mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-2xl backdrop-blur-md border transition-all duration-200',
            'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]',
            'text-[rgba(255,255,255,0.92)] placeholder:text-[rgba(255,255,255,0.40)]',
            'focus:outline-none focus:ring-2 focus:ring-[#6C3BFF] focus:border-transparent',
            error && 'border-[#FF6B4A] focus:ring-[#FF6B4A]',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[#FF6B4A]">{error}</p>
        )}
      </div>
    );
  }
);

GlassInput.displayName = 'GlassInput';
