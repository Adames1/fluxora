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

// obtener tareas todas las tareas
export const getAllTask = async () => {
  const { data, error } = await supabase.from("tasks").select();

  if (error) throw error;
  return data;
};

// eliminar tarea
export const deleteTask = async (taskId) => {
  const { error } = await supabase.from("tasks").delete().eq(taskId);

  if (error) throw error;
};

// marcar una tarea completada
export const toggleTaskComplete = async (taskId, isCompleted) => {
  const { error } = await supabase
    .from("tasks")
    .update({ is_completed: isCompleted })
    .eq("id", taskId);

  if (error) throw error;
};
