import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, Wifi, Globe, Activity, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function ConnectionSimulator() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [dataTransferred, setDataTransferred] = useState(0);
  const [selectedServer, setSelectedServer] = useState("New York, USA");

  const servers = [
    { name: "New York, USA", flag: "🇺🇸", latency: 12 },
    { name: "London, UK", flag: "🇬🇧", latency: 45 },
    { name: "Tokyo, Japan", flag: "🇯🇵", latency: 89 },
    { name: "Sydney, Australia", flag: "🇦🇺", latency: 156 },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected) {
      interval = setInterval(() => {
        setDataTransferred((prev) => prev + Math.random() * 0.5);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isConnected]);

  const handleConnect = () => {
    if (isConnected) {
      setIsConnected(false);
      setDataTransferred(0);
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
      }, 2000);
    }
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-card via-card to-accent/5 border-primary/20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isConnected
            ? [
                "radial-gradient(circle at 0% 0%, rgba(91, 141, 238, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(91, 141, 238, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(91, 141, 238, 0.15) 0%, transparent 50%)",
              ]
            : "radial-gradient(circle at 50% 50%, rgba(91, 141, 238, 0.05) 0%, transparent 50%)",
        }}
        transition={{ duration: 4, repeat: isConnected ? Infinity : 0 }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            animate={{
              scale: isConnected ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: isConnected ? Infinity : 0 }}
            className="inline-flex p-6 bg-primary/10 rounded-full mb-4 relative"
          >
            <Shield className={`h-12 w-12 ${isConnected ? "text-green-500" : "text-primary"}`} />
            {isConnected && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 p-1 bg-green-500 rounded-full"
              >
                <CheckCircle2 className="h-5 w-5 text-white" />
              </motion.div>
            )}
            {/* Pulse Effect */}
            {isConnected && (
              <>
                <motion.div
                  className="absolute inset-0 bg-green-500/30 rounded-full"
                  animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-green-500/30 rounded-full"
                  animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </>
            )}
          </motion.div>

          <h3 className="text-2xl font-bold text-foreground mb-2">
            {isConnecting ? "Connecting..." : isConnected ? "Connected" : "Disconnected"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isConnected
              ? `Securely connected to ${selectedServer}`
              : "Connect to start protecting your privacy"}
          </p>
        </div>

        {/* Server Selection */}
        {!isConnected && !isConnecting && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <p className="text-sm text-muted-foreground mb-3">Select Server Location:</p>
            <div className="grid grid-cols-2 gap-2">
              {servers.map((server) => (
                <motion.button
                  key={server.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedServer(server.name)}
                  className={`p-3 rounded-lg border transition-all text-left ${
                    selectedServer === server.name
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{server.flag}</span>
                      <span className="text-sm font-medium text-foreground">{server.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{server.latency}ms</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Connection Animation */}
        <AnimatePresence mode="wait">
          {isConnecting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-6"
            >
              <div className="space-y-3">
                {["Establishing secure tunnel", "Encrypting connection", "Masking IP address"].map(
                  (step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.5 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                      />
                      <span className="text-sm text-muted-foreground">{step}</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.5 + 0.4 }}
                        className="ml-auto"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </motion.div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connection Stats */}
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-4 mb-6"
          >
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Encryption</span>
              </div>
              <p className="text-sm font-semibold text-foreground">AES-256</p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Activity className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Data</span>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {dataTransferred.toFixed(2)} GB
              </p>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Wifi className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">Protocol</span>
              </div>
              <p className="text-sm font-semibold text-foreground">WireGuard</p>
            </div>
          </motion.div>
        )}

        {/* Connection Button */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={handleConnect}
            size="lg"
            disabled={isConnecting}
            className={`w-full ${
              isConnected
                ? "bg-accent hover:bg-accent-dark"
                : "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary"
            }`}
          >
            {isConnecting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  <Globe className="h-5 w-5" />
                </motion.div>
                Connecting...
              </>
            ) : isConnected ? (
              <>
                <Shield className="h-5 w-5 mr-2" />
                Disconnect
              </>
            ) : (
              <>
                <Shield className="h-5 w-5 mr-2" />
                Connect Now
              </>
            )}
          </Button>
        </motion.div>

        {/* Security Notice */}
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-green-500 font-semibold mb-1">You're protected</p>
                <p className="text-muted-foreground">
                  Your IP address is hidden and your connection is encrypted with military-grade
                  security.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </Card>
  );
}
