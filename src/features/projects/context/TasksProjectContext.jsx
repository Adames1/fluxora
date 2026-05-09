import { createContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { getAllTask } from "@/features/projects/services/tasks.services";

export const TasksProjectContext = createContext();

export function TasksByProjectProvider({ children }) {
  const { user } = useAuth();
  const [allTasks, setAllTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchTasksProjects = async () => {
      try {
        const data = await getAllTask();
        setAllTasks(data);
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
            setAllTasks((prev) => [payload.new, ...prev]);
          }
          if (payload.eventType === "UPDATE") {
            setAllTasks((prev) =>
              prev.map((p) => (p.id === payload.new.id ? payload.new : p)),
            );
          }
          if (payload.eventType === "DELETE") {
            setAllTasks((prev) => prev.filter((p) => p.id !== payload.old.id));
          }
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [user?.id]);

  return (
    <TasksProjectContext.Provider value={{ allTasks, loading }}>
      {children}
    </TasksProjectContext.Provider>
  );
}
