import {
  addProject,
  deleteProject,
  updateProject,
} from "../services/projects.services";
import { toast } from "sonner";
import { useContext } from "react";
import { ProjectsContext } from "@/contexts/ProjectsContext";

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context)
    throw new Error("No se puede usar useContext en este componente");

  const { projects, loading } = context;

  const handleAddProject = async (data, reset, setOpenDialog) => {
    try {
      await addProject(data);

      toast.success("Nuevo proyecto agregado", { position: "top-right" });
      setOpenDialog(false);
      reset();
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  const handleUpdateProject = async (data, reset, setIsEditting, projectId) => {
    try {
      await updateProject(data, projectId);

      toast.success("Proyecto actualizado", { position: "top-right" });
      setIsEditting(false);
      reset();
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  const handleDeleteProyect = async (id) => {
    try {
      await deleteProject(id);
      toast.success("Proyecto eliminado", { position: "top-right" });
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  return {
    projects,
    loading,
    handleAddProject,
    handleDeleteProyect,
    handleUpdateProject,
  };
};
