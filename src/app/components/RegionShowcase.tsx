import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function RegionShowcase() {
  const regions = [
    { country: "France", flag: "🇫🇷" },
    { country: "United States", flag: "🇺🇸" },
    { country: "The Netherlands", flag: "🇳🇱" },
    { country: "Portugal", flag: "🇵🇹" },
    { country: "Poland", flag: "🇵🇱" },
    { country: "United Kingdom", flag: "🇬🇧" },
    { country: "Australia", flag: "🇦🇺" },
    { country: "Canada", flag: "🇨🇦" },
    { country: "Germany", flag: "🇩🇪" },
    { country: "Singapore", flag: "🇸🇬" },
    { country: "Austria", flag: "🇦🇹" },
    { country: "Belgium", flag: "🇧🇪" },
    { country: "Moldova", flag: "🇲🇩" },
    { country: "Finland", flag: "🇫🇮" },
    { country: "Hong Kong", flag: "🇭🇰" },
    { country: "South Korea", flag: "🇰🇷" },
    { country: "Romania", flag: "🇷🇴" },
    { country: "Spain", flag: "🇪🇸" },
    { country: "Bulgaria", flag: "🇧🇬" },
    { country: "Switzerland", flag: "🇨🇭" },
    { country: "Turkey", flag: "🇹🇷" },
    { country: "Russia", flag: "🇷🇺" },
    { country: "Greece", flag: "🇬🇷" },
    { country: "Japan", flag: "🇯🇵" },
  ];

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
          High-speed VPN coverage in 25+ countries worldwide
        </p>
      </div>

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
                  <p className="font-semibold text-foreground text-sm">{region.country}</p>
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
                  <p className="font-semibold text-foreground text-sm">{region.country}</p>
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

      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
