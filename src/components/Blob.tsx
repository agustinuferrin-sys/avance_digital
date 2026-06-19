import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface BlobProps {
  className?: string;
  delay?: number;
}

export const Blob: React.FC<BlobProps> = ({ className, delay = 0 }) => {
  return (
    <motion.div
      className={cn("absolute mix-blend-screen opacity-60 pointer-events-none rounded-full transform-gpu will-change-transform", className)}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, -50, 0],
        y: [0, -50, 50, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{
        background: 'radial-gradient(circle, var(--color-skyLight) 0%, var(--color-brand) 40%, var(--color-navy) 80%, transparent 100%)',
      }}
    />
  );
};
