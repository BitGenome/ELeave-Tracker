import ReactDom from "react-dom/client";
import React from "react";

import { WindowStoreProvider } from "./store";
import { AppRoutes } from "./routes";

import "resources/styles/globals.css";
import { TooltipProvider } from "./components/ui/tooltip";

ReactDom.createRoot(document.querySelector("app") as HTMLElement).render(
  <React.StrictMode>
    <WindowStoreProvider>
      <TooltipProvider>
        <AppRoutes />
      </TooltipProvider>
    </WindowStoreProvider>
  </React.StrictMode>,
);
