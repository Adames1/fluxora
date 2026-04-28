import { createContext, useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getAllTask } from "@/features/projects/services/tasks.services";

export const TasksProjectContext = createContext();

export function TasksByProjectProvider({ children }) {
  const { user } = useAuth();
  const [tasksByProject, setTasksByProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchTasksProjects = async () => {
      try {
        const data = await getAllTask();
        setTasksByProject(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasksProjects();

    const channel = supabase
      .channel("tasks-room")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "tasks",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setTasksByProject((prev) => [payload.new, ...prev]);
          }
          if (payload.eventType === "UPDATE") {
            setTasksByProject((prev) =>
              prev.map((p) => (p.id === payload.new.id ? payload.new : p)),
            );
          }
          if (payload.eventType === "DELETE") {
            setTasksByProject((prev) =>
              prev.filter((p) => p.id !== payload.old.id),
            );
          }
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [user?.id]);

  return (
    <TasksProjectContext.Provider value={{ tasksByProject, loading }}>
      {children}
    </TasksProjectContext.Provider>
  );
}
