import React from 'react';
import { cn } from '../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left', 
  speed = 40,
  className,
  pauseOnHover = false
}) => {
  return (
    <div 
      className={cn(
        "relative flex w-full overflow-hidden whitespace-nowrap", 
        pauseOnHover && "group",
        className
      )}
      style={{ "--speed": `${speed}s` } as React.CSSProperties}
    >
      <div 
        className={cn(
          "flex w-max items-center gap-8 pr-8 animate-marquee",
          direction === 'right' && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        <div className="flex shrink-0 gap-8 items-center justify-around">{children}</div>
        <div className="flex shrink-0 gap-8 items-center justify-around">{children}</div>
      </div>
    </div>
  );
};
