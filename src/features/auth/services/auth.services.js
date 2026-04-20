import { supabase } from "@/utils/supabase";

// iniciar sesion
export const loginWithEmail = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
};

// crear un nuevo usuario
export const createNewUser = async (email, password) => {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
};
