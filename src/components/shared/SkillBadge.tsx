"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  index?: number;
}

export function SkillBadge({ name, index = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium",
        "bg-surface border border-border text-muted",
        "hover:border-primary/30 hover:text-text hover:bg-surface-hover",
        "transition-all duration-300 cursor-default"
      )}
    >
      {name}
    </motion.span>
  );
}
