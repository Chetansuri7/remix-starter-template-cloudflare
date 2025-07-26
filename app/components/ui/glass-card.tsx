import { cn } from "~/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "bg-card/70",
        "backdrop-blur-xl backdrop-saturate-150",
        "border border-border/20",
        "shadow-xl",
        hover && "transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:bg-card/80",
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-card-foreground/5 to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}