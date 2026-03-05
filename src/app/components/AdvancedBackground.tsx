import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function AdvancedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate mesh gradient points
  const meshPoints = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 300 + 200,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? "primary" : i % 3 === 1 ? "accent" : "purple",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Mesh Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(91, 141, 238, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${30 + mousePosition.x * -10}% ${70 + mousePosition.y * -10}%, rgba(255, 71, 87, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${70 + mousePosition.x * 10}% ${30 + mousePosition.y * 10}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Gradient Orbs */}
      {meshPoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            width: point.size,
            height: point.size,
            background:
              point.color === "primary"
                ? "radial-gradient(circle, rgba(91, 141, 238, 0.3) 0%, transparent 70%)"
                : point.color === "accent"
                ? "radial-gradient(circle, rgba(255, 71, 87, 0.25) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: point.duration,
            repeat: Infinity,
            delay: point.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(91, 141, 238, 0.5)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 71, 87, 0.5)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }, (_, i) => (
          <motion.path
            key={i}
            d={`M ${i * 200} 0 Q ${i * 200 + 100} ${500 + i * 50} ${i * 200 + 200} 1000`}
            stroke="url(#line-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
            transition={{
              pathLength: { duration: 3, repeat: Infinity, delay: i * 0.3 },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.3 },
            }}
          />
        ))}
      </svg>

      {/* Hexagon Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%235B8DEE' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(91, 141, 238, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 141, 238, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner Glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full"
        style={{ filter: "blur(100px)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 rounded-full"
        style={{ filter: "blur(100px)" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
