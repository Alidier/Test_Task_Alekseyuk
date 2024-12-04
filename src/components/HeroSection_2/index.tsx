import styles from "./styles.module.scss"
import { FC } from "react"
const Hero_2: FC = () => {
   return (
    <section className={styles.hero}>
    <div className={styles.content__container}>
      <div className={styles.content}>
      <h1>Изготовление окон из ПВХ</h1>
      <p>
      Элементы остекления балконов и лоджий – ленточные из ПВХ профиля системы «EXPROF»
       серии S358 класса по толщине стенки А, серии ProWinXS358 класса по толщине стенки В, распашные, откидные, поворотно-откидные, СТБ 1912-2008.
      </p>
      <button className={styles.button}>Подробнее <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
    </section>

   )
}

export default Hero_2;