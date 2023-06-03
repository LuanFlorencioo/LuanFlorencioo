import Link from "next/link";
import Button from "../Button";
import styles from "./styles.module.css";

const ContactSection = () => {
  return (
    <section id="contact" className={styles.contact_section}>
      <div>
        <h2>Contato</h2>

        <p>Email: <span>luanflorencio.dev@gmail.com</span></p>

        <p>Telefone: <span>+55 21 96421-6903</span></p>

        <p>Discord: <span>Florencioo#5703</span></p>

        <div>
          <Link href="https://linkedin.com/in/luanflorencioo/" target="_blank">
            <Button color="white" icon="linkedin" />
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=+5521964216903&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os" target="_blank">
            <Button color="white" icon="whatsapp" />
          </Link>
        </div>

        <Link href="#home">
          <Button color="white" value="↑" />
        </Link>
      </div>
    </section>
  )
}

export default ContactSection;
