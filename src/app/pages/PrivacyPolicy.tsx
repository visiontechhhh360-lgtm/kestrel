import { Card } from "../components/ui/card";
import { Shield } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="w-full">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last Updated on: February 20, 2025</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-primary/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-8">
                At Kestrel VPN, your security and confidentiality is at the core of all our efforts. Our
                mission and end goal is the privacy of our end users by providing best in class seamless
                VPN services. This Privacy Policy contains types of information that are collected and
                recorded by Kestrel VPN and how it is used.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-8">
                Kestrel VPN is dedicated to protect end user privacy. Our core operations focus on a
                strict no-log policy, and as such we do not collect, store, share or transfer any data
                related to the end user&apos;s online activities, browsing history, or personal data. This
                ensures your protected and guarded online presence all time every time 24/7 at just click
                of a button. We assure our customers that their activities and identities remain private,
                anonymous and secure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Collected Information</h2>
              <p className="text-muted-foreground mb-4">
                Our commitment to the users based on a no-log policy extends to every facet of our
                services. As a principal we do not ask, store, or require any personal information
                related to end user online activities. However, for service improvement and troubleshooting
                purposes (if the end user contacts us for resolution of complaint or any other issue
                encountered), we may collect required (need to know minimal information) necessary for
                service delivery, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
                <li>Email address (for account management)</li>
                <li>Payment information (handled by Apple Pay)</li>
                <li>
                  Basic Application connection information (excluding browsing history and traffic data)
                  solely for the purpose of maintaining service quality and performance.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Safeguarding Under Age Children</h2>
              <p className="text-muted-foreground mb-8">
                Our VPN services are not intended for underage children (Under 18). Therefore, if you
                believe that we have inadvertently acquired information from an underage child then please
                feel free to approach our support account to remove any collected information.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">How Your Information is Used?</h2>
              <p className="text-muted-foreground mb-4">
                We do not share, sell, or trade any user personal, private of financial information with
                third parties. Any information shared with third parties is strictly for provision of
                desired VPN services (such as payment processing for PRO Plan). Any other information we
                collect is used solely for following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-8 space-y-2">
                <li>In App feature set and VPN service improvement.</li>
                <li>Account management.</li>
                <li>Customer support.</li>
                <li>Development of new features and services.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Safeguarding Personal Information</h2>
              <p className="text-muted-foreground mb-8">
                At Kestrel VPN we endeavour to provide best in class VPN services while employing robust
                security measures to protect information leakage. Disclosure of personal information is
                impossible and our core business asset. We may modify and update our Privacy Policy as
                per the demands of Apple App Store. We will notify our beloved customers of any changes
                made by us by publishing new Privacy Policy through this page.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Deletion of Account</h2>
              <p className="text-muted-foreground mb-8">
                Account deletion can be done by the user through in App menu. No information whatsoever
                will be kept at our end.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground mb-8">
                Policy updates will be published through this page for the information of our beloved
                customers.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">Terms of Use</h2>
              <ul className="list-none text-muted-foreground mb-8 space-y-3">
                <li>
                  Apple :{" "}
                  <a
                    href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
                  </a>
                </li>
                <li>
                  Microsoft:{" "}
                  <a
                    href="https://support.microsoft.com/en-us/windows/microsoft-software-license-terms-e26eedad-97a2-5250-2670-aad156b654bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    https://support.microsoft.com/en-us/windows/microsoft-software-license-terms-e26eedad-97a2-5250-2670-aad156b654bd
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any query about this Privacy Policy, feel free to contact us at{" "}
                <a href="mailto:support@kestrelvpn.com" className="text-primary hover:underline">
                  support@kestrelvpn.com
                </a>
                .
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
