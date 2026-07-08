import { useRef } from "react";
import { motion, useInView } from "motion/react";

type Direction = "up" | "left" | "right" | "none";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  amount?: number;
}

const offset: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 44 },
  left:  { x: 50 },
  right: { x: -50 },
  none:  {},
};

export function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  className,
  amount = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger wrapper — children must use fadeUpItem variant */
interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
  amount?: number;
}

export function StaggerChildren({
  children,
  delay = 0,
  stagger = 0.1,
  className,
  amount = 0.05,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeUpItem = {
  hidden:   { opacity: 0, y: 40 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInItem = {
  hidden:   { opacity: 0, scale: 0.9 },
  visible:  {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
