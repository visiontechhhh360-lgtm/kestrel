import { useLayoutEffect } from "react";
import { Outlet, ScrollRestoration, useLocation, useNavigationType } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Helmet } from "../components/Helmet";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";

export function Root() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") {
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, navigationType]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet />
      <ScrollRestoration />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}