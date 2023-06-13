export function formatProjects(
  projects,
  { sortByOrder = true, limit = undefined } = {}
) {
  if (sortByOrder) {
    projects.sort((a, b) => a.frontmatter.order - b.frontmatter.order);
  } else {
    projects.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number") {
    projects = projects.slice(0, limit);
  }

  return projects;
}
