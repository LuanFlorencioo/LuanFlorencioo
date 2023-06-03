import { GiClick } from "react-icons/gi";
import TechList from "./TechList";
import styles from "./styles.module.css";

const TechsSection = () => {
  return (
    <section id="tecnologies" className={styles.techs_section}>
      <div>
        <h2>Ferramentas e Tecnologias que domino</h2>

        <GiClick className={styles.hand_viewer} />

        <TechList />
      </div>
    </section>
  )
}

export default TechsSection;
