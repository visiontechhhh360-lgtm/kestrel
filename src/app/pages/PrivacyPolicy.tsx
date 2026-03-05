import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Shield } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: March 2, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6">
                At Kestrel VPN, we are committed to protecting your online privacy and maintaining the
                trust you place in our secure VPN service. This Privacy Policy explains how we collect,
                use, protect, and handle your personal information when you use our fast VPN connection
                services. Our commitment to privacy is fundamental to our business model and operations.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Account Information</h3>
              <p className="text-muted-foreground mb-4">
                When you sign up for Kestrel VPN, we collect minimal personal information necessary to
                create and manage your account:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Email address (for account creation, password recovery, and important service updates)</li>
                <li>Payment information (processed securely through third-party payment processors; we do not store credit card details)</li>
                <li>Account creation date and subscription status</li>
                <li>Username (if you choose to create one)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2.2 Technical Information</h3>
              <p className="text-muted-foreground mb-4">
                To provide our secure VPN service and maintain system integrity, we collect limited
                technical data:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>VPN server connection times (for managing concurrent connections and preventing abuse)</li>
                <li>Total bandwidth usage per session (not linked to specific online activities)</li>
                <li>Operating system and VPN application version (for technical support and compatibility)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">2.3 What We DON'T Collect</h3>
              <p className="text-muted-foreground mb-4">
                In accordance with our strict no-logs policy, we NEVER collect or store:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Your browsing history or online activity</li>
                <li>Websites or applications you access through our VPN</li>
                <li>Original IP addresses once you're connected to our high-speed global servers</li>
                <li>DNS queries or connection timestamps linked to your activity</li>
                <li>Metadata that could be used to identify your online behavior</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                The minimal information we collect is used solely for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  <strong>Service Provision:</strong> Managing your account, processing payments, and
                  providing access to our secure VPN service
                </li>
                <li>
                  <strong>Customer Support:</strong> Responding to your inquiries and troubleshooting
                  technical issues with your fast VPN connection
                </li>
                <li>
                  <strong>Security:</strong> Preventing fraud, abuse, and unauthorized access to our
                  high-speed global servers
                </li>
                <li>
                  <strong>Service Improvement:</strong> Analyzing aggregated, anonymized data to enhance
                  our VPN performance and user experience
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Meeting legal obligations and protecting our legal
                  rights when absolutely necessary
                </li>
                <li>
                  <strong>Communications:</strong> Sending essential service updates, security alerts,
                  and account-related notifications (you can opt out of marketing emails)
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                Kestrel VPN does NOT sell, rent, or share your personal information with third parties
                for marketing purposes. We may share limited information only in these circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third-party companies that help us operate
                  our secure VPN service (e.g., payment processors, hosting providers) under strict
                  confidentiality agreements
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or government
                  authority. However, due to our no-logs policy, we have no activity data to provide
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
                  assets, with continued protection of your privacy
                </li>
                <li>
                  <strong>Safety and Security:</strong> To protect the rights, property, or safety of
                  Kestrel VPN, our users, or the public when legally permitted
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We employ industry-leading security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Military-grade AES-256 encryption for all VPN connections</li>
                <li>Secure, encrypted storage of account information</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Strict access controls limiting employee access to personal data</li>
                <li>Public Wi-Fi protection through advanced encryption protocols</li>
                <li>Automatic kill switch to prevent data leaks if VPN connection drops</li>
                <li>DNS leak protection to ensure your browsing remains private</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground mb-6">
                We retain your personal information only as long as necessary to provide our secure VPN
                service and meet legal obligations. Account information is kept while your subscription
                is active and for a limited period after cancellation (typically 30-90 days) for
                customer support and reactivation purposes. After this period, data is securely deleted
                from our systems.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate information in your account
                  settings
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your account and associated personal
                  data
                </li>
                <li>
                  <strong>Portability:</strong> Request your data in a structured, commonly used format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing of your personal information
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where
                  consent was the basis
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@kestrelvpn.com" className="text-primary hover:underline">
                  privacy@kestrelvpn.com
                </a>
                . We will respond to your request within 30 days.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-6">
                Our website uses minimal cookies for essential functionality (e.g., maintaining login
                sessions, remembering preferences). We do not use tracking cookies or third-party
                analytics that compromise your online privacy. You can control cookie settings through
                your browser.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground mb-6">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices of these external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground mb-6">
                Kestrel VPN is not intended for users under the age of 18. We do not knowingly collect
                personal information from children. If we become aware that a child has provided us with
                personal information, we will take steps to delete such information promptly.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-muted-foreground mb-6">
                Kestrel VPN operates globally with high-speed servers in 60+ countries. Your information
                may be transferred to and processed in countries other than your own. We ensure that all
                data transfers comply with applicable data protection laws and maintain the same level of
                protection outlined in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-6">
                We may update this Privacy Policy periodically to reflect changes in our practices,
                technology, legal requirements, or other factors. We will notify you of significant
                changes via email or through our website. Your continued use of our secure VPN service
                after changes take effect constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data
                practices, please contact us:
              </p>
              <ul className="list-none text-muted-foreground mb-6 space-y-2">
                <li>
                  Email:{" "}
                  <a href="mailto:privacy@kestrelvpn.com" className="text-primary hover:underline">
                    privacy@kestrelvpn.com
                  </a>
                </li>
                <li>
                  Support:{" "}
                  <a href="mailto:support@kestrelvpn.com" className="text-primary hover:underline">
                    support@kestrelvpn.com
                  </a>
                </li>
                <li>Address: 123 Privacy Boulevard, Secure City, SC 12345, United States</li>
              </ul>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <p className="text-foreground mb-2">
                  <strong>Our Commitment to You:</strong>
                </p>
                <p className="text-muted-foreground">
                  At Kestrel VPN, protecting your online privacy is not just a policy—it's our mission.
                  We maintain a strict no-logs policy, employ military-grade encryption, and operate
                  with complete transparency. For more details about our logging practices, please review
                  our{" "}
                  <Link to="/no-logs-policy" className="text-primary hover:underline">
                    No-Logs Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
