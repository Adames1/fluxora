import { useProjects } from "@/features/projects/hooks/useProjects";
import { useTasks } from "@/features/projects/hooks/useTasks";

function ProjectsInProgress() {
  const { projects } = useProjects();
  const { allTasks } = useTasks();

  const inProgressProject = projects.filter(
    (project) => project.status === "in_progress",
  );

  return (
    <div className="lg:col-span-1 space-y-4">
      <h2 className="text-md font-semibold">Proyectos en progreso</h2>

      {inProgressProject.length > 0 ? (
        <div className="flex flex-col gap-4">
          {inProgressProject.map((project) => {
            const totalTasks = allTasks.filter(
              (task) => task.project_id === project.id,
            );

            const tasksCompleted = totalTasks.filter(
              (task) => task.is_completed !== false,
            ).length;

            const percentageCompleted =
              totalTasks.length === 0
                ? 0
                : (tasksCompleted / totalTasks.length) * 100;

            return (
              <div
                key={project.id}
                className="flex items-center justify-between"
              >
                <h3 className="text-sm">{project.name}</h3>
                <span className="inline-block text-sm">{`${percentageCompleted.toFixed(0)}%`}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-600">No tienes proyectos en progreso</p>
      )}
    </div>
  );
}

export default ProjectsInProgress;
