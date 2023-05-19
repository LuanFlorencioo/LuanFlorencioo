import Image from "next/image";
import ButtonList from "./ButtonList";
import dots from "/public/background/dots.svg";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <section className={styles.home}>
      <div>
        <h1>Luan Florencio Dev. Full Stack</h1>

        <p><strong translate="no">Hello world!</strong> Prazer, eu sou o Luan! Apaixonado por tecnologia, sou acostumado e familiarizado em realizar projetos, resolver problemas e desenvolver aplicações web</p>

        <ButtonList />
      </div>

      <Image src={dots} alt="Background"/>
    </section>
  )
}

export default Home;
