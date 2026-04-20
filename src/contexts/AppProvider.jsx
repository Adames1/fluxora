import { AuthProvider } from "./AuthContext";
import { TooltipProvider } from "@/components/ui/tooltip";

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </AuthProvider>
  );
}

export default AppProvider;
