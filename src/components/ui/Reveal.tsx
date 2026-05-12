import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -40px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}