import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '../lib/utils';

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const match = value.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : value;
  const suffix = match ? match[3] : '';
  
  const targetNum = parseFloat(numStr) || 0;
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
        setCount(targetNum * easeOutQuart);
        requestAnimationFrame(animate);
      } else {
        setCount(targetNum);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, targetNum]);

  const isFloat = numStr.includes('.');
  const displayNum = isFloat ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <span ref={ref} className={cn("font-display font-black text-brand", className)}>
      {prefix}{displayNum}{suffix}
    </span>
  );
};
