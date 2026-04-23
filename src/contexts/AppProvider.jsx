import { AuthProvider } from "./AuthContext";
import { ProjectsProvider } from "./ProjectsContext";
import { TooltipProvider } from "@/components/ui/tooltip";

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
}

export default AppProvider;
