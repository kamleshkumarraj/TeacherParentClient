import { cn } from "@/lib/utils";
import { forwardRef, useRef, useEffect } from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "subtle" | "interactive";
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className,
      variant = "default",
      hover = true,
      glow = false,
      tilt = false,
      ...props
    },
    ref,
  ) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const variants = {
      default: "glass rounded-xl",
      elevated: "glass rounded-xl shadow-glass-lg",
      subtle: "backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl",
      interactive: "glass-enhanced rounded-xl hover-lift cursor-pointer",
    };

    useEffect(() => {
      if (!tilt || !cardRef.current) return;

      const card = cardRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / (rect.height / 2)) * -10;
        const rotateY = (mouseX / (rect.width / 2)) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
      };

      const handleMouseLeave = () => {
        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [tilt]);

    return (
      <div
        ref={ref || cardRef}
        className={cn(
          variants[variant],
          hover &&
            "transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-lg",
          glow && "animate-pulse-glow",
          "transform-gpu transition-transform duration-300 ease-out",
          className,
        )}
        style={{
          willChange: "transform",
        }}
        {...props}
      />
    );
  },
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
