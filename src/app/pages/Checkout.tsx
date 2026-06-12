import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { CreditCard, Lock, Shield, User, CheckCircle } from "lucide-react";
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

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    agreeTerms: false,
  });

  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => { window.scrollTo(0, 0); }, [step]);

  // ─── Validation ──────────────────────────────────────────────────────────

  function validateDetails() {
    const e: Record<string, string> = {};
    if (!details.firstName.trim())  e.firstName    = "First name is required";
    if (!details.lastName.trim())   e.lastName     = "Last name is required";
    if (!details.email.trim())      e.email        = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email))
                                    e.email        = "Enter a valid email address";
    if (!details.confirmEmail.trim()) e.confirmEmail = "Please confirm your email";
    else if (details.email !== details.confirmEmail)
                                    e.confirmEmail = "Emails do not match";
    if (!details.agreeTerms)        e.agreeTerms   = "You must agree to the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateCard() {
    const e: Record<string, string> = {};
    const cleaned = card.cardNumber.replace(/\s/g, "");
    if (!cleaned)                           e.cardNumber = "Card number is required";
    else if (!/^\d{13,19}$/.test(cleaned)) e.cardNumber = "Enter a valid card number";
    if (!card.cardName.trim())             e.cardName   = "Name on card is required";
    if (!card.cardExpiry)                  e.cardExpiry = "Expiry date is required";
    else if (!/^\d{2}\/\d{2}$/.test(card.cardExpiry)) e.cardExpiry = "Use MM/YY format";
    else {
      const [mm, yy] = card.cardExpiry.split("/").map(Number);
      const now = new Date();
      const expYear = 2000 + yy;
      const expMonth = mm;
      if (mm < 1 || mm > 12) e.cardExpiry = "Invalid month";
      else if (expYear < now.getFullYear() || (expYear === now.getFullYear() && expMonth < now.getMonth() + 1))
        e.cardExpiry = "Card has expired";
    }
    if (!card.cardCvv)                    e.cardCvv = "CVV is required";
    else if (!/^\d{3,4}$/.test(card.cardCvv)) e.cardCvv = "Enter a valid CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  // ─── Input handlers ───────────────────────────────────────────────────────

  function handleDetailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setDetails(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  function handleCardChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    let v = value;

    if (name === "cardNumber") {
      v = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19);
    }
    if (name === "cardExpiry") {
      v = value.replace(/\D/g, "").replace(/^(\d{2})(\d)/, "$1/$2").slice(0, 5);
    }
    if (name === "cardCvv") {
      v = value.replace(/\D/g, "").slice(0, 4);
    }

    setCard(prev => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  }

  // ─── Step handlers ────────────────────────────────────────────────────────

  function handleContinueToCard() {
    if (validateDetails()) setStep(2);
  }

  async function handlePayNow() {
    if (!validateCard()) return;

    setIsProcessing(true);
    try {
      const res = await fetch("/api/jazzcash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: planKey,
          firstName: details.firstName,
          lastName:  details.lastName,
          email:     details.email,
          cardNumber: card.cardNumber,
          cardExpiry: card.cardExpiry,
          cardCvv:    card.cardCvv,
          cardName:   card.cardName,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Payment initiation failed");
      }

      const { gatewayUrl, params } = await res.json();
      submitJazzCashForm(gatewayUrl, params);
      // Browser navigates away — no need to reset state
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
      setIsProcessing(false);
    }
  }

  // ─── Success (step 3 — shown only if navigated back manually) ────────────

  if (step === 3) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center px-4 py-16">
        <Card className="max-w-2xl w-full p-8 text-center border-primary/20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-muted-foreground mb-6">
            Your {selectedPlan.name} is now active. Check your email for setup instructions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => navigate("/")}>
            Return Home
          </Button>
        </Card>
      </div>
    );
  }

  // ─── Layout ───────────────────────────────────────────────────────────────

  return (
    <div className="w-full">
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Secure Checkout</h1>
          <p className="text-muted-foreground">Complete your purchase over a secure, encrypted connection</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ── Form Column ── */}
            <div className="lg:col-span-2">

              {/* Progress bar */}
              <div className="flex items-center justify-center mb-8">
                {[1, 2].map((n, i) => (
                  <div key={n} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-colors ${
                      step >= n ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}>
                      {n}
                    </div>
                    {i < 1 && <div className={`h-1 w-16 transition-colors ${step >= 2 ? "bg-primary" : "bg-muted"}`} />}
                  </div>
                ))}
              </div>

              {/* ── Step 1: Personal Details ── */}
              {step === 1 && (
                <Card className="p-8 border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Your Details</h2>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" value={details.firstName}
                          onChange={handleDetailChange} placeholder="John"
                          className={`mt-1 ${errors.firstName ? "border-destructive" : ""}`} />
                        {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" value={details.lastName}
                          onChange={handleDetailChange} placeholder="Doe"
                          className={`mt-1 ${errors.lastName ? "border-destructive" : ""}`} />
                        {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={details.email}
                        onChange={handleDetailChange} placeholder="john@example.com"
                        className={`mt-1 ${errors.email ? "border-destructive" : ""}`} />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                      <p className="text-sm text-muted-foreground mt-1">Account credentials will be sent here</p>
                    </div>

                    <div>
                      <Label htmlFor="confirmEmail">Confirm Email *</Label>
                      <Input id="confirmEmail" name="confirmEmail" type="email" value={details.confirmEmail}
                        onChange={handleDetailChange} placeholder="john@example.com"
                        className={`mt-1 ${errors.confirmEmail ? "border-destructive" : ""}`} />
                      {errors.confirmEmail && <p className="text-sm text-destructive mt-1">{errors.confirmEmail}</p>}
                    </div>

                    <div className="flex items-start gap-3 pt-1">
                      <Checkbox id="agreeTerms" checked={details.agreeTerms}
                        onCheckedChange={v => {
                          setDetails(prev => ({ ...prev, agreeTerms: !!v }));
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

                    <Button type="button" onClick={handleContinueToCard} size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Continue to Payment
                    </Button>
                  </div>
                </Card>
              )}

              {/* ── Step 2: Card Details ── */}
              {step === 2 && (
                <Card className="p-8 border-primary/20">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Payment Details</h2>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input id="cardNumber" name="cardNumber" value={card.cardNumber}
                        onChange={handleCardChange} placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className={`mt-1 font-mono tracking-wider ${errors.cardNumber ? "border-destructive" : ""}`} />
                      {errors.cardNumber && <p className="text-sm text-destructive mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div>
                      <Label htmlFor="cardName">Name on Card *</Label>
                      <Input id="cardName" name="cardName" value={card.cardName}
                        onChange={handleCardChange} placeholder="JOHN DOE"
                        className={`mt-1 ${errors.cardName ? "border-destructive" : ""}`} />
                      {errors.cardName && <p className="text-sm text-destructive mt-1">{errors.cardName}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="cardExpiry">Expiry Date *</Label>
                        <Input id="cardExpiry" name="cardExpiry" value={card.cardExpiry}
                          onChange={handleCardChange} placeholder="MM/YY"
                          maxLength={5}
                          className={`mt-1 ${errors.cardExpiry ? "border-destructive" : ""}`} />
                        {errors.cardExpiry && <p className="text-sm text-destructive mt-1">{errors.cardExpiry}</p>}
                      </div>
                      <div>
                        <Label htmlFor="cardCvv">CVV *</Label>
                        <Input id="cardCvv" name="cardCvv" value={card.cardCvv}
                          onChange={handleCardChange} placeholder="123"
                          maxLength={4} type="password"
                          className={`mt-1 ${errors.cardCvv ? "border-destructive" : ""}`} />
                        {errors.cardCvv && <p className="text-sm text-destructive mt-1">{errors.cardCvv}</p>}
                      </div>
                    </div>

                    {/* Accepted cards */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                      <Lock className="h-3.5 w-3.5" />
                      <span>We accept Visa, Mastercard, and all major debit/credit cards</span>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button type="button" variant="outline" size="lg" className="flex-1"
                        onClick={() => setStep(1)} disabled={isProcessing}>
                        Back
                      </Button>
                      <Button type="button" size="lg" className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={handlePayNow} disabled={isProcessing}>
                        {isProcessing ? "Processing…" : `Pay $${selectedPlan.price}`}
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>

            {/* ── Order Summary Sidebar ── */}
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
