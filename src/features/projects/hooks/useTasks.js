import {
  addTask,
  deleteTask,
  toggleTaskComplete,
} from "../services/tasks.services";
import { toast } from "sonner";
import { useContext } from "react";
import { TasksProjectContext } from "@/contexts/TasksProjectContext";

export const useTasks = () => {
  const context = useContext(TasksProjectContext);
  if (!context)
    throw new Error("No se puede usar useContext en este componente");

  const { tasksByProject, loading } = context;

  const handleAddTask = async (id, data, reset) => {
    try {
      await addTask(id, data);

      toast.success("Nueva tarea agregada");
      reset();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      toast.success("Tarea eliminada");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleToggleTaskComplete = async (id, isCompleted) => {
    try {
      await toggleTaskComplete(id, isCompleted);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    handleAddTask,
    handleDeleteTask,
    handleToggleTaskComplete,
    tasksByProject,
    loading,
  };
};
