import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;

    if (!container || !overlay) return;

    // Page transition animation
    const tl = gsap.timeline();

    // Entrance animation
    tl.fromTo(
      overlay,
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.inOut",
      },
    )
      .fromTo(
        overlay,
        {
          scaleX: 1,
          transformOrigin: "left center",
        },
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0.4,
      )
      .fromTo(
        container,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.2,
      );

    // Stagger animation for child elements
    const elements = container.querySelectorAll(
      ".animate-card, .glass-card, h1, h2, h3, p, button",
    );

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.3,
      },
    );

    return () => {
      tl.kill();
    };
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-gradient-to-r from-primary to-secondary z-[9998] pointer-events-none"
      />

      {/* Page content */}
      <div ref={containerRef} className="relative z-10">
        {children}
      </div>
    </div>
  );
}
