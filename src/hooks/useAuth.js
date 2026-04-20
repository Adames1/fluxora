import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("No hay proveedor de autenticación");
  return context;
};
