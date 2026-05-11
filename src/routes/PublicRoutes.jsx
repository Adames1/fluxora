import Loading from "@/components/shared/Loading";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

function PublicRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return !user ? <Outlet /> : <Navigate to="/" replace />;
}

export default PublicRoutes;
