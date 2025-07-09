import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Zap, Brain, Target, Award } from "lucide-react";

interface LoadingAnimationProps {
  onComplete?: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("Initializing...");

  const loadingTexts = [
    "Initializing platform...",
    "Loading analytics engine...",
    "Preparing dashboard...",
    "Optimizing performance...",
    "Almost ready...",
  ];

  const icons = [Zap, Brain, Target, Award];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Progress animation
    const progressTween = gsap.to(
      {},
      {
        duration: 3,
        ease: "power2.out",
        onUpdate: function () {
          const prog = Math.floor(this.progress() * 100);
          setProgress(prog);

          // Update text based on progress
          const textIndex = Math.floor(this.progress() * loadingTexts.length);
          if (textIndex < loadingTexts.length) {
            setCurrentText(loadingTexts[textIndex]);
          }
        },
        onComplete: () => {
          setTimeout(() => {
            // Fade out animation
            gsap.to(container, {
              opacity: 0,
              scale: 0.9,
              duration: 0.5,
              ease: "power2.in",
              onComplete: () => {
                onComplete?.();
              },
            });
          }, 500);
        },
      },
    );

    // Animate floating icons
    const iconElements = container.querySelectorAll(".floating-icon");
    iconElements.forEach((icon, index) => {
      gsap.fromTo(
        icon,
        {
          y: 50,
          opacity: 0,
          rotation: -180,
          scale: 0,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
        },
      );

      // Continuous floating animation
      gsap.to(icon, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.5,
      });
    });

    // Progress bar animation
    const progressBar = container.querySelector(".progress-bar");
    if (progressBar) {
      gsap.fromTo(
        progressBar,
        { scaleX: 0 },
        { scaleX: 1, duration: 3, ease: "power2.out" },
      );
    }

    return () => {
      progressTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 backdrop-blur-sm z-[9999] flex items-center justify-center"
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-8">
        {/* Logo area with floating icons */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto flex items-center justify-center mb-6 shadow-2xl">
            <Zap className="w-10 h-10 text-white" />
          </div>

          {/* Floating icons around logo */}
          {icons.map((Icon, index) => {
            const angle = (index / icons.length) * Math.PI * 2;
            const radius = 60;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="floating-icon absolute w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <Icon className="w-4 h-4 text-primary" />
              </div>
            );
          })}
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Educational Platform
        </h2>

        <p className="text-muted-foreground mb-8 min-h-[24px]">{currentText}</p>

        {/* Progress bar */}
        <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
          <div
            className="progress-bar absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full origin-left"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>

        {/* Progress percentage */}
        <div className="text-sm text-muted-foreground font-mono">
          {progress}% Complete
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.4s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
