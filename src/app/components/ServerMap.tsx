import { motion } from "motion/react";
import { Server, MapPin, Activity } from "lucide-react";
import { Card } from "./ui/card";

export function ServerMap() {
  const serverLocations = [
    { name: "North America", count: 1850, x: 20, y: 35, color: "primary" },
    { name: "Europe", count: 1320, x: 50, y: 30, color: "accent" },
    { name: "Asia Pacific", count: 980, x: 75, y: 45, color: "primary" },
    { name: "South America", count: 380, x: 30, y: 65, color: "accent" },
    { name: "Middle East", count: 290, x: 58, y: 48, color: "primary" },
    { name: "Africa", count: 180, x: 52, y: 58, color: "accent" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Global Infrastructure</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Server Network
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            5000+ high-performance servers strategically placed around the world
          </p>
        </motion.div>

        <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 relative overflow-hidden">
          {/* World Map Visualization */}
          <div className="relative aspect-[2/1] rounded-lg bg-gradient-to-br from-background/50 to-primary/5 border border-primary/10 overflow-hidden">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(91, 141, 238, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(91, 141, 238, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Animated Lines Connecting Points */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="line-gradient-map" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(91, 141, 238, 0)" />
                  <stop offset="50%" stopColor="rgba(91, 141, 238, 0.5)" />
                  <stop offset="100%" stopColor="rgba(91, 141, 238, 0)" />
                </linearGradient>
              </defs>
              {serverLocations.map((_, i) => {
                if (i < serverLocations.length - 1) {
                  const start = serverLocations[i];
                  const end = serverLocations[i + 1];
                  return (
                    <motion.line
                      key={`line-${i}`}
                      x1={`${start.x}%`}
                      y1={`${start.y}%`}
                      x2={`${end.x}%`}
                      y2={`${end.y}%`}
                      stroke="url(#line-gradient-map)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  );
                }
                return null;
              })}
            </svg>

            {/* Server Location Points */}
            {serverLocations.map((location, index) => (
              <motion.div
                key={location.name}
                className="absolute cursor-pointer group"
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.2 }}
              >
                {/* Pulse Animation */}
                <motion.div
                  className={`absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full ${
                    location.color === "primary" ? "bg-primary/30" : "bg-accent/30"
                  }`}
                  animate={{
                    scale: [1, 2, 2],
                    opacity: [0.5, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* Server Dot */}
                <motion.div
                  className={`relative z-10 w-4 h-4 rounded-full ${
                    location.color === "primary" ? "bg-primary" : "bg-accent"
                  } shadow-lg`}
                  animate={{
                    boxShadow: [
                      `0 0 0 0 ${
                        location.color === "primary"
                          ? "rgba(91, 141, 238, 0.7)"
                          : "rgba(255, 71, 87, 0.7)"
                      }`,
                      `0 0 0 8px ${
                        location.color === "primary"
                          ? "rgba(91, 141, 238, 0)"
                          : "rgba(255, 71, 87, 0)"
                      }`,
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-2 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
                >
                  <div className="text-sm font-semibold text-foreground">{location.name}</div>
                  <div className="text-xs text-primary">{location.count} servers</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Activity className="h-3 w-3 text-green-500" />
                    <span className="text-xs text-green-500">Online</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Floating Particles */}
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Server, label: "Total Servers", value: "5000+", color: "primary" },
              { icon: MapPin, label: "Countries", value: "95+", color: "accent" },
              { icon: Activity, label: "Uptime", value: "99.9%", color: "green-500" },
              { icon: Server, label: "Bandwidth", value: "Unlimited", color: "primary" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-4 bg-card/50 border border-primary/20 rounded-lg text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex p-2 bg-primary/10 rounded-lg mb-2"
                >
                  <stat.icon className={`h-5 w-5 text-${stat.color}`} />
                </motion.div>
                <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
