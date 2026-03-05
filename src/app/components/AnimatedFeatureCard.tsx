import { motion } from "motion/react";
import { ReactNode } from "react";
import { Card } from "./ui/card";

interface AnimatedFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function AnimatedFeatureCard({ icon, title, description, delay = 0 }: AnimatedFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="relative p-8 h-full bg-gradient-to-br from-card via-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden group">
        {/* Hover gradient effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "linear-gradient(135deg, rgba(91, 141, 238, 0.1), rgba(255, 71, 87, 0.05))",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-primary"
            >
              {icon}
            </motion.div>
          </motion.div>

          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Corner accent */}
        <motion.div
          className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.4 }}
        />
      </Card>
    </motion.div>
  );
}
