import exp from 'constants';
import { FC, ReactNode } from 'react'
import styles from './styles.module.scss'

interface WraperProps {
    children: ReactNode;
}

const Wraper: FC<WraperProps> = ( {children} ) => {
    return (
        <div className={styles.wrapper}>{children}</div>
    )

}

export default Wraper;