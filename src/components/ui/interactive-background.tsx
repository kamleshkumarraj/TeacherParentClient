import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating orbs
    const createOrbs = () => {
      const orbCount = 6;
      for (let i = 0; i < orbCount; i++) {
        const orb = document.createElement("div");
        orb.className = `absolute w-32 h-32 rounded-full opacity-10 pointer-events-none orb-${i}`;

        // Random gradient colors
        const colors = [
          "bg-gradient-to-r from-blue-400 to-purple-500",
          "bg-gradient-to-r from-purple-400 to-pink-500",
          "bg-gradient-to-r from-green-400 to-blue-500",
          "bg-gradient-to-r from-yellow-400 to-orange-500",
          "bg-gradient-to-r from-pink-400 to-red-500",
          "bg-gradient-to-r from-indigo-400 to-purple-500",
        ];

        orb.className += ` ${colors[i % colors.length]}`;

        // Random initial position
        orb.style.left = Math.random() * 100 + "%";
        orb.style.top = Math.random() * 100 + "%";

        container.appendChild(orb);

        // Animate orb
        gsap.to(orb, {
          x: "random(-100, 100)",
          y: "random(-100, 100)",
          rotation: "random(0, 360)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }
    };

    createOrbs();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };

      // Move orbs based on mouse position
      const orbs = container.querySelectorAll("[class*='orb-']");
      orbs.forEach((orb, index) => {
        const element = orb as HTMLElement;
        const multiplier = (index + 1) * 0.1;

        gsap.to(element, {
          x: mouseRef.current.x * 50 * multiplier,
          y: mouseRef.current.y * 50 * multiplier,
          duration: 2,
          ease: "power2.out",
        });
      });

      // Update container gradient based on mouse position
      const gradientX = (e.clientX / window.innerWidth) * 100;
      const gradientY = (e.clientY / window.innerHeight) * 100;

      container.style.background = `
        radial-gradient(
          circle at ${gradientX}% ${gradientY}%,
          rgba(139, 92, 246, 0.1) 0%,
          rgba(59, 130, 246, 0.05) 25%,
          transparent 50%
        ),
        linear-gradient(
          135deg,
          rgba(139, 92, 246, 0.02) 0%,
          rgba(59, 130, 246, 0.02) 100%
        )
      `;
    };

    // Click handler for ripple effect
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.className =
        "absolute w-2 h-2 bg-white/20 rounded-full pointer-events-none animate-ping";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.transform = "translate(-50%, -50%)";

      document.body.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        document.body.removeChild(ripple);
      }, 1000);

      // Scale animation
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        { scale: 20, opacity: 0, duration: 1, ease: "power2.out" },
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000"
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.02) 0%,
            rgba(59, 130, 246, 0.02) 100%
          )
        `,
      }}
    />
  );
}
