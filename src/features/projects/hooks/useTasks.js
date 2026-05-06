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

  const { allTasks, loading } = context;

  const handleAddTask = async (id, data, reset, setOpenDialog) => {
    try {
      await addTask(id, data);

      toast.success("Nueva tarea agregada", { position: "top-right" });
      reset();
      setOpenDialog(false);
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      toast.success("Tarea eliminada", { position: "top-right" });
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  const handleToggleTaskComplete = async (id, isCompleted) => {
    try {
      await toggleTaskComplete(id, isCompleted);
    } catch (error) {
      toast.error(error.message, { position: "top-right" });
    }
  };

  return {
    handleAddTask,
    handleDeleteTask,
    handleToggleTaskComplete,
    allTasks,
    loading,
  };
};
