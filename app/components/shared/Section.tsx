import React from "react";
import { cn } from "~/lib/utils";

export function Section({
  id,
  children,
  className = "",
  style,
  glass = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glass?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 px-4 md:px-0 max-w-5xl mx-auto w-full scroll-mt-20 relative",
        glass && "backdrop-blur-sm",
        className
      )}
      style={style}
    >
      {glass && (
        <div className="absolute inset-0 bg-card/5 rounded-3xl -z-10" />
      )}
      {children}
    </section>
  );
}