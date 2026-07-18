import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, showArrow = true, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex shrink-0 rounded-pill p-[2px]',
          'bg-gradient-to-r from-brand via-brandAlt to-skyLight',
          'shadow-[0_10px_25px_-8px_rgba(24,113,255,0.55)]',
          'transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-95',
          className
        )}
        {...props}
      >
        <span className="flex items-center justify-center gap-2 w-full h-full rounded-pill bg-bg px-6 py-2.5 text-sm font-body font-semibold text-white whitespace-nowrap transition-colors duration-300 group-hover:bg-transparent">
          {children}
          {showArrow && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </span>
      </button>
    );
  }
);
GradientButton.displayName = 'GradientButton';
