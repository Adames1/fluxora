import ProjectsCard from "./ProjectsCard";

function ProjectsList({
  projects,
  projectsLabel,
  setIsEditting,
  setSelectedProject,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {projects.map((project) => (
        <ProjectsCard
          key={project.id}
          project={project}
          projectsLabel={projectsLabel}
          setIsEditting={setIsEditting}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
