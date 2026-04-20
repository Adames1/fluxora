import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

function ProtectedRoutes() {
  const { user, loading } = useAuth();

  if (!loading) return <div>Cargando...</div>;

  return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

export default ProtectedRoutes;
