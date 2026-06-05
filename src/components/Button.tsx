import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, showArrow = true, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2",
          "rounded-pill px-8 py-4 font-body font-semibold text-white",
          "bg-brand transition-all duration-300 ease-out",
          "hover:bg-brandAlt hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(27,77,228,0.4)]",
          "active:scale-95",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
