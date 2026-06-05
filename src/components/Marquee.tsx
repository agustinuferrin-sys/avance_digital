import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left', 
  speed = 40,
  className
}) => {
  return (
    <div className={cn("relative flex w-full overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="flex w-max items-center gap-8 pr-8"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0 gap-8 items-center justify-around">{children}</div>
        <div className="flex shrink-0 gap-8 items-center justify-around">{children}</div>
      </motion.div>
    </div>
  );
};
