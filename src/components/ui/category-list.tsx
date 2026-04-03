import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export interface Category {
  id: string | number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  featured?: boolean;
}

export interface CategoryListProps {
  title: string;
  subtitle?: string;
  categories: Category[];
  headerIcon?: React.ReactNode;
  className?: string;
}

export const CategoryList = ({
  title,
  subtitle,
  categories,
  headerIcon,
  className,
}: CategoryListProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);

  return (
    <div className={cn("w-full", className)}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          {headerIcon && (
            <div className="mb-4 text-accent">{headerIcon}</div>
          )}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>

        <div className="space-y-0 divide-y divide-border">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative cursor-pointer py-6 transition-colors duration-200 hover:bg-muted/50"
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={category.onClick}
            >
              <div className="relative px-4">
                {hoveredItem === category.id && (
                  <>
                    <div className="absolute top-0 left-0">
                      <div className="w-4 h-[2px] bg-accent" />
                      <div className="w-[2px] h-4 bg-accent" />
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <div className="w-4 h-[2px] bg-accent absolute bottom-0 right-0" />
                      <div className="w-[2px] h-4 bg-accent absolute bottom-0 right-0" />
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <span className={cn(
                      "font-semibold text-foreground transition-colors",
                      category.featured ? "text-xl" : "text-lg"
                    )}>
                      {category.title}
                    </span>
                    {category.subtitle && (
                      <span className="block text-sm text-muted-foreground mt-1">
                        {category.subtitle}
                      </span>
                    )}
                  </div>

                  {category.icon && hoveredItem === category.id && (
                    <div className="text-accent animate-fade-in">
                      {category.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
