import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";

// GitHub Pages SPA fallback: if 404.html stashed the real path, restore it
// before the router mounts (no-op on Vercel/Netlify, which rewrite server-side).
const redirect = sessionStorage.getItem("spa-redirect");
if (redirect) {
  sessionStorage.removeItem("spa-redirect");
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
