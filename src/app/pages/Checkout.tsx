import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { CreditCard, Lock, CheckCircle, Shield } from "lucide-react";
import { toast } from "sonner";

export function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planParam = searchParams.get("plan") || "monthly";
  const planKey = planParam === "yearly" ? "yearly" : "monthly";

  const plans = {
    monthly: { name: "Monthly Pro Plan", price: 4.99, period: "month" },
    yearly: { name: "Yearly Pro Plan", price: 48.99, period: "year" },
  };

  const selectedPlan = plans[planKey];

  const [step, setStep] = useState(1); // 1: Details, 2: Payment, 3: Success
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    // Payment Details
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    // Billing Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    // Terms
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateCardNumber = (number: string) => {
    const cleaned = number.replace(/\s/g, "");
    return /^\d{16}$/.test(cleaned);
  };

  const validateExpiryDate = (date: string) => {
    return /^\d{2}\/\d{2}$/.test(date);
  };

  const validateCVV = (cvv: string) => {
    return /^\d{3,4}$/.test(cvv);
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.confirmEmail.trim()) {
      newErrors.confirmEmail = "Please confirm your email";
      isValid = false;
    } else if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = "Emails do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
      isValid = false;
    } else if (!validateCardNumber(formData.cardNumber)) {
      newErrors.cardNumber = "Please enter a valid 16-digit card number";
      isValid = false;
    }

    if (!formData.cardName.trim()) {
      newErrors.cardName = "Cardholder name is required";
      isValid = false;
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = "Expiry date is required";
      isValid = false;
    } else if (!validateExpiryDate(formData.expiryDate)) {
      newErrors.expiryDate = "Please enter date in MM/YY format";
      isValid = false;
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = "CVV is required";
      isValid = false;
    } else if (!validateCVV(formData.cvv)) {
      newErrors.cvv = "Please enter a valid CVV";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      isValid = false;
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required";
      isValid = false;
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
      isValid = false;
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number
    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
    }

    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .slice(0, 5);
    }

    // Format CVV
    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateStep2()) {
      // Simulate payment processing
      toast.success("Processing payment...");
      
      setTimeout(() => {
        setStep(3);
        toast.success("Payment successful! Check your email for details.");
      }, 2000);
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  if (step === 3) {
    return (
      <div className="w-full min-h-[80vh] flex items-center justify-center px-4 py-16">
        <Card className="max-w-2xl w-full p-8 text-center border-primary/20">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <CheckCircle className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Payment Successful!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for choosing Kestrel VPN! Your {selectedPlan.name} has been activated.
          </p>
          <div className="bg-card/50 rounded-lg p-6 mb-6">
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan:</span>
                <span className="text-foreground font-semibold">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount Paid:</span>
                <span className="text-foreground font-semibold">${selectedPlan.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="text-foreground font-semibold">{formData.email}</span>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            We've sent a confirmation email to <strong>{formData.email}</strong> with your account
            details, download links, and setup instructions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/")}
            >
              Return to Home
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => navigate("/contact")}
            >
              Contact Support
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            Secure Checkout
          </h1>
          <p className="text-muted-foreground text-center">
            Complete your purchase over a secure, encrypted connection
          </p>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 1 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`h-1 w-16 ${step >= 2 ? "bg-primary" : "bg-muted"}`}
                  />
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    2
                  </div>
                  <div
                    className={`h-1 w-16 ${step >= 3 ? "bg-primary" : "bg-muted"}`}
                  />
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 3 ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    3
                  </div>
                </div>
              </div>

              {step === 1 && (
                <Card className="p-8 border-primary/20">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Personal Details</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className={`mt-1 ${errors.firstName ? "border-destructive" : ""}`}
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className={`mt-1 ${errors.lastName ? "border-destructive" : ""}`}
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        Your account credentials will be sent to this email
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="confirmEmail">Confirm Email Address *</Label>
                      <Input
                        id="confirmEmail"
                        name="confirmEmail"
                        type="email"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`mt-1 ${errors.confirmEmail ? "border-destructive" : ""}`}
                      />
                      {errors.confirmEmail && (
                        <p className="text-sm text-destructive mt-1">{errors.confirmEmail}</p>
                      )}
                    </div>

                    <Button
                      type="button"
                      onClick={handleNext}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Continue to Payment
                    </Button>
                  </form>
                </Card>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <Card className="p-8 border-primary/20 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">Payment Information</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className={`mt-1 ${errors.cardNumber ? "border-destructive" : ""}`}
                        />
                        {errors.cardNumber && (
                          <p className="text-sm text-destructive mt-1">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="cardName">Cardholder Name *</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          placeholder="JOHN DOE"
                          className={`mt-1 ${errors.cardName ? "border-destructive" : ""}`}
                        />
                        {errors.cardName && (
                          <p className="text-sm text-destructive mt-1">{errors.cardName}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date *</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            className={`mt-1 ${errors.expiryDate ? "border-destructive" : ""}`}
                          />
                          {errors.expiryDate && (
                            <p className="text-sm text-destructive mt-1">{errors.expiryDate}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="123"
                            className={`mt-1 ${errors.cvv ? "border-destructive" : ""}`}
                          />
                          {errors.cvv && (
                            <p className="text-sm text-destructive mt-1">{errors.cvv}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 border-primary/20 mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Billing Address</h2>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main Street"
                          className={`mt-1 ${errors.address ? "border-destructive" : ""}`}
                        />
                        {errors.address && (
                          <p className="text-sm text-destructive mt-1">{errors.address}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="New York"
                            className={`mt-1 ${errors.city ? "border-destructive" : ""}`}
                          />
                          {errors.city && (
                            <p className="text-sm text-destructive mt-1">{errors.city}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="state">State / Province</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="NY"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="zipCode">ZIP / Postal Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="10001"
                            className={`mt-1 ${errors.zipCode ? "border-destructive" : ""}`}
                          />
                          {errors.zipCode && (
                            <p className="text-sm text-destructive mt-1">{errors.zipCode}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="United States"
                            className={`mt-1 ${errors.country ? "border-destructive" : ""}`}
                          />
                          {errors.country && (
                            <p className="text-sm text-destructive mt-1">{errors.country}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-primary/20 mb-6">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => {
                          setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }));
                          if (errors.agreeTerms) {
                            setErrors((prev) => ({ ...prev, agreeTerms: "" }));
                          }
                        }}
                        className={errors.agreeTerms ? "border-destructive" : ""}
                      />
                      <div className="flex-1">
                        <label
                          htmlFor="agreeTerms"
                          className="text-sm text-muted-foreground cursor-pointer"
                        >
                          I agree to the{" "}
                          <a
                            href="/terms-of-service"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            Terms of Service
                          </a>
                          ,{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </a>
                          , and{" "}
                          <a
                            href="/no-logs-policy"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            No-Logs Policy
                          </a>
                        </label>
                        {errors.agreeTerms && (
                          <p className="text-sm text-destructive mt-1">{errors.agreeTerms}</p>
                        )}
                      </div>
                    </div>
                  </Card>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                      Complete Purchase
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 border-primary/20 sticky top-20">
                <h3 className="font-bold text-foreground mb-4">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan:</span>
                    <span className="text-foreground font-semibold">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Billing:</span>
                    <span className="text-foreground">${selectedPlan.price}/{selectedPlan.period}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-foreground font-semibold">Total:</span>
                      <span className="text-accent font-bold text-xl">${selectedPlan.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Shield className="h-5 w-5" />
                    <span className="font-semibold">What's Included:</span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Unlimited bandwidth</li>
                    <li>✓ 30+ server locations in 25+ countries</li>
                    <li>✓ Strong encryption</li>
                    <li>✓ No-logs policy</li>
                    <li>✓ 24/7 customer support</li>
                    <li>✓ Multiple device support</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>Secure encrypted checkout</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
