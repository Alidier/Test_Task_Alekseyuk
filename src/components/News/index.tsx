import { FC } from "react";
import styles from './styles.module.scss'
import img1 from '../../assets/p.png'
import img2 from '../../assets/p (1).png'
import img3 from '../../assets/p (2).png'


const News: FC = () => {
    const NewsList = [
        {header: 'Любой вид корпусной мебели - дешево', src:img1, value:'Наше предприятие много лет специализируется на производстве качественной и эргономичной корпусной мебели. Мы изготавливаем изделия только по индивидуальному заказу. Каждая модель неповторима. '
         , date: '11.08.2023', label: 'Читать'},
         {header: 'Любой вид корпусной мебели - дешево', src:img2, value:'Наше предприятие много лет специализируется на производстве качественной и эргономичной корпусной мебели. Мы изготавливаем изделия только по индивидуальному заказу. Каждая модель неповторима. '
         , date: '11.08.2023', label: 'Читать'},
         {header: 'Любой вид корпусной мебели - дешево', src:img3, value:'Наше предприятие много лет специализируется на производстве качественной и эргономичной корпусной мебели. Мы изготавливаем изделия только по индивидуальному заказу. Каждая модель неповторима. '
         , date: '11.08.2023', label: 'Читать'}, 
    ]
return (
    <section className={styles.section__wrap}>
    <div className={styles.header}>
    <h2>Последние новости</h2>
    </div>
    <div className={styles.news__wrap}>
     <div className={styles.news__container}>
       {NewsList.map((item,index) => (
          <div key={index} className={styles.news__item}>
            <div className={styles.item__content}>

            <h4>{item.header}</h4>
            <div className={styles.img__container}>
                <img src={item.src}></img>
            </div>
            <p>{item.value}</p>
            <span>{item.date}</span>
            <div className={styles.button_container}>
            <button>{item.label} <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            </div>
         </div>
       ))}

     </div>
    </div>
    <div className={styles.button}>
      <button>
       Все новости <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    </section>
)
   

}

export default News