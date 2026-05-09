import { supabase } from "@/lib/supabase";

// agregar un nuevo proyecto en base de datos
export const addProject = async (projectData) => {
  const { name, description, status } = projectData;

  const { error } = await supabase
    .from("projects")
    .insert({ name, description, status })
    .select()
    .single();

  if (error) throw error;
};

// obtener todos los proyectos
export const getAllProjects = async () => {
  const { data, error } = await supabase.from("projects").select();

  if (error) throw error;
  return data;
};

// editar o actualizar proyecto
export const updateProject = async (projectData, projectId) => {
  const { name, description, status } = projectData;

  const { error } = await supabase
    .from("projects")
    .update({ name, description, status })
    .eq("id", projectId);

  if (error) throw error;
};

// eliminar proyecto
export const deleteProject = async (id) => {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw error;
};
