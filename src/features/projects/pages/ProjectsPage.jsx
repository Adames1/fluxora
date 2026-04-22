import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectsForm from "../components/ProjectsForm";
import { addProject } from "../services/projects.services";
import { toast } from "sonner";

function ProjectsPage() {
  const handleAddProject = async (data, reset) => {
    try {
      await addProject(data);

      toast.success("Nuevo proyecto agregado");
      reset();
    } catch (error) {
      console.error("Error al crear proyecto", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Mis Proyectos</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Crear proyecto</Button>
        </DialogTrigger>

        <ProjectsForm onSubmit={handleAddProject} />
      </Dialog>
    </div>
  );
}

export default ProjectsPage;
