import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Checkout } from "./pages/Checkout";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { NoLogsPolicy } from "./pages/NoLogsPolicy";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "checkout", Component: Checkout },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-service", Component: TermsOfService },
      { path: "no-logs-policy", Component: NoLogsPolicy },
    ],
  },
]);