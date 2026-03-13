"use client";

import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  size?: "md" | "lg" | "xl";
  variant?: "cta" | "primary" | "outline";
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const sizeStyles = {
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
  xl: "px-12 py-5 text-xl",
};

const variantStyles = {
  cta: "bg-[var(--color-cta)] text-[var(--color-cta-text)] hover:bg-[var(--color-cta-hover)] shadow-lg hover:shadow-xl",
  primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]",
  outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)]",
};

export default function CTAButton({
  children,
  href,
  size = "lg",
  variant = "cta",
  fullWidth = false,
  className = "",
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-cta)] focus:ring-offset-2";

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
