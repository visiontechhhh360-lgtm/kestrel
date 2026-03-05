import { useEffect } from "react";
import { useLocation } from "react-router";

export function Helmet() {
  const location = useLocation();

  useEffect(() => {
    // Set default meta tags
    const setMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const setOgTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update based on route
    if (location.pathname === "/") {
      document.title = "Kestrel VPN - Fast & Secure VPN Service for Privacy & Freedom";
      setMetaTag(
        "description",
        "Experience the fastest and most secure VPN service with Kestrel VPN. Protect your online privacy with military-grade encryption, no-logs policy, and high-speed global servers. Unblock restricted content and secure public Wi-Fi connections."
      );
      setOgTag("og:title", "Kestrel VPN - Fast & Secure VPN Service for Privacy & Freedom");
      setOgTag(
        "og:description",
        "Experience the fastest and most secure VPN service with Kestrel VPN. Protect your online privacy with military-grade encryption, no-logs policy, and high-speed global servers."
      );
    } else if (location.pathname === "/pricing") {
      document.title = "VPN Pricing Plans - Affordable & Flexible | Kestrel VPN";
      setMetaTag(
        "description",
        "Choose from our flexible VPN pricing plans: Weekly Pro Plan at $1.99, Monthly Pro Plan at $4.99, or save with our Yearly Pro Plan at $49.99. Get fast VPN connection, unlimited bandwidth, and global server access with all plans."
      );
      setOgTag("og:title", "VPN Pricing Plans - Affordable & Flexible | Kestrel VPN");
      setOgTag(
        "og:description",
        "Choose from our flexible VPN pricing plans: Weekly, Monthly, or Yearly. Get fast VPN connection, unlimited bandwidth, and global server access."
      );
    } else if (location.pathname === "/contact") {
      document.title = "Contact Us - Get VPN Support & Help | Kestrel VPN";
      setMetaTag(
        "description",
        "Need help with your secure VPN service? Contact Kestrel VPN support team for assistance with setup, troubleshooting, or questions about our high-speed VPN connection and no-logs privacy policy."
      );
      setOgTag("og:title", "Contact Us - Get VPN Support & Help | Kestrel VPN");
      setOgTag(
        "og:description",
        "Need help with your secure VPN service? Contact Kestrel VPN support team for assistance."
      );
    } else if (location.pathname === "/checkout") {
      document.title = "Secure Checkout - Complete Your VPN Purchase | Kestrel VPN";
      setMetaTag(
        "description",
        "Complete your secure VPN service purchase with Kestrel VPN. Military-grade encrypted checkout for our fast VPN connection plans. Choose weekly, monthly, or yearly subscription."
      );
      setOgTag("og:title", "Secure Checkout - Complete Your VPN Purchase | Kestrel VPN");
      setOgTag(
        "og:description",
        "Complete your secure VPN service purchase with military-grade encrypted checkout."
      );
    } else if (location.pathname === "/privacy-policy") {
      document.title = "Privacy Policy - How We Protect Your Data | Kestrel VPN";
      setMetaTag(
        "description",
        "Read Kestrel VPN's Privacy Policy to understand how our secure VPN service protects your online privacy. Learn about our strict no-logs policy, data protection measures, and commitment to user privacy."
      );
      setOgTag("og:title", "Privacy Policy - How We Protect Your Data | Kestrel VPN");
      setOgTag(
        "og:description",
        "Understand how Kestrel VPN protects your online privacy with our comprehensive Privacy Policy and strict no-logs commitment."
      );
    } else if (location.pathname === "/terms-of-service") {
      document.title = "Terms of Service - VPN Usage Guidelines | Kestrel VPN";
      setMetaTag(
        "description",
        "Review Kestrel VPN's Terms of Service for our secure VPN service. Learn about acceptable use, subscription terms, VPN pricing plans, and your rights as a user."
      );
      setOgTag("og:title", "Terms of Service - VPN Usage Guidelines | Kestrel VPN");
      setOgTag(
        "og:description",
        "Review Kestrel VPN's Terms of Service including acceptable use, subscription terms, and user rights."
      );
    } else if (location.pathname === "/no-logs-policy") {
      document.title = "No-Logs Policy - Complete Privacy Guarantee | Kestrel VPN";
      setMetaTag(
        "description",
        "Discover Kestrel VPN's strict no-logs policy. We never track, store, or log your browsing history, IP addresses, or online activity. True privacy with our secure VPN service backed by independent audits."
      );
      setOgTag("og:title", "No-Logs Policy - Complete Privacy Guarantee | Kestrel VPN");
      setOgTag(
        "og:description",
        "Kestrel VPN's strict no-logs policy means we never track, store, or log your online activity. Complete privacy guaranteed."
      );
    }

    setOgTag("og:type", "website");
    setOgTag("og:url", window.location.href);
  }, [location.pathname]);

  return null;
}