import { addProject, deleteProject } from "../services/projects.services";
import { toast } from "sonner";
import { useContext } from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context)
    throw new Error("No se puede usar useContext en este componente");

  const { projects, loading } = context;

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

  return {
    projects,
    loading,
    handleAddProject,
    handleDeleteProyect,
  };
};
