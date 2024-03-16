import { Route, Router } from "electron-router-dom";

import { MainScreen } from "renderer/screens";
import { ROUTES } from "./constants/routes";
import { Employees } from "./screens/Employees";
import { FileLeave } from "./screens/FileLeave";
import { LeaveReports } from "./screens/LeaveReports";
import MainLayout from "./components/organism/MainLayout";

export function AppRoutes() {
  return (
    <Router
      main={
        <Route element={<MainLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<MainScreen />} />
          <Route path={ROUTES.FILE_LEAVE} element={<FileLeave />} />
          <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
          <Route path={ROUTES.LEAVE_REPORTS} element={<LeaveReports />} />
        </Route>
      }
    />
  );
}
