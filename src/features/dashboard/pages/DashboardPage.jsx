import { useProjects } from "@/features/projects/hooks/useProjects";
import SectionCards from "../components/SectionCards";
import TasksTable from "../components/TasksTable";
import ProjectsInProgress from "../components/ProjectsInProgress";
import { getProjectStats } from "../helpers";

function DashboardPage() {
  const { projects } = useProjects();
  const { total, inProgress, completed } = getProjectStats(projects);

  return (
    <div className="h-full space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* cards para resumen de proyecto */}
        <SectionCards
          totalProjects={total}
          projectInProgress={inProgress}
          projectsCompleted={completed}
        />

        {/* resumen de tareas pendientes */}
        <TasksTable />

        {/* proyectos en progreso */}
        <ProjectsInProgress />
      </div>
    </div>
  );
}

export default DashboardPage;
