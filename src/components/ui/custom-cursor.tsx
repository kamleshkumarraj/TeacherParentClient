import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Mouse enter handlers
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target &&
        target.tagName &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          (target.classList && target.classList.contains("cursor-pointer")) ||
          (target.closest && target.closest("button")) ||
          (target.closest && target.closest("a")))
      ) {
        setIsHovering(true);
        setCursorText("CLICK");

        gsap.to(cursor, {
          scale: 0.5,
          duration: 0.2,
        });

        gsap.to(follower, {
          scale: 1.5,
          duration: 0.2,
        });
      }

      if (
        target &&
        (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
      ) {
        setIsHovering(true);
        setCursorText("TYPE");

        gsap.to(cursor, {
          scale: 0.3,
          duration: 0.2,
        });

        gsap.to(follower, {
          scale: 1.2,
          duration: 0.2,
        });
      }

      if (
        target &&
        target.classList &&
        target.classList.contains("glass-card")
      ) {
        setIsHovering(true);
        setCursorText("EXPLORE");

        gsap.to(follower, {
          scale: 1.3,
          duration: 0.2,
        });
      }
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");

      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });

      gsap.to(follower, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Mouse down/up handlers
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });

      gsap.to(follower, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: isHovering ? 0.5 : 1,
        duration: 0.1,
      });

      gsap.to(follower, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.1,
      });
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, [isHovering]);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: "-8px",
          top: "-8px",
        }}
      />

      {/* Follower cursor */}
      <div
        ref={followerRef}
        className={`fixed w-8 h-8 border-2 border-white/50 rounded-full pointer-events-none z-[9998] flex items-center justify-center transition-colors duration-200 ${
          isHovering ? "border-primary bg-primary/20" : ""
        }`}
        style={{
          left: "-16px",
          top: "-16px",
        }}
      >
        {cursorText && (
          <span className="text-[8px] font-bold text-white whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
