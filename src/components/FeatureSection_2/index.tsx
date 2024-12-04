import styles from './styles.module.scss'
import mainteance from '../assets/div.sw-hero-video (1).png'
import montage from '../assets/div.sw-hero-video (2).png'
import classNames from 'classnames'
const Feature_2: React.FC = () => {
   const featureList = 
   [
    {header: 'Производство', value: 'Изготовление изделий из ПВХ: окна, двери, перегородки, изготовление изделий из давальческого сырья заказчика, гидроабразивная резка материалов.',
        button: 'Подробнее', className: styles.construction
    },
    {
        header: 'Услуги', value: 'Клининг, профилактическая дератизация, дезинсекция, дезинфекция и акарицидная обработка (клеща), озеленение, оказание услуг спецтехникой, аренда недвижимости, услуги по разработке бизнес-планов.',
        button: 'Подробнее',  className: styles.utils
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

export default Feature_2