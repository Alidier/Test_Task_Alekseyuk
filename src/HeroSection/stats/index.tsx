import styles from './styles.module.scss'
import cube from '../../assets/icon-cube 1.png'
import truck from '../../assets/icon-truck 1.png'
import repair from '../../assets/icon-repair 1.png'
import web from '../../assets/icon-web 1.png'
import { FC } from 'react'

const Stats: FC = () => {
    const stats = [
      { value: "1 млн. 687 тыс.кв.м.", label: "Общая площадь", src:cube },
      { value: "864 зданий", label: "На техобслуживании",src:web },
      { value: "> 77", label: "Видов деятельности", src:repair },
      { value: "> 110 единиц", label: "Транспортной техники", src:truck },
    ];
  
    return (
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <div className={styles.icon__container}>
              <img src={stat.src} alt="" />
            </div>
            <div className={styles.stats__content}>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Stats;
