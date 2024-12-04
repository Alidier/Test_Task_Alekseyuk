import styles from "./styles.module.scss"
import img2 from "../assets/Header 1.png"
import Stats from "./stats"
const Hero: React.FC = () => {
   return (
    <section className={styles.hero}>
    <div className={styles.content__container}>
      <div className={styles.content}>
      <h1>Ремонтно-строительные и отделочные работы</h1>
      <div className={styles.text}>
      <p>
        Малярные работы, обойные работы, внутренние и наружные штукатурные работы, устройство
        полов, шлифовка паркетных полов и другие работы.
      </p>
      </div>
      <button className={styles.button}>Подробнее <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
    <Stats/>
    </section>

   )
}

export default Hero;