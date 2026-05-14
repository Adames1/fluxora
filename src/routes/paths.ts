export const PATHS = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
  projects: "/projects",
  projectTasks: (id = ":id") => `/projects/${id}`,
};
