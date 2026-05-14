import { AuthProvider } from "./features/auth/context/AuthContext";
import { ProjectsProvider } from "./features/projects/context/ProjectsContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TasksByProjectProvider } from "./features/projects/context/TasksProjectContext";

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
