import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const Cursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.group') // Interactive cards
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand bg-brand/10 pointer-events-none z-[100000] hidden lg:flex mix-blend-screen items-center justify-center transition-colors duration-300"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        scale: isHovered ? 2.4 : 1,
        backgroundColor: isHovered ? 'rgba(27,77,228,0.15)' : 'rgba(27,77,228,0.05)',
        borderColor: isHovered ? 'rgba(147,197,253,0.9)' : 'rgba(27,77,228,1)',
      }}
    >
      <div className={`w-1 h-1 bg-brand rounded-full transition-all duration-300 ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
    </motion.div>
  );
};
