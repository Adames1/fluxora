import { Routes, Route } from "react-router";
import { PATHS } from "./paths";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProjectsPage from "@/features/projects/pages/ProjectsPage";
import ProjectsTasks from "@/features/projects/pages/ProjectsTasksPage";

import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* rutas publicas */}
      <Route element={<PublicRoutes />}>
        <Route element={<AuthLayout />}>
          <Route path={PATHS.signIn} element={<LoginPage />} />
          <Route path={PATHS.signUp} element={<RegisterPage />} />
        </Route>
      </Route>

      {/* rutas protegidas */}
      <Route element={<ProtectedRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path={PATHS.projects} element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectsTasks />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
