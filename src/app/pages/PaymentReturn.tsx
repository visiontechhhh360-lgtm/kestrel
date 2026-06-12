import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";

type PaymentStatus = "success" | "failure" | "pending";

// JazzCash response codes: "000" = success, anything else = failure/pending
const SUCCESS_CODE = "000";

export function PaymentReturn() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<PaymentStatus>("pending");
  const [txnRef, setTxnRef] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const responseCode = params.get("pp_ResponseCode");
    const txnRefNo = params.get("pp_TxnRefNo") || "";
    const responseDesc = params.get("pp_ResponseMessage") || "";

    setTxnRef(txnRefNo);
    setResponseMessage(responseDesc);

    if (responseCode === SUCCESS_CODE) {
      setStatus("success");
    } else if (responseCode) {
      setStatus("failure");
    }
    // If no params, leave as "pending" (user may have landed here directly)
  }, []);

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
            <p className="text-muted-foreground mb-6">
              {responseMessage || "Your payment could not be processed. Please try again."}
            </p>
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
              We are confirming your transaction with JazzCash. This may take a moment.
            </p>
          </>
        )}

        {txnRef && (
          <div className="bg-card/50 rounded-lg p-4 mb-6 text-sm text-left">
            <p className="text-muted-foreground">
              Transaction Reference: <span className="text-foreground font-mono">{txnRef}</span>
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            size="lg"
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={() => navigate("/")}
          >
            Return Home
          </Button>
          {status === "failure" && (
            <Button
              size="lg"
              variant="outline"
              className="flex-1"
              onClick={() => navigate("/checkout")}
            >
              Try Again
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
