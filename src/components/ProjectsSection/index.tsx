import { api } from "@/services";
import { iRepo } from "@/interfaces";
import ProjectCard from "./ProjectCard";
import styles from "./styles.module.css";

const getRepos = async () => {
  try {
    const response = await api.get<iRepo[]>("/users/LuanFlorencioo/repos");
    const repos = response.data;
    return repos;
  }
  catch (err) {
    return [];
  }
}

const ProjectsSection = async () => {
  const repos = await getRepos();

  return (
    <section id="projects" className={styles.projects_section}>
      <h2>Projetos</h2>

      <ul>
        {
          repos.map(repo => (
            repo.homepage && (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                tags={repo.topics}
                description={repo.description}
                app={repo.homepage}
              />
            )
          ))
        }
      </ul>
    </section>
  )
}

export default ProjectsSection;
