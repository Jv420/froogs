import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Analytics } from "@vercel/analytics/react"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./index.css";
import Providers from "./providers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
    <Analytics />
  </Providers>
);
