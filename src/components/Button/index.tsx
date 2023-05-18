import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { iButtonProps } from "@/interfaces";
import styles from "./styles.module.css";

const Button = ({color, icon, value, clickEvent}: iButtonProps) => {
  const setIcon = {
    linkedin: <FaLinkedin size={22} />,
    github: <FaGithub size={22} />,
    whatsapp: <FaWhatsapp size={22} />,
  }

  const setColor = {
    orange: styles.button_orange,
    white: styles.button_white,
  }

  const setButtonStyle = `${styles.button} ${setColor[color]}`;

  return (
    <button className={setButtonStyle} onClick={clickEvent}>
      {icon && setIcon[icon]}
      
      {value}
    </button>
  )
}

export default Button;
