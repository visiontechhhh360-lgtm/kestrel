import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Eye, EyeOff, Shield, Lock, CheckCircle, X } from "lucide-react";

export function NoLogsPolicy() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <EyeOff className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            No-Logs Policy
          </h1>
          <p className="text-lg text-muted-foreground">Last Updated: March 2, 2026</p>
          <p className="text-xl text-foreground mt-4 font-semibold">
            Your Privacy Is Our Priority — We Don't Track, Store, or Log Your Online Activity
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Our Commitment to Zero Logging</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              At Kestrel VPN, we believe that online privacy is a fundamental right. Our strict no-logs
              policy is at the core of our secure VPN service. This policy explains in detail what we do
              NOT collect, what minimal information we DO collect for operational purposes, and how we
              protect your online anonymity. Unlike many VPN providers who claim "no-logs" while still
              collecting extensive data, we provide complete transparency about our practices.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 mt-4">
              <p className="text-foreground font-semibold">
                Bottom Line: When you use Kestrel VPN, your browsing history, online activities, and
                internet behavior remain completely private. We have no data to provide to third parties
                because we don't collect it in the first place.
              </p>
            </div>
          </Card>

          {/* What We DON'T Log */}
          <Card className="p-8 border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <X className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">What We DON'T Log</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Kestrel VPN's secure VPN service is designed from the ground up to protect your online
              privacy. We do NOT collect, log, or store the following information:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Browsing History</h3>
                  <p className="text-muted-foreground text-sm">
                    We never track or record which websites you visit, what pages you view, or what
                    content you access online. Your browsing activity is completely private and never
                    stored on our high-speed global servers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">DNS Queries</h3>
                  <p className="text-muted-foreground text-sm">
                    DNS queries reveal the websites you're trying to access. We do not log DNS requests,
                    ensuring that your destination websites remain private. Our DNS leak protection
                    ensures queries never leave our encrypted tunnel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Original IP Addresses (After Connection)
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Once you connect to our VPN, your real IP address is replaced with one from our
                    server network. We do not store logs that link your original IP address to your VPN
                    activity, protecting your online anonymity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Connection Timestamps</h3>
                  <p className="text-muted-foreground text-sm">
                    We do not log detailed timestamps that could be used to correlate your VPN sessions
                    with specific online activities. Your connection times remain private.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Traffic Data and Content
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We never inspect, monitor, or log the content of your internet traffic. Whether
                    you're streaming, downloading, or browsing, your data remains encrypted and private
                    with our military-grade encryption.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Session Duration</h3>
                  <p className="text-muted-foreground text-sm">
                    We don't track how long you stay connected to our fast VPN connection or when you
                    disconnect. Your usage patterns are not monitored or stored.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Bandwidth Usage Details
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    While we track total bandwidth to manage server capacity, we do NOT log which
                    specific activities consumed bandwidth or link usage to particular sessions or
                    websites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <X className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Metadata</h3>
                  <p className="text-muted-foreground text-sm">
                    We do not collect or store metadata that could reveal your online behavior, such as
                    device information linked to your activities, location data during VPN use, or any
                    identifiable patterns.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* What We DO Collect */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                What We DO Collect (Minimal Data Only)
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              To provide our secure VPN service, prevent abuse, and offer customer support, we collect a
              minimal amount of non-identifying information. This data CANNOT be used to determine your
              browsing activities or track your online behavior:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Account Email Address
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Required for account creation, authentication, password recovery, and sending
                    important service updates. This is not linked to your VPN activity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Payment Information</h3>
                  <p className="text-muted-foreground text-sm">
                    Processed securely by third-party payment processors. We do NOT store full credit
                    card numbers. We keep transaction records for billing purposes and fraud prevention,
                    but this is never linked to your VPN usage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Aggregate Bandwidth Usage
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Total bandwidth used per billing cycle for server capacity planning. This is an
                    aggregate number and is NOT linked to specific activities, websites, or sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Anonymous Performance Data
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Anonymized information about app crashes, connection success rates, and server
                    performance to improve our Service. This data is aggregated and cannot identify
                    individual users or their activities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    VPN Server Location Choice
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We may temporarily store which server location you selected (not what you did while
                    connected) to provide better server recommendations. This data is not permanently
                    logged or linked to specific activities.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Technical Implementation */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                How We Enforce Our No-Logs Policy
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  1. Technical Architecture
                </h3>
                <p className="text-muted-foreground">
                  Our infrastructure is designed to make logging impossible. We use RAM-only servers that
                  automatically wipe all data upon reboot. Our systems are configured to never write
                  sensitive data to hard drives, ensuring that activity logs cannot exist even if
                  someone tried to access our servers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2. Jurisdictional Protection
                </h3>
                <p className="text-muted-foreground">
                  Kestrel VPN is headquartered in a privacy-friendly jurisdiction with strong data
                  protection laws and no mandatory data retention requirements. We are not subject to
                  invasive surveillance laws, allowing us to maintain our strict no-logs policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  3. Military-Grade Encryption
                </h3>
                <p className="text-muted-foreground">
                  All traffic passing through our VPN is encrypted using AES-256 encryption, the same
                  standard used by governments and militaries worldwide. Even if someone intercepted your
                  data, it would be indecipherable without the encryption keys.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  4. Independent Audits
                </h3>
                <p className="text-muted-foreground">
                  We regularly undergo independent third-party security audits to verify our no-logs
                  claims and ensure our infrastructure meets the highest privacy standards. These audits
                  confirm that we don't have the technical capability to log user activity even if we
                  wanted to.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  5. Transparent Warrant Canary
                </h3>
                <p className="text-muted-foreground">
                  We maintain a warrant canary to inform users if we ever receive legal demands for user
                  data. However, due to our no-logs policy, we have no activity data to provide even if
                  legally compelled.
                </p>
              </div>
            </div>
          </Card>

          {/* Why No-Logs Matters */}
          <Card className="p-8 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Why Our No-Logs Policy Matters
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Protection from Surveillance:</strong> Without logs,
                there's no data for governments, ISPs, or hackers to access about your online activities.
                Your browsing remains truly private.
              </p>
              <p>
                <strong className="text-foreground">Legal Requests:</strong> If authorities request user
                data, we can truthfully state that we don't have it. Our no-logs policy protects you and
                us from invasive legal demands.
              </p>
              <p>
                <strong className="text-foreground">Data Breach Protection:</strong> In the unlikely event
                of a security breach, attackers would find no user activity logs to steal. Your privacy
                remains intact even in worst-case scenarios.
              </p>
              <p>
                <strong className="text-foreground">True Online Anonymity:</strong> Our strict no-logs
                policy ensures that your online activities cannot be traced back to you, providing genuine
                online anonymity and protecting your digital identity.
              </p>
            </div>
          </Card>

          {/* Comparison */}
          <Card className="p-8 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Kestrel VPN vs. Other VPN Providers
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-foreground">Feature</th>
                    <th className="text-center py-3 px-4 text-foreground">Kestrel VPN</th>
                    <th className="text-center py-3 px-4 text-foreground">
                      Typical VPN Provider
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Browsing History Logged</td>
                    <td className="text-center py-3 px-4">
                      <X className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">IP Address Logging</td>
                    <td className="text-center py-3 px-4">
                      <X className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Connection Timestamps</td>
                    <td className="text-center py-3 px-4">
                      <X className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">DNS Query Logging</td>
                    <td className="text-center py-3 px-4">
                      <X className="h-5 w-5 text-accent mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Independent Audit</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">RAM-Only Servers</td>
                    <td className="text-center py-3 px-4">
                      <CheckCircle className="h-5 w-5 text-primary mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Final Statement */}
          <Card className="p-8 border-primary/20 bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              Our Promise to You
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Kestrel VPN's no-logs policy is not just a marketing claim—it's a fundamental commitment
              to your online privacy. We've built our entire infrastructure around the principle that
              your internet activities are none of our business. When you use our secure VPN service,
              you can trust that your online anonymity is protected by design, not just by policy.
            </p>
            <p className="text-foreground font-semibold text-center">
              Your privacy is not for sale. It never was, and it never will be.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Link to="/privacy-policy">
                <span className="text-primary hover:underline">Privacy Policy</span>
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/terms-of-service">
                <span className="text-primary hover:underline">Terms of Service</span>
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contact">
                <span className="text-primary hover:underline">Contact Us</span>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
