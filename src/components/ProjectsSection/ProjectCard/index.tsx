import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { iProjectCardProps } from "@/interfaces";
import styles from "./styles.module.css";

const ProjectCard = ({ title, tags, description, app }: iProjectCardProps) => {
  return (
    <li className={styles.project_card}>
      <h3 className={styles.project_title}>{title}</h3>

      {
        tags.length > 0 && (
          <p className={styles.project_tags}>
            tags:
            {tags.map((tag) => <span key={tag} >{tag}</span>)}
          </p>
        )
      }

      {
        description && (
          <p className={styles.project_description}>{(
            description.length > 127
              ? description.slice(0, 124) + "..."
              : description
          )}</p>
        )
      }

      <div>
        <a
          href={`https://github.com/LuanFlorencioo/${title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode /> Repositório
        </a>

        {
          app && (
            <a
              href={app}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> Ver Aplicação
            </a>
          )
        }
      </div>
    </li>
  )
}

export default ProjectCard;
