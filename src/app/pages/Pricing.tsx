import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Check, Zap, TrendingUp, Trophy, Shield, Lock } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { AnimatedBackground } from "../components/AnimatedBackground";

export function Pricing() {
  const plans = [
    {
      name: "Weekly Pro Plan",
      price: "$1.99",
      period: "per week",
      icon: Zap,
      description: "Perfect for short-term needs or trying out our secure VPN service",
      features: [
        "Unlimited bandwidth and data",
        "High-speed global servers in 60+ countries",
        "Connect up to 10 devices simultaneously",
        "Military-grade AES-256 encryption",
        "Strict no-logs policy for privacy",
        "24/7 customer support",
        "Public Wi-Fi protection",
        "Unblock restricted content",
      ],
      highlight: false,
      popular: false,
    },
    {
      name: "Monthly Pro Plan",
      price: "$4.99",
      period: "per month",
      icon: TrendingUp,
      description: "Most popular choice for ongoing online privacy protection",
      features: [
        "Everything in Weekly Plan",
        "Save 20% compared to weekly billing",
        "Priority customer support",
        "Advanced threat protection",
        "Split tunneling feature",
        "Kill switch for ultimate security",
        "DNS leak protection",
        "Automatic server selection",
      ],
      highlight: true,
      popular: true,
    },
    {
      name: "Yearly Pro Plan",
      price: "$49.99",
      period: "per year",
      icon: Trophy,
      description: "Best value for long-term VPN security and maximum savings",
      features: [
        "Everything in Monthly Plan",
        "Save 58% - Best VPN pricing deal",
        "Dedicated account manager",
        "Premium server access",
        "Enhanced speed optimization",
        "Early access to new features",
        "Extended device connections (15 devices)",
        "Exclusive cyber security updates",
      ],
      highlight: false,
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "What is a VPN and why do I need one?",
      answer:
        "A VPN (Virtual Private Network) encrypts your internet connection, protecting your online privacy and security. Kestrel VPN keeps your browsing private, secures public Wi-Fi connections, and allows you to access content from anywhere in the world.",
    },
    {
      question: "Can I switch plans or cancel anytime?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel your subscription at any time through your account settings. We also offer a 30-day money-back guarantee on all plans.",
    },
    {
      question: "How many devices can I connect?",
      answer:
        "Our Weekly and Monthly plans support up to 10 simultaneous device connections, while the Yearly plan allows up to 15 devices. This covers smartphones, tablets, computers, and more.",
    },
    {
      question: "Do you really keep no logs?",
      answer:
        "Absolutely. We maintain a strict no-logs policy, independently audited and verified. We do not track, collect, or store your browsing history, IP addresses, or online activities.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, and PayPal. All transactions are processed securely with bank-level encryption to protect your payment information.",
    },
    {
      question: "Will a VPN slow down my internet?",
      answer:
        "While encryption can add slight overhead, Kestrel VPN uses optimized high-speed servers to minimize impact. Most users experience minimal speed reduction, and some even see improvements on throttled connections.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section with Abstract Background */}
      <section className="relative min-h-[70vh] py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        {/* Enhanced Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -50, 100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/30 to-pink-500/20 rounded-full mix-blend-screen filter blur-3xl"
            animate={{
              x: [0, -100, 50, 0],
              y: [0, 50, -100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/15 rounded-full mix-blend-screen filter blur-3xl"
            animate={{
              x: [0, 50, -80, 0],
              y: [0, 80, -50, 0],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
</div>
        <ScrollReveal>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-8"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">30-Day Money-Back Guarantee</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
            >
              Simple, Transparent{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Choose the perfect secure VPN service plan for your needs. All plans include unlimited
              bandwidth, high-speed global servers, and our strict no-logs policy.
            </motion.p>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <ScrollReveal key={plan.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: plan.highlight ? -8 : -12, scale: plan.highlight ? 1 : 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card
                      className={`relative p-8 h-full overflow-hidden transition-all duration-300 ${
                        plan.highlight
                          ? "border-primary shadow-2xl shadow-primary/20 lg:scale-105"
                          : "border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                      }`}
                    >
                      {/* Popular Badge */}
                      {plan.popular && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="absolute top-6 right-8 -translate-y-1/2"
                        >
                          <div className="px-4 py-1 bg-gradient-to-r from-accent to-accent-dark rounded-full text-white text-sm font-semibold shadow-lg">
                            MOST POPULAR
                          </div>
                        </motion.div>
                      )}

                      {/* Background Gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: plan.highlight
                            ? "linear-gradient(135deg, rgba(91, 141, 238, 0.1), transparent)"
                            : "linear-gradient(135deg, rgba(91, 141, 238, 0.05), transparent)",
                        }}
                      />

                      {/* Animated Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: plan.highlight ? 0.3 : 0.2 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          background: "radial-gradient(circle at 50% 0%, rgba(91, 141, 238, 0.3), transparent 70%)",
                          filter: "blur(40px)",
                        }}
                      />

                      <div className="relative z-10">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex p-4 rounded-2xl mb-6 ${
                            plan.highlight ? "bg-primary/20" : "bg-primary/10"
                          }`}
                        >
                          <Icon className="h-8 w-8 text-primary" />
                        </motion.div>

                        {/* Plan Name */}
                        <h3 className="text-2xl font-bold text-foreground mb-3">{plan.name}</h3>

                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline gap-2">
                            <motion.span
                              initial={{ scale: 0.5, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                              className={`text-5xl font-bold ${
                                plan.highlight
                                  ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                                  : "text-foreground"
                              }`}
                            >
                              {plan.price}
                            </motion.span>
                          </div>
                          <p className="text-muted-foreground mt-1">{plan.period}</p>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6">{plan.description}</p>

                        {/* CTA Button */}
                        <Link
                          to={`/checkout?plan=${
                            plan.name.toLowerCase().includes("weekly")
                              ? "weekly"
                              : plan.name.toLowerCase().includes("yearly")
                              ? "yearly"
                              : "monthly"
                          }`}
                          className="block mb-6"
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Button
                              className={`w-full ${
                                plan.highlight
                                  ? "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary shadow-lg shadow-primary/20"
                                  : "bg-secondary hover:bg-secondary/90"
                              }`}
                              size="lg"
                            >
                              Get Started
                            </Button>
                          </motion.div>
                        </Link>

                        {/* Features */}
                        <div className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                              className="flex items-start gap-3"
                            >
                              <div
                                className={`flex-shrink-0 mt-0.5 p-1 rounded-full ${
                                  plan.highlight ? "bg-primary/20" : "bg-primary/10"
                                }`}
                              >
                                <Check className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <motion.div
                        className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20"
                        style={{
                          background: plan.highlight
                            ? "radial-gradient(circle, rgba(91, 141, 238, 0.5), transparent)"
                            : "radial-gradient(circle, rgba(91, 141, 238, 0.3), transparent)",
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.3, 0.2],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </Card>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Trust Section */}
          <ScrollReveal delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <div className="flex flex-wrap justify-center gap-8 items-center text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <span>Military-grade encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>No hidden fees</span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about our VPN pricing plans
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-primary/20 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-colors"
                  >
                    <AccordionTrigger className="text-foreground hover:text-primary text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(91, 141, 238, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 71, 87, 0.2) 0%, transparent 50%)",
            backgroundSize: "200% 200%",
          }}
        />

        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex p-4 bg-primary/10 rounded-full mb-8"
            >
              <img src="/logo.png" className="h-12 w-12 text-primary" />
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our support team is here to help you choose the perfect VPN plan for your needs.
            </p>

            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary shadow-xl shadow-primary/20"
                >
                  Contact Us
                </Button>
              </motion.div>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
