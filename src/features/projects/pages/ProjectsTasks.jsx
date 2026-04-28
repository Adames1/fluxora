import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useParams } from "react-router";
import { useProjects } from "../hooks/useProjects";
import ProjectsTaskForm from "../components/ProjectsTaskForm";
import { useTasks } from "../hooks/useTasks";
import ProjectsTasksList from "../components/ProjectsTasksList";
import emptyData from "/images/empty-data.svg";

function ProjectsTasks() {
  const { id } = useParams();
  const { projects } = useProjects();
  const {
    tasksByProject,
    loading,
    handleDeleteTask,
    handleToggleTaskComplete,
  } = useTasks();

  const project = projects.find((p) => p.id === id);

  const tasksLabel = {
    low: "Baja",
    medium: "Media",
    high: "Alta",
  };

  return (
    <div className="h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">{project?.name}</h1>
          <p className="text-sm">
            {project?.description || "Proyecto sin descripción"}
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Crear tarea</Button>
          </DialogTrigger>

          <ProjectsTaskForm />
        </Dialog>
      </div>

      {loading ? (
        <div className="w-full max-w-sm m-auto">
          <p className="text-center">Cargando Tareas...</p>
        </div>
      ) : tasksByProject.length > 0 ? (
        <ProjectsTasksList
          tasksByProject={tasksByProject}
          onDeleteTask={handleDeleteTask}
          tasksLabel={tasksLabel}
          onToggleTaskComplete={handleToggleTaskComplete}
        />
      ) : (
        <div className="w-full max-w-sm m-auto">
          <div className="flex flex-col gap-6 items-center">
            <img src={emptyData} className="w-60 h-60" />
            <p className="text-center text-gray-600">
              No tienes tareas agregadas. Presiona el boton{" "}
              <strong>"Crear tarea"</strong>
              para agregar una a tu lista.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsTasks;
