import { FC } from 'react'
import styles from './styles.module.scss'
import img1 from "../../assets/logo_header.png"
import logo from "../../assets/logo_ 1.png"
import logo1 from "../../assets/logo_ 4.png"
import logo2 from "../../assets/logo_ 5.png"


const Footer: FC = () => {
   const FooterList = [
      {
        value: <> Кіраўніцтва справамі <br /> Прэзідэнта Рэспублікі <br/>Беларусь
        </>,
        src: logo
      },
      {
        value: <>
        Прэзідэнт <br/> Рэспублікі Беларусь


        </>,
        src: logo
      },
      {
        value: <>
          Прававы партал  <br/> pravo.by

</>,
        src: logo
      }
   ]
    return (
     <footer>
    <div className={styles.footer__container}>
     <div className={styles.upper__footer}>
      <div className={styles.img__container}>
       <img src={img1}/>
      </div>
      <div className={styles.contactss}>    
      <div className={styles.BelEz}>
        <p>
        Республиканское унитарное предприятие 
        <br/>
        по эксплуатации зданий «БЕЛЭЗ»
        </p>
        <p>
        Адрес: г. Минск, ул. Ивановская, 56
        <br/>
        Телефон: + 375 (17) 285-36-12
        <br/>
        Режим работы : Пн - Пт 8:15 - 17:00, обед 13:00 - 13:45
        </p>

      </div>
      <div className={styles.PrezBel}>
        <p> Вышестоящая организация -
  Управление делами Президента Республики Беларусь
      </p>
      <p>
      Адрес: г. Минск, ул. К. Маркса, 38 <br/>
Телефон: + 375 (17) 222-35-56 <br/>
Режим работы : Пн - Пт 9:00 - 18:00
      </p>
      </div>
      </div>  
    

      <div className={styles.about}>
        <nav>
            <ul>
                <li>
                    <a href="#">О предприятии</a>
                </li>
                <li>
                    <a href="#">Работы и услуги</a>
                </li>
                <li>
                    <a href="#">Каталог продукции</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
                <li>
                    <a href="#">Обращения граждан</a>
                </li>
            </ul>
             
        </nav>
      </div>
     </div>
      <div className={styles.lower__foter}>
        <div className={styles.seals}>
            {FooterList.map((item, index) => (
            <div key= {index} className={styles.seal}>  
            <div className={styles.lower__img}>
                <img src={item.src}/>
            </div>
            <div className={styles.text}>
                <p>{item.value}
               </p>

            </div>
            </div>
            ))}
        </div>
        <div className={styles.rating__portal}>
            
           <div className={styles.left__img}>
            <img src={logo1} alt=""/>
           </div>
           <div className={styles.right__img}>
            <img src={logo2} alt=""/>
            
           </div>
           
        </div>
      </div>
      <div className={styles.copyright}>
      Copyright © Государственное предприятие «БЕЛЭЗ»
      </div>
     </div>
     </footer>
    )
}

export default Footer