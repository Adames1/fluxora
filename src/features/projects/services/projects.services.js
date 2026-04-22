import { supabase } from "@/utils/supabase";

// agregar un nuevo proyecto en base de datos
export const addProject = async (projectData) => {
  const { name, description, status } = projectData;

  const { error } = await supabase
    .from("projects")
    .insert({ name, description, status });

  if (error) throw error;
};
