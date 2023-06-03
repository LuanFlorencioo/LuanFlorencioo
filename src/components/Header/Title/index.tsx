import Image from "next/image";
import styles from "./styles.module.css";

const Title = () => {
  return (
    <div className={styles.header_title}>
      <Image
        src="https://github.com/LuanFlorencioo.png"
        alt="Luan Florencio avatar"
        width={36}
        height={36}
        priority
      />

      <p>Luan Florencio</p>
    </div>
  )
}

export default Title;
