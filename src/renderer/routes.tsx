import { Route, Router } from "electron-router-dom";

import { MainScreen } from "renderer/screens";

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
        </>
      }
    />
  );
}
