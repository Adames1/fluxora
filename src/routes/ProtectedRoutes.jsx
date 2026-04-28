import Loading from "@/components/shared/Loading";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { Navigate, Outlet } from "react-router";

function ProtectedRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <Loading />;

  return user ? <Outlet /> : <Navigate to="/sign-in" replace />;
}

export default ProtectedRoutes;
