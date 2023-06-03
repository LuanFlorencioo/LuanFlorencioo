import { iTechData } from "@/interfaces";
import styles from "./styles.module.css";

const TechCard = ({ icon, placeholder }: iTechData) => {
  return (
    <li className={styles.tech_card}>
      {icon}

      <span>
        {placeholder}
      </span>
    </li>
  )
}

export default TechCard;
