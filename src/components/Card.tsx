import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-card bg-navy/80 backdrop-blur-md border border-brandAlt/20 p-8",
          "transition-all duration-300 hover:border-brandAlt/50 hover:shadow-[0_0_30px_rgba(27,77,228,0.15)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
