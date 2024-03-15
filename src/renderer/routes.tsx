import { Route, Router } from "electron-router-dom";

import { MainScreen } from "renderer/screens";
import { ROUTES } from "./constants/routes";
import { Employees } from "./screens/Employees";
import { LeaveReports } from "./screens/LeaveReports";

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path={ROUTES.FILE_LEAVE} element={<MainScreen />} />
          <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
          <Route path={ROUTES.LEAVE_REPORTS} element={<LeaveReports />} />
        </>
      }
    />
  );
}
