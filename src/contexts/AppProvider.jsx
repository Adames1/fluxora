import { AuthProvider } from "./AuthContext";
import { ProjectsProvider } from "./ProjectsContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TasksByProjectProvider } from "./TasksProjectContext";

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <TasksByProjectProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </TasksByProjectProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
}

export default AppProvider;
