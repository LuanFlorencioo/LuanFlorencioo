import { GiClick } from "react-icons/gi";
import techs from "./techs";
import styles from "./styles.module.css";
import TechCard from "./TechCard";

const TechsSection = () => {
  return (
    <section id="tecnologies" className={styles.techs_section}>
      <div>
        <h2>Ferramentas e Tecnologias que domino</h2>

        <GiClick className={styles.hand_viewer} />

        <ul>
          {
            techs.map(({icon, placeholder}, i) => (
              <TechCard 
                key={i}
                icon={icon}
                placeholder={placeholder}
              />
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default TechsSection;
