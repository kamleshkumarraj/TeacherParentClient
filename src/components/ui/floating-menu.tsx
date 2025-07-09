import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  MessageCircle,
  Share2,
  BookmarkPlus,
  Download,
  Settings,
  HelpCircle,
  Zap,
  Plus,
  X,
} from "lucide-react";

interface FloatingAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action: () => void;
  color: string;
}

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement[]>([]);

  const floatingActions: FloatingAction[] = [
    {
      icon: MessageCircle,
      label: "Quick Chat",
      action: () => console.log("Opening chat..."),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Share2,
      label: "Share Page",
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: "Educational Transparency Platform",
            url: window.location.href,
          });
        }
      },
      color: "from-green-500 to-green-600",
    },
    {
      icon: BookmarkPlus,
      label: "Save Page",
      action: () => {
        localStorage.setItem("savedPage", window.location.pathname);
        alert("Page saved to bookmarks!");
      },
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Download,
      label: "Download Report",
      action: () => console.log("Downloading report..."),
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Settings,
      label: "Quick Settings",
      action: () => console.log("Opening settings..."),
      color: "from-gray-500 to-gray-600",
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      action: () => console.log("Opening help..."),
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      // Animate actions in
      actionsRef.current.forEach((action, index) => {
        if (action) {
          gsap.fromTo(
            action,
            {
              scale: 0,
              rotation: 180,
              opacity: 0,
            },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.3,
              delay: index * 0.05,
              ease: "back.out(1.7)",
            },
          );
        }
      });
    } else {
      // Animate actions out
      actionsRef.current.forEach((action, index) => {
        if (action) {
          gsap.to(action, {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 0.2,
            delay: (actionsRef.current.length - index - 1) * 0.03,
            ease: "back.in(1.7)",
          });
        }
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    // Animate main button
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        rotation: isOpen ? 0 : 45,
        scale: isOpen ? 1 : 1.1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating actions */}
      <div className="relative">
        {floatingActions.map((action, index) => {
          const angle = (index / floatingActions.length) * Math.PI * 2;
          const radius = 80;
          const x = Math.cos(angle - Math.PI / 2) * radius;
          const y = Math.sin(angle - Math.PI / 2) * radius;

          return (
            <div
              key={index}
              ref={(el) => {
                if (el) actionsRef.current[index] = el;
              }}
              className={`absolute w-12 h-12 bg-gradient-to-r ${action.color} rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 group`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                visibility: isOpen ? "visible" : "hidden",
              }}
              onClick={action.action}
            >
              <action.icon className="w-6 h-6 text-white" />

              {/* Tooltip */}
              <div className="absolute right-full mr-3 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {action.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main toggle button */}
      <button
        ref={menuRef}
        onClick={toggleMenu}
        className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-2xl group relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />

        {/* Icon */}
        <div className="relative z-10">
          {isOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Plus className="w-8 h-8 text-white" />
          )}
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />

        {/* Lightning effect */}
        <div className="absolute top-1 right-1">
          <Zap className="w-4 h-4 text-yellow-300 opacity-70 animate-pulse" />
        </div>
      </button>
    </div>
  );
}
