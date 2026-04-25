import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useParams } from "react-router";
import { useProjects } from "../hooks/useProjects";
import ProjectsTaskForm from "../components/ProjectsTaskForm";
import { useTasks } from "../hooks/useTasks";
import ProjectsTasksList from "../components/ProjectsTasksList";

function ProjectsTasks() {
  const { id } = useParams();
  const { projects } = useProjects();
  const { tasksByProject, loading } = useTasks();

  const project = projects.find((p) => p.id === id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">{project?.name}</h1>
          <p className="text-sm">
            {project?.description || "Proyecto sin descripción"}
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Crear Tarea</Button>
          </DialogTrigger>

          <ProjectsTaskForm />
        </Dialog>
      </div>

      {loading ? (
        <p>Cargando tareas...</p>
      ) : (
        <ProjectsTasksList tasksByProject={tasksByProject} />
      )}
    </div>
  );
}

export default ProjectsTasks;
