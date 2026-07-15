import React, { useLayoutEffect, useRef, useState } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);

  useLayoutEffect(() => {
    const calculate = () => {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const itemWidth = itemRef.current?.offsetWidth ?? 0;
      if (!containerWidth || !itemWidth) return;
      // +1 de margen para que siempre haya una copia extra por delante del borde del viewport
      const needed = Math.max(2, Math.ceil(containerWidth / itemWidth) + 1);
      setCopies(prev => (prev === needed ? prev : needed));
    };
    calculate();
    const observer = new ResizeObserver(calculate);
    if (containerRef.current) observer.observe(containerRef.current);
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full overflow-hidden whitespace-nowrap",
        pauseOnHover && "group",
        className
      )}
      style={{ "--speed": `${speed}s`, "--copies": copies } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex w-max items-center animate-marquee",
          direction === 'right' && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} ref={i === 0 ? itemRef : undefined} className="flex shrink-0 gap-8 items-center pr-8">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
