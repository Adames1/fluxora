import { supabase } from "@/utils/supabase";

// agregar una nueva tarea
export const addTask = async (projectId, taskData) => {
  const { name, priority } = taskData;

  const { error } = await supabase
    .from("tasks")
    .insert({ project_id: projectId, name, priority })
    .select()
    .single();

  if (error) throw error;
};

// obtener tareas por proyecto
export const getTaskByProjectId = async () => {
  const { data, error } = await supabase.from("tasks").select();

  if (error) throw error;
  return data;
};

// eliminar tarea
export const deleteTask = async (id) => {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) throw error;
};
