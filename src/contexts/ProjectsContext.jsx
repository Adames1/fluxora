import { createContext, useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { getAllProjects } from "@/features/projects/services/projects.services";
import { useAuth } from "@/features/auth/hooks/useAuth";

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    const channel = supabase
      .channel("projects-room")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "projects",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setProjects((prev) => [payload.new, ...prev]);
          }
          if (payload.eventType === "UPDATE") {
            setProjects((prev) =>
              prev.map((p) => (p.id === payload.new.id ? payload.new : p)),
            );
          }
          if (payload.eventType === "DELETE") {
            setProjects((prev) => prev.filter((p) => p.id !== payload.old.id));
          }
        },
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [user?.id]);

  return (
    <ProjectsContext.Provider value={{ projects, loading }}>
      {children}
    </ProjectsContext.Provider>
  );
}
