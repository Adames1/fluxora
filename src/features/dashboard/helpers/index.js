export const getProjectStats = (projects) => ({
  total: projects.length,
  inProgress: projects.filter((p) => p.status === "in_progress").length,
  completed: projects.filter((p) => p.status === "completed").length,
});
