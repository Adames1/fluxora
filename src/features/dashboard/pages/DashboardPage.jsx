import { useProjects } from "@/features/projects/hooks/useProjects";
import SectionCards from "../components/SectionCards";

function DashboardPage() {
  const { projects } = useProjects();

  const totalProjects = projects.length;
  const projectInProgress = projects.filter(
    (project) => project.status === "in_progress",
  ).length;
  const projectsCompleted = projects.filter(
    (project) => project.status === "completed",
  ).length;

  return (
    <div className="h-full space-y-4">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* cards para resumen de proyecto */}
      <SectionCards
        totalProjects={totalProjects}
        projectInProgress={projectInProgress}
        projectsCompleted={projectsCompleted}
      />
    </div>
  );
}

export default DashboardPage;
