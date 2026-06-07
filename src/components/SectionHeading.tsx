import React from 'react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children, 
  subtitle, 
  className,
  align = 'left' 
}) => {
  return (
    <div className={cn("flex flex-col gap-4", align === 'center' && "items-center text-center", className)}>
      {subtitle && (
        <span className="text-brand font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">
          {subtitle}
        </span>
      )}
      <h2 className="font-display font-black text-white leading-[1.1] tracking-[-0.03em] text-[clamp(2.5rem,5vw,5rem)]">
        {children}
      </h2>
    </div>
  );
};
