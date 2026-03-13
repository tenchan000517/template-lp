"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value?: number;
  end?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  value,
  end,
  duration = 1.5,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const targetValue = value ?? end ?? 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals);
    }
    return Math.round(latest).toString();
  });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        const controls = animate(count, targetValue, {
          duration,
          ease: "easeOut",
        });

        const unsubscribe = rounded.on("change", (v) => {
          setDisplayValue(v);
        });

        return () => {
          controls.stop();
          unsubscribe();
        };
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isInView, targetValue, duration, delay, count, rounded]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
