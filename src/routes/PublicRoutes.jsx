import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

function PublicRoutes() {
  const { user, loading } = useAuth();

  if (!loading) return <div>Cargando...</div>;

  return !user ? <Outlet /> : <Navigate to="/" replace />;
}

export default PublicRoutes;
