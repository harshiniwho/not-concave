import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import Index from "./Index";

const address = import.meta.env.VITE_CONVEX_URL;

const convex = new ConvexReactClient(address);

ReactDOM.render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <Index />
    </ConvexProvider>
  </StrictMode>,
  document.getElementById("root")
);
