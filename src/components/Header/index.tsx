import React from "react";
import styles from "./styles.module.scss";
import img1 from "../../assets/logo_header.png"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src={img1}
          alt="БелЭЗ"
        />
      </div>
    
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">О предприятии</a></li>
          <li><a href="#">Работы и услуги</a></li>
          <li><a href="#">Каталог продукции</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Обращения граждан</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <div className={styles.languageSwitch}>
          <button>RU</button>
        </div>
        <div className={styles.icons}>
          <button aria-label="Search">
          <i className="fas fa-search"></i>
          </button>
          <button aria-label="Visibility">
          <i className="fas fa-eye"></i>
          </button>
        </div>
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
        <div className={styles.contacts}>
          <div className="">
          <p>Диспетчерская служба:</p>
          <p>
            +375 (17) 233-92-59 
          </p>
          <p>  +375 (17) 233-92-66</p>
          </div>
          <div className="">
          <p>Расчетный отдел:</p>
          <p>+375 (29) 555-53-33</p>
          </div>
        </div>
        <button className={styles.feedbackButton}>Обратная связь</button>
      </div>
    </header>
  );
};

export default Header;
