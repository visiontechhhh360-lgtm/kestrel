import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { FileText } from "lucide-react";

export function TermsOfService() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <FileText className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">Last Updated: March 2, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                Welcome to Kestrel VPN. By accessing or using our secure VPN service, websites,
                applications, or any related services (collectively, the "Service"), you agree to be
                bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do
                not use our Service. These Terms constitute a legally binding agreement between you and
                Kestrel VPN.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-6">
                Kestrel VPN provides a secure VPN service designed to protect your online privacy,
                encrypt your internet connection, and allow you to access content through our high-speed
                global servers in 25+ countries. Our Service includes strong encryption, a strict no-logs
                policy, public Wi-Fi protection, and features to unblock restricted
                content while maintaining your online anonymity.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. Eligibility</h2>
              <p className="text-muted-foreground mb-6">
                You must be at least 18 years old to use our Service. By using Kestrel VPN, you
                represent and warrant that you are of legal age to form a binding contract and meet all
                eligibility requirements. If you are using the Service on behalf of an organization, you
                represent that you have the authority to bind that organization to these Terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Account Registration</h2>
              <p className="text-muted-foreground mb-4">
                To use our secure VPN service, you must create an account by providing:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>A valid email address</li>
                <li>Payment information for your chosen VPN pricing plan</li>
                <li>Any additional information required during registration</li>
              </ul>
              <p className="text-muted-foreground mb-6">
                You are responsible for maintaining the confidentiality of your account credentials and
                for all activities that occur under your account. You agree to notify us immediately of
                any unauthorized use of your account or any other security breach. Kestrel VPN will not
                be liable for any loss or damage arising from your failure to protect your account
                information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Acceptable Use Policy</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Permitted Uses</h3>
              <p className="text-muted-foreground mb-4">You may use our Service to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Protect your online privacy and secure your internet connection</li>
                <li>Encrypt your data when using public Wi-Fi networks</li>
                <li>Access geo-restricted content that you have a legal right to view</li>
                <li>Browse the internet anonymously</li>
                <li>Enhance your digital security and online freedom</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Prohibited Activities</h3>
              <p className="text-muted-foreground mb-4">
                You agree NOT to use our Service for any illegal or unauthorized purposes, including but
                not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>
                  Engaging in illegal activities, including but not limited to hacking, distributing
                  malware, or conducting cyberattacks
                </li>
                <li>Violating copyright laws or intellectual property rights</li>
                <li>
                  Distributing spam, phishing schemes, or engaging in fraudulent activities
                </li>
                <li>Harassment, stalking, or threatening others</li>
                <li>
                  Accessing or attempting to access computer systems without authorization
                </li>
                <li>Violating any local, state, national, or international laws</li>
                <li>
                  Using the Service in a manner that could damage, disable, or impair our servers or
                  networks
                </li>
                <li>Sharing your account credentials with others or reselling VPN access</li>
                <li>
                  Attempting to circumvent usage limits or security measures implemented by Kestrel VPN
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Violation of this Acceptable Use Policy may result in immediate termination of your
                account and Service access without refund. We reserve the right to investigate suspected
                violations and cooperate with law enforcement authorities when legally required.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Subscription and Payment
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">6.1 VPN Pricing Plans</h3>
              <p className="text-muted-foreground mb-4">
                Kestrel VPN offers the following subscription plans:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Monthly Pro Plan: $4.99 per month</li>
                <li>Yearly Pro Plan: $48.99 per year</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Payment Terms</h3>
              <p className="text-muted-foreground mb-6">
                All fees are in U.S. Dollars unless otherwise specified. Payment is due at the time of
                subscription purchase. By providing payment information, you authorize Kestrel VPN (or
                our payment processors) to charge your payment method for the selected plan and any
                applicable taxes. Subscriptions automatically renew unless you cancel before the renewal
                date.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Automatic Renewal</h3>
              <p className="text-muted-foreground mb-6">
                Your subscription will automatically renew at the end of each billing period unless you
                cancel. We will charge your payment method on file at the then-current rate. You will
                receive notification of any price changes before your next billing cycle.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.4 Cancellation</h3>
              <p className="text-muted-foreground mb-6">
                You may cancel your subscription at any time through your account settings or by
                contacting customer support at{" "}
                <a href="mailto:support@kestrelvpn.com" className="text-primary hover:underline">
                  support@kestrelvpn.com
                </a>
                . Cancellation will take effect at the end of your current billing period. You will
                retain access to the Service until that time, but you will not receive a prorated refund
                for the remaining period unless required by law.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.5 Refund Policy</h3>
              <p className="text-muted-foreground mb-6">
                We offer a 30-day money-back guarantee on all VPN pricing plans. If you are not
                satisfied with our secure VPN service within the first 30 days of your initial
                subscription, contact us for a full refund. This guarantee applies only to first-time
                subscribers and does not apply to renewal charges.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Availability</h2>
              <p className="text-muted-foreground mb-6">
                While we strive to provide uninterrupted access to our high-speed global servers, we
                cannot guarantee that the Service will be available at all times. Service availability
                may be affected by factors including maintenance, technical issues, government
                restrictions, or circumstances beyond our control. We are not liable for any temporary
                unavailability of the Service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">8. Privacy and Data</h2>
              <p className="text-muted-foreground mb-6">
                Your use of Kestrel VPN is subject to our{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. We maintain a strict{" "}
                <Link to="/no-logs-policy" className="text-primary hover:underline">
                  No-Logs Policy
                </Link>
                , meaning we do not track, collect, or store your online activity, browsing history, or
                connection logs that could identify your internet usage.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground mb-6">
                All content, features, and functionality of the Service, including but not limited to
                software, text, graphics, logos, and trademarks, are owned by Kestrel VPN or our
                licensors and are protected by copyright, trademark, and other intellectual property
                laws. You may not copy, modify, distribute, sell, or lease any part of our Service or
                software without our explicit written permission.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground mb-6">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, KESTREL VPN DISCLAIMS ALL
                WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL
                BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. WHILE WE IMPLEMENT INDUSTRY-STANDARD
                ENCRYPTION AND SECURITY MEASURES, NO SYSTEM IS ENTIRELY INVULNERABLE.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KESTREL VPN SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE,
                GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM: (A) YOUR USE OR INABILITY TO USE
                THE SERVICE; (B) UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS OR ANY PERSONAL
                INFORMATION STORED THEREIN; (C) INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                SERVICE; OR (D) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE. IN NO EVENT
                SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12)
                MONTHS PRECEDING THE CLAIM.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">12. Indemnification</h2>
              <p className="text-muted-foreground mb-6">
                You agree to defend, indemnify, and hold harmless Kestrel VPN, its affiliates,
                licensors, and service providers, and their respective officers, directors, employees,
                and agents from and against any claims, liabilities, damages, judgments, awards, losses,
                costs, expenses, or fees (including reasonable attorneys' fees) arising out of or
                relating to your violation of these Terms or your use of the Service.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">
                13. Governing Law and Dispute Resolution
              </h2>
              <p className="text-muted-foreground mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the United
                States, without regard to its conflict of law provisions. Any disputes arising from or
                relating to these Terms or the Service shall be resolved through binding arbitration in
                accordance with the American Arbitration Association's rules, except that either party
                may seek injunctive relief in court to protect intellectual property rights.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground mb-6">
                Kestrel VPN reserves the right to modify these Terms at any time. We will notify you of
                significant changes via email or through a prominent notice on our website. Your
                continued use of the Service after changes take effect constitutes acceptance of the
                revised Terms. If you do not agree to the changes, you must discontinue using the
                Service and cancel your subscription.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">15. Termination</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to suspend or terminate your account and access to the Service at
                our sole discretion, without notice, for conduct that we believe violates these Terms,
                our Acceptable Use Policy, or is harmful to other users, us, or third parties, or for
                any other reason. Upon termination, your right to use the Service will immediately cease.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">16. Severability</h2>
              <p className="text-muted-foreground mb-6">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining
                provisions will continue in full force and effect. The invalid or unenforceable provision
                will be replaced with a valid provision that most closely matches the intent of the
                original provision.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">17. Entire Agreement</h2>
              <p className="text-muted-foreground mb-6">
                These Terms, together with our{" "}
                <Link to="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/no-logs-policy" className="text-primary hover:underline">
                  No-Logs Policy
                </Link>
                , constitute the entire agreement between you and Kestrel VPN regarding the use of the
                Service and supersede all prior agreements and understandings.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">18. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-muted-foreground mb-6 space-y-2">
                <li>
                  Email:{" "}
                  <a href="mailto:legal@kestrelvpn.com" className="text-primary hover:underline">
                    legal@kestrelvpn.com
                  </a>
                </li>
                <li>
                  Support:{" "}
                  <a href="mailto:support@kestrelvpn.com" className="text-primary hover:underline">
                    support@kestrelvpn.com
                  </a>
                </li>
                <li>Phone: 0329 0760191</li>
                <li>Address: 123 Privacy Boulevard, Secure City, SC 12345, United States</li>
              </ul>

              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <p className="text-foreground mb-2">
                  <strong>Thank You for Choosing Kestrel VPN</strong>
                </p>
                <p className="text-muted-foreground">
                  By using our secure VPN service, you're taking an important step toward protecting
                  your online privacy. We're committed to providing you with the best fast VPN
                  connection, high-speed global servers, and unwavering commitment to your digital
                  security. If you have any questions, our support team is here to help 24/7.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
