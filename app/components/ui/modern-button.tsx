import { cn } from "~/lib/utils";
import { Button, ButtonProps } from "./button";

interface ModernButtonProps extends ButtonProps {
  glow?: boolean;
  gradient?: boolean;
}

export function ModernButton({ 
  children, 
  className, 
  glow = false, 
  gradient = false,
  variant = "default",
  asChild = false,
  ...props 
}: ModernButtonProps) {
  // When asChild is true, we can't add extra elements, so we simplify
  if (asChild) {
    return (
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          glow && "shadow-lg hover:shadow-xl hover:shadow-primary/25",
          gradient && variant === "default" && "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
          "backdrop-blur-sm",
          className
        )}
        variant={variant}
        asChild={asChild}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        glow && "shadow-lg hover:shadow-xl hover:shadow-primary/25",
        gradient && variant === "default" && "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
        "backdrop-blur-sm",
        className
      )}
      variant={variant}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </Button>
  );
}