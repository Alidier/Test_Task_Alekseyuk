import styles from './styles.module.scss'
import globalStyles from '../../index.scss'
import classNames from 'classnames'
const FeatureCaption: React.FC = () => {
    return (
        
        <div className={classNames(styles.feature__caption,styles.gradient2)}>
             <h2>
             Республиканское унитарное предприятие по эксплуатации зданий «БЕЛЭЗ»
            </h2>      
            <div className={styles.p__container}>
            <p>
            Предприятие  в системе  Управления  
            делами Президента Республики Беларусь осуществляет комплексное техническое обслуживание
            объектов недвижимости особой государственной важности, обеспечивает бесперебойную и безаварийную  работу, оперативность и высокое качество обслуживания.</p>    
            </div>
 
        </div>
    )
}

export default FeatureCaption