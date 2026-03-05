import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Smartphone, Monitor, Tablet } from "lucide-react";

export function AppMockup() {
  const devices = [
    {
      type: "mobile",
      icon: Smartphone,
      title: "Mobile App",
      description: "iOS & Android",
      image: "https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlJTIwdnBufGVufDF8fHx8MTc3MjY0Njk5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      delay: 0,
    },
    {
      type: "desktop",
      icon: Monitor,
      title: "Desktop App",
      description: "Windows & macOS",
      image: "https://images.unsplash.com/photo-1766171359875-73155eff7f66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHNjcmVlbiUyMHZwbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI2NDY5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      delay: 0.2,
    },
    {
      type: "tablet",
      icon: Tablet,
      title: "Tablet App",
      description: "iPad & Android Tablets",
      image: "https://images.unsplash.com/photo-1740721455292-e5cd29544381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzcyNjQ2OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            <Smartphone className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Available on All Devices</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Seamless Experience
            <br />
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Across All Platforms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download our intuitive VPN app for your device and protect your privacy with one tap
          </p>
        </motion.div>

        {/* Device Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={device.type}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: device.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="relative bg-gradient-to-br from-card via-card to-primary/5 border border-primary/20 rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-all hover:shadow-2xl hover:shadow-primary/10">
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 bg-primary/10 rounded-xl"
                  >
                    <device.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                </div>

                {/* Device Info */}
                <div className="relative z-10 mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{device.title}</h3>
                  <p className="text-sm text-muted-foreground">{device.description}</p>
                </div>

                {/* Mockup Image */}
                <motion.div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={device.image}
                    alt={device.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  
                  {/* Animated Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: device.delay + 0.3 }}
                    className="absolute top-3 right-3 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white"
                  >
                    Available Now
                  </motion.div>
                </motion.div>

                {/* Features List */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: device.delay + 0.4 }}
                  className="relative z-10 mt-4 space-y-2"
                >
                  {[
                    "One-tap connect",
                    "Auto-connect on startup",
                    "Kill switch protection",
                  ].map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: device.delay + 0.5 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Hover Accent */}
                <motion.div
                  className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.5 }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-xl"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-xl"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5 + 1,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "App Rating", value: "4.8/5" },
            { label: "Total Downloads", value: "10M+" },
            { label: "Active Users", value: "5M+" },
            { label: "Device Support", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 bg-card/50 border border-primary/20 rounded-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="text-3xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
