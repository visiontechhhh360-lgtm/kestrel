import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Lock, Shield, User, CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { submitJazzCashForm } from "../utils/jazzcash";

const PLANS = {
  monthly: { name: "Monthly Pro Plan", price: 4.99, period: "month" },
  yearly:  { name: "Yearly Pro Plan",  price: 48.99, period: "year" },
};

export function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planKey = searchParams.get("plan") === "yearly" ? "yearly" : "monthly";
  const selectedPlan = PLANS[planKey];

  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => { window.scrollTo(0, 0); }, []);

  function validate() {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim())    e.firstName    = "First name is required";
    if (!formData.lastName.trim())     e.lastName     = "Last name is required";
    if (!formData.email.trim())        e.email        = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                       e.email        = "Enter a valid email address";
    if (!formData.confirmEmail.trim()) e.confirmEmail = "Please confirm your email";
    else if (formData.email !== formData.confirmEmail)
                                       e.confirmEmail = "Emails do not match";
    if (!formData.agreeTerms)          e.agreeTerms   = "You must agree to the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  async function handleProceedToPayment() {
    if (!validate()) return;

    setIsProcessing(true);
    try {
      const res = await fetch("/api/jazzcash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: planKey,
          firstName: formData.firstName,
          lastName:  formData.lastName,
          email:     formData.email,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Payment initiation failed");
      }

      const { gatewayUrl, params } = await res.json();
      submitJazzCashForm(gatewayUrl, params);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Secure Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase over a secure, encrypted connection</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Your Details</h2>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" value={formData.firstName}
                        onChange={handleChange} placeholder="John"
                        className={`mt-1 ${errors.firstName ? "border-destructive" : ""}`} />
                      {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" value={formData.lastName}
                        onChange={handleChange} placeholder="Doe"
                        className={`mt-1 ${errors.lastName ? "border-destructive" : ""}`} />
                      {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email}
                      onChange={handleChange} placeholder="john@example.com"
                      className={`mt-1 ${errors.email ? "border-destructive" : ""}`} />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    <p className="text-sm text-muted-foreground mt-1">Account credentials will be sent here</p>
                  </div>

                  <div>
                    <Label htmlFor="confirmEmail">Confirm Email *</Label>
                    <Input id="confirmEmail" name="confirmEmail" type="email" value={formData.confirmEmail}
                      onChange={handleChange} placeholder="john@example.com"
                      className={`mt-1 ${errors.confirmEmail ? "border-destructive" : ""}`} />
                    {errors.confirmEmail && <p className="text-sm text-destructive mt-1">{errors.confirmEmail}</p>}
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <Checkbox id="agreeTerms" checked={formData.agreeTerms}
                      onCheckedChange={v => {
                        setFormData(prev => ({ ...prev, agreeTerms: !!v }));
                        if (errors.agreeTerms) setErrors(prev => ({ ...prev, agreeTerms: "" }));
                      }}
                      className={errors.agreeTerms ? "border-destructive" : ""} />
                    <div>
                      <label htmlFor="agreeTerms" className="text-sm text-muted-foreground cursor-pointer">
                        I agree to the{" "}
                        <a href="/terms-of-service" target="_blank" className="text-primary hover:underline">Terms of Service</a>,{" "}
                        <a href="/privacy-policy" target="_blank" className="text-primary hover:underline">Privacy Policy</a>, and{" "}
                        <a href="/no-logs-policy" target="_blank" className="text-primary hover:underline">No-Logs Policy</a>
                      </label>
                      {errors.agreeTerms && <p className="text-sm text-destructive mt-1">{errors.agreeTerms}</p>}
                    </div>
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 gap-2"
                    onClick={handleProceedToPayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Redirecting to payment…" : (
                      <>Proceed to Payment <ArrowRight className="h-4 w-4" /></>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" />
                    <span>You will be redirected to a secure payment page to enter your card details</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-primary/20 sticky top-20">
                <h3 className="font-bold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Plan</span>
                    <span className="font-medium">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Billing</span>
                    <span>${selectedPlan.price}/{selectedPlan.period}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="text-accent font-bold text-xl">${selectedPlan.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Shield className="h-4 w-4" />
                    <span className="font-semibold text-sm">What's Included</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>✓ Unlimited bandwidth</li>
                    <li>✓ 30+ locations in 25+ countries</li>
                    <li>✓ AES-256 encryption</li>
                    <li>✓ Strict no-logs policy</li>
                    <li>✓ 24/7 customer support</li>
                    <li>✓ Multiple device support</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" />
                  <span>256-bit SSL encrypted checkout</span>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
