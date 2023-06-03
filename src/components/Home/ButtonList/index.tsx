import Link from "next/link";
import Button from "@/components/Button";
import styles from "./styles.module.css";
import buttons from "./buttons";

const ButtonList = () => {
  return (
    <ul className={styles.button_list}>
      <li>
        <a href="/curriculo/CV-Luan_Florencio.pdf" download>
          <Button color="white" value="Baixar CV" />
        </a>
      </li>

      {
        buttons.map(({href, value}) => (
          <li key={value}>
            <Link href={href}>
              <Button color="orange" value={value}/>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default ButtonList;
