import { addProject, deleteProject } from "../services/projects.services";
import { toast } from "sonner";

export const useProjects = () => {
  const handleAddProject = async (data, reset) => {
    try {
      await addProject(data);

      toast.success("Nuevo proyecto agregado");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteProyect = async (id) => {
    try {
      await deleteProject(id);
      toast.success("Proyecto eliminado");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { handleAddProject, handleDeleteProyect };
};
