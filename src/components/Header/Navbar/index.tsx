import Button from "@/components/Button";
import Link from "next/link";
import styles from "./styles.module.css";
import links from "./links";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {
        links.map(({link, buttonColor, buttonIcon, buttonValue}) => (
          <Link href={link} target="_blank" key={buttonIcon}>
            <Button 
              color={buttonColor}
              icon={buttonIcon}
              value={buttonValue ?? undefined}
            />
          </Link>
        ))
      }
    </nav>
  )
}

export default Navbar;
