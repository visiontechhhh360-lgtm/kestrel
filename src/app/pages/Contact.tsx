import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";

export function Contact() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@kestrelvpn.com",
      description: "Get a response within 24 hours",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm EST",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Privacy Boulevard",
      description: "Secure City, SC 12345, USA",
      color: "from-purple-500 to-pink-500",
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
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(124, 58, 237, 0.1) 25%, rgba(124, 58, 237, 0.1) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.1) 75%, rgba(124, 58, 237, 0.1) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(124, 58, 237, 0.1) 25%, rgba(124, 58, 237, 0.1) 26%, transparent 27%, transparent 74%, rgba(124, 58, 237, 0.1) 75%, rgba(124, 58, 237, 0.1) 76%, transparent 77%, transparent)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <ScrollReveal className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full mb-8 hover:border-cyan-500/60 transition-all duration-300"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative flex h-2 w-2"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </motion.span>
            <span className="text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
              We're Here to Help
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            Get in Touch With
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Team
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about Kestrel VPN? Need support? Or just want to say hello? Reach out to our team
            and we'll get back to you as soon as possible.
          </motion.p>
        </ScrollReveal>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-cyan-500/20 to-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollReveal key={info.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <Card className={`relative p-8 h-full bg-gradient-to-br ${info.color}/10 border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300 hover:shadow-xl overflow-hidden`}>
                      {/* Glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${info.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                      />

                      <div className="relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                          className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${info.color}/20`}
                        >
                          <Icon className={`h-8 w-8 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} />
                        </motion.div>

                        <h3 className="text-2xl font-bold text-white mb-3">{info.title}</h3>
                        <p className="text-white font-semibold text-lg mb-2">{info.content}</p>
                        <p className="text-slate-400">{info.description}</p>
                      </div>

                      {/* Corner Accent */}
                      <motion.div
                        className={`absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-20 bg-gradient-to-bl ${info.color}`}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                    </Card>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-pink-500/10 rounded-full mix-blend-screen filter blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full mb-6 backdrop-blur-xl"
            >
              <Mail className="h-4 w-4 text-purple-400" />
              <span className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Send us a Message
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Quick Contact Form
            </h2>
            <p className="text-lg text-slate-400">
              Fill out the form below and we'll respond to you within 24 hours
            </p>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-xl">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/50 rounded-lg flex items-center gap-3"
                >
                  <Check className="h-6 w-6 text-emerald-400" />
                  <div>
                    <p className="font-semibold text-emerald-400">Message sent successfully!</p>
                    <p className="text-sm text-emerald-400/80">We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Your Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`bg-slate-700/50 border ${
                      errors.name ? "border-red-500/50" : "border-slate-600/50"
                    } text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:bg-slate-700/80 transition-all`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`bg-slate-700/50 border ${
                      errors.email ? "border-red-500/50" : "border-slate-600/50"
                    } text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:bg-slate-700/80 transition-all`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={`bg-slate-700/50 border ${
                      errors.subject ? "border-red-500/50" : "border-slate-600/50"
                    } text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:bg-slate-700/80 transition-all`}
                  />
                  {errors.subject && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.subject}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-semibold text-white mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className={`bg-slate-700/50 border ${
                      errors.message ? "border-red-500/50" : "border-slate-600/50"
                    } text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:bg-slate-700/80 transition-all resize-none`}
                  />
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 shadow-2xl shadow-cyan-500/40 text-white font-bold text-lg py-6 border-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-block mr-2"
                        >
                          ⏳
                        </motion.span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2 inline" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  time: "24 Hours",
                  title: "Quick Response",
                  description: "We respond to all inquiries within 24 hours",
                  icon: "⚡",
                },
                {
                  time: "24/7",
                  title: "Dedicated Support",
                  description: "Our support team is available round the clock",
                  icon: "🛡️",
                },
                {
                  time: "100%",
                  title: "Satisfaction",
                  description: "We're committed to solving your issue completely",
                  icon: "✨",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-5xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.time}</h3>
                  <p className="text-lg font-semibold text-cyan-400 mb-2">{item.title}</p>
                  <p className="text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}