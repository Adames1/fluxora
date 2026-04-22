import { supabase } from "@/utils/supabase";

export const getDataProfile = async () => {
  const { data, error } = await supabase.from("profiles").select().single();
  if (error) throw error;
  return data;
};
