import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";

type PaymentStatus = "success" | "failure" | "pending";

export function PaymentReturn() {
  const navigate = useNavigate();
  const [status, setStatus]               = useState<PaymentStatus>("pending");
  const [txnRef, setTxnRef]               = useState("");
  const [responseCode, setResponseCode]   = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [amount, setAmount]               = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code    = params.get("pp_ResponseCode")    || "";
    const message = params.get("pp_ResponseMessage") || "";
    const ref     = params.get("pp_TxnRefNo")        || "";
    const amt     = params.get("pp_Amount")          || "";

    setResponseCode(code);
    setResponseMessage(message);
    setTxnRef(ref);
    setAmount(amt);

    if (code === "000") {
      setStatus("success");
    } else if (code) {
      setStatus("failure");
    }
  }, []);

  // Format paisa → readable amount
  const formattedAmount = amount
    ? `PKR ${(parseInt(amount, 10) / 100).toFixed(2)}`
    : "";

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-4 py-16">
      <Card className="max-w-lg w-full p-8 text-center border-primary/20">

        {status === "success" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-500/10 rounded-full">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Payment Successful!</h1>
            <p className="text-muted-foreground mb-6">
              Your Kestrel VPN subscription has been activated. Check your email for setup
              instructions.
            </p>
          </>
        )}

        {status === "failure" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-destructive/10 rounded-full">
                <XCircle className="h-16 w-16 text-destructive" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Payment Failed</h1>
            <p className="text-muted-foreground mb-2">
              {responseMessage || "Your payment could not be processed. Please try again."}
            </p>
            {responseCode && (
              <p className="text-xs text-muted-foreground mb-4">
                Error code: <span className="font-mono">{responseCode}</span>
              </p>
            )}
          </>
        )}

        {status === "pending" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Clock className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Verifying Payment</h1>
            <p className="text-muted-foreground mb-6">
              We are confirming your transaction. This may take a moment.
            </p>
          </>
        )}

        {/* Transaction details */}
        {(txnRef || formattedAmount) && (
          <div className="bg-card/50 rounded-lg p-4 mb-6 text-sm text-left space-y-1">
            {txnRef && (
              <p className="text-muted-foreground">
                Reference: <span className="text-foreground font-mono">{txnRef}</span>
              </p>
            )}
            {formattedAmount && (
              <p className="text-muted-foreground">
                Amount: <span className="text-foreground">{formattedAmount}</span>
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90" onClick={() => navigate("/")}>
            Return Home
          </Button>
          {status === "failure" && (
            <Button size="lg" variant="outline" className="flex-1" onClick={() => navigate("/checkout")}>
              Try Again
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
