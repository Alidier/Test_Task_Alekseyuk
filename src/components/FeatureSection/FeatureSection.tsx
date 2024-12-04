import styles from './styles.module.scss'
import classNames from 'classnames'
const Feature: React.FC = () => {
   const featureList = 
   [
    {header: 'Техническое обслуживание', value: 'Эксплуатация и техническое обслуживание зданий и сооружений, систем вентиляции и кондиционирования воздуха, систем пожарной автоматики, видеонаблюдения, контроля и управления доступом и других систем безопасности и другое.',
        button: 'Подробнее', className: styles.maintenance
    },
    {
        header: 'Специальные и монтажные работы', value: 'Монтаж систем пожарной автоматики, видеонаблюдения, контроля и управления доступом, монтаж и пуско-наладка систем вентиляции и кондиционирования воздуха, ремонтно-аварийные работы, общестроительные работы и другое.',
        button: 'Подробнее',  className: styles.montage
    }
   ]
   return (
    <div className={styles.feature__wrap}>
        <div className={styles.feature__container}>
            {featureList.map((feature, index) => (
                <div key={index} className={classNames(styles.widget, feature.className)}>
                    <div className={styles.content}>
                    <h3>{feature.header}</h3>
                    <p>{feature.value}</p>
                    <button>{feature.button} <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            )) }
        </div>

    </div>
   )


}

export default Feature