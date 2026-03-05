import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Download, Upload, Gauge, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function SpeedTest() {
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [speeds, setSpeeds] = useState({
    download: 0,
    upload: 0,
    ping: 0,
  });

  const runSpeedTest = () => {
    setIsRunning(true);
    setIsComplete(false);
    setSpeeds({ download: 0, upload: 0, ping: 0 });

    // Simulate download speed test
    const downloadInterval = setInterval(() => {
      setSpeeds((prev) => {
        const newSpeed = prev.download + Math.random() * 50;
        if (newSpeed >= 850) {
          clearInterval(downloadInterval);
          return { ...prev, download: 850 + Math.random() * 150 };
        }
        return { ...prev, download: newSpeed };
      });
    }, 50);

    // Simulate upload speed test
    setTimeout(() => {
      const uploadInterval = setInterval(() => {
        setSpeeds((prev) => {
          const newSpeed = prev.upload + Math.random() * 30;
          if (newSpeed >= 450) {
            clearInterval(uploadInterval);
            return { ...prev, upload: 450 + Math.random() * 100 };
          }
          return { ...prev, upload: newSpeed };
        });
      }, 50);
    }, 2000);

    // Simulate ping test
    setTimeout(() => {
      const pingInterval = setInterval(() => {
        setSpeeds((prev) => {
          const newPing = prev.ping + Math.random() * 2;
          if (newPing >= 12) {
            clearInterval(pingInterval);
            setIsRunning(false);
            setIsComplete(true);
            return { ...prev, ping: 8 + Math.random() * 4 };
          }
          return { ...prev, ping: newPing };
        });
      }, 100);
    }, 4000);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: isRunning
            ? [
                "radial-gradient(circle at 20% 50%, rgba(91, 141, 238, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(91, 141, 238, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(91, 141, 238, 0.3) 0%, transparent 50%)",
              ]
            : "radial-gradient(circle at 50% 50%, rgba(91, 141, 238, 0.1) 0%, transparent 50%)",
        }}
        transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: isRunning ? 360 : 0 }}
            transition={{ duration: 2, repeat: isRunning ? Infinity : 0, ease: "linear" }}
            className="p-3 bg-primary/10 rounded-xl"
          >
            <Gauge className="h-6 w-6 text-primary" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-foreground">VPN Speed Test</h3>
            <p className="text-sm text-muted-foreground">
              Test your connection speed with Kestrel VPN
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Download Speed */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-primary/10 rounded-lg border border-primary/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Download className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Download</span>
            </div>
            <motion.div
              key={speeds.download}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-foreground"
            >
              {speeds.download.toFixed(0)}
              <span className="text-sm text-primary ml-1">Mbps</span>
            </motion.div>
            {isRunning && speeds.download > 0 && (
              <motion.div
                className="mt-2 h-1 bg-primary/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-light"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(speeds.download / 1000) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </motion.div>

          {/* Upload Speed */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-accent/10 rounded-lg border border-accent/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Upload className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Upload</span>
            </div>
            <motion.div
              key={speeds.upload}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-foreground"
            >
              {speeds.upload.toFixed(0)}
              <span className="text-sm text-accent ml-1">Mbps</span>
            </motion.div>
            {isRunning && speeds.upload > 0 && (
              <motion.div
                className="mt-2 h-1 bg-accent/20 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent-light"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(speeds.upload / 600) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )}
          </motion.div>

          {/* Ping */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-green-500/10 rounded-lg border border-green-500/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Ping</span>
            </div>
            <motion.div
              key={speeds.ping}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-bold text-foreground"
            >
              {speeds.ping.toFixed(0)}
              <span className="text-sm text-green-500 ml-1">ms</span>
            </motion.div>
            {isRunning && speeds.ping > 0 && (
              <motion.div className="mt-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 h-1 bg-green-500/20 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-green-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {!isRunning && !isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Button
                onClick={runSpeedTest}
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Speed Test
              </Button>
            </motion.div>
          )}

          {isRunning && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-flex items-center gap-2 text-primary"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-medium">Testing your connection...</span>
              </motion.div>
            </motion.div>
          )}

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-center gap-2 text-green-500 font-semibold">
                <CheckCircle className="h-5 w-5" />
                <span>Speed test complete!</span>
              </div>
              <Button
                onClick={runSpeedTest}
                variant="outline"
                size="lg"
                className="w-full border-primary/40 hover:border-primary hover:bg-primary/10"
              >
                Run Test Again
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <p className="text-sm text-muted-foreground text-center">
              <span className="text-green-500 font-semibold">Excellent connection!</span> Your VPN
              is providing optimal speeds for streaming, gaming, and browsing.
            </p>
          </motion.div>
        )}
      </div>
    </Card>
  );
}
