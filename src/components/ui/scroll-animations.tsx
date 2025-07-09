import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      // Fade in animations for cards
      gsap.utils.toArray(".glass-card").forEach((card: any) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Slide in animations for text content
      gsap.utils.toArray("h1, h2, h3").forEach((heading: any) => {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Progress bar animations
      gsap.utils.toArray(".progress-bar, .w-32").forEach((bar: any) => {
        const width = bar.style.width || "0%";
        gsap.fromTo(
          bar,
          {
            width: "0%",
          },
          {
            width: width,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Number counter animations
      gsap.utils.toArray(".metric-value").forEach((element: any) => {
        const finalValue = parseFloat(
          element.textContent?.replace(/[^0-9.]/g, "") || "0",
        );

        gsap.fromTo(
          { value: 0 },
          {
            value: finalValue,
            duration: 2,
            ease: "power2.out",
            onUpdate: function () {
              const current = this.targets()[0].value;
              if (element.textContent?.includes("%")) {
                element.textContent = current.toFixed(1) + "%";
              } else if (element.textContent?.includes(",")) {
                element.textContent = Math.floor(current).toLocaleString();
              } else {
                element.textContent = Math.floor(current).toString();
              }
            },
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Parallax effect for hero sections
      gsap.utils.toArray(".hero-parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Scale animations for images (excluding hero images)
      gsap.utils
        .toArray("img:not(.hero-image):not([class*='hero'])")
        .forEach((img: any) => {
          gsap.fromTo(
            img,
            {
              scale: 1.1,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });

      // Stagger animations for lists and grids
      gsap.utils.toArray(".grid").forEach((grid: any) => {
        const children = grid.children;
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: grid,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Text reveal animations
      gsap.utils.toArray("p").forEach((paragraph: any) => {
        gsap.fromTo(
          paragraph,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraph,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Button hover animations
      gsap.utils.toArray("button").forEach((button: any) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(button, {
          scale: 1.05,
          duration: 0.2,
          ease: "power2.out",
        });

        button.addEventListener("mouseenter", () => tl.play());
        button.addEventListener("mouseleave", () => tl.reverse());
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
