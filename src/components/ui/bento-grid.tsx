import { cn } from "@/lib/utils";
import React from "react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30",
            item.colSpan && item.colSpan > 1 ? `md:col-span-${item.colSpan}` : "",
            item.hasPersistentHover && "border-accent/20 shadow-md"
          )}
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-accent/10">
                {item.icon}
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
                {item.status || "Active"}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <span className="text-xs text-muted-foreground">{item.meta}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
