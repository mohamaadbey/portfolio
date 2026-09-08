"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  index?: number;
}

export function TimelineItem({
  role,
  company,
  period,
  description,
  highlights,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className="absolute left-[-4px] top-1 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_12px_rgba(100,255,218,0.3)]" />
      <div className="absolute left-[-2px] top-1 w-[5px] h-[5px] rounded-full bg-primary animate-pulse" />

      <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary/20 transition-colors duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-text">{role}</h3>
            <p className="text-primary text-sm font-medium">{company}</p>
          </div>
          <span className="text-xs text-muted font-mono whitespace-nowrap px-3 py-1 bg-background rounded-full border border-border">
            {period}
          </span>
        </div>
        <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="text-primary mt-1.5 flex-shrink-0">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                  <circle cx="3" cy="3" r="3" />
                </svg>
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
