"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  amount?: number;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function ScrollRevealContainer({
  children,
  className = "",
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function ScrollRevealItem({
  children,
  className = "",
  direction = "up",
}: ScrollRevealItemProps) {
  const directionMap = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ScrollReveal({
  children,
  className = "",
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
