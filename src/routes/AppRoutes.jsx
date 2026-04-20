import { Routes, Route } from "react-router";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import AuthLayout from "@/layouts/AuthLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* rutas publicas */}
      <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
        </Route>
      </Route>

      {/* rutas protegidas */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
