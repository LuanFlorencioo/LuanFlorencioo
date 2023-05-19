"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import useMedia from "use-media";
import Button from "../Button";
import Navbar from "./Navbar";
import Title from "./Title";

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleActiveMenu = () => setIsActiveMenu(!isActiveMenu);

  const isWide: boolean = useMedia({maxWidth: "768px"});

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Title />

        {
          isWide && (
            <Button 
              color="white" 
              icon={isActiveMenu ? "menuClose" : "menuBars"}
              clickEvent={handleActiveMenu} 
            />
          )
        }

        {
          isWide
            ? isActiveMenu && <Navbar />
            : <Navbar />
        }
      </div>
    </header>
  )
}

export default Header;
