import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function RegionShowcase() {
  const regions = [
    { country: "United States", flag: "🇺🇸", servers: 1200 },
    { country: "United Kingdom", flag: "🇬🇧", servers: 450 },
    { country: "Germany", flag: "🇩🇪", servers: 380 },
    { country: "France", flag: "🇫🇷", servers: 320 },
    { country: "Canada", flag: "🇨🇦", servers: 280 },
    { country: "Australia", flag: "🇦🇺", servers: 250 },
    { country: "Japan", flag: "🇯🇵", servers: 290 },
    { country: "Singapore", flag: "🇸🇬", servers: 180 },
    { country: "Netherlands", flag: "🇳🇱", servers: 220 },
    { country: "Sweden", flag: "🇸🇪", servers: 150 },
    { country: "Switzerland", flag: "🇨🇭", servers: 140 },
    { country: "Spain", flag: "🇪🇸", servers: 200 },
    { country: "Italy", flag: "🇮🇹", servers: 180 },
    { country: "Brazil", flag: "🇧🇷", servers: 160 },
    { country: "India", flag: "🇮🇳", servers: 240 },
    { country: "South Korea", flag: "🇰🇷", servers: 190 },
    { country: "Hong Kong", flag: "🇭🇰", servers: 120 },
    { country: "United Arab Emirates", flag: "🇦🇪", servers: 110 },
    { country: "Mexico", flag: "🇲🇽", servers: 130 },
    { country: "Argentina", flag: "🇦🇷", servers: 90 },
    { country: "South Africa", flag: "🇿🇦", servers: 85 },
    { country: "Norway", flag: "🇳🇴", servers: 100 },
    { country: "Denmark", flag: "🇩🇰", servers: 95 },
    { country: "Finland", flag: "🇫🇮", servers: 88 },
  ];

  // Duplicate regions for seamless loop
  const duplicatedRegions = [...regions, ...regions, ...regions];

  return (
    <div className="relative w-full py-12 overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe className="h-6 w-6 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-bold text-foreground">Global Server Network</h2>
        </div>
        <p className="text-center text-muted-foreground">
          Connect to our high-speed servers in 95+ countries worldwide
        </p>
      </div>

      {/* Top Row - Moving Left */}
      <div className="relative mb-4">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedRegions.slice(0, duplicatedRegions.length / 2).map((region, index) => (
            <motion.div
              key={`top-${index}`}
              className="flex-shrink-0 w-64 px-6 py-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/40 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: "linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.5))",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{region.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{region.country}</p>
                    <p className="text-xs text-primary">{region.servers} servers</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Moving Right */}
      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedRegions.slice(duplicatedRegions.length / 2).map((region, index) => (
            <motion.div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-64 px-6 py-4 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg hover:border-primary/40 transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: "linear-gradient(135deg, rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.5))",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{region.flag}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{region.country}</p>
                    <p className="text-xs text-primary">{region.servers} servers</p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays for Fade Effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
