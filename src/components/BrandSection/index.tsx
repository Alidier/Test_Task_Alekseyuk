import { FC } from 'react';
import styles from './styles.module.scss';
import logo1 from '../../assets/logo1 1.png'
import logo2 from '../../assets/logo 1 2.png'
import logo3 from '../../assets/logo 1 3.png'
import logo4 from '../../assets/logo 1 4.png'
import logo5 from '../../assets/logo 1 5.png'
import logo6 from '../../assets/logo 1 6.png'
interface Brand {
    src: string;
}
const Brand: FC = () => {
    const BrandList: Array<Brand> = [
        {src: logo1},
        {src: logo2},
        {src: logo3},
        {src: logo4},
        {src: logo5},
        {src: logo6}
    ]

    return (
        <section className={styles.brand}>
            <div className={styles.brand__container}>
                {BrandList.map((item, index) => (
                    <div key={index} className={styles.img__container}>
                      <img src={item.src}></img>
                    </div>
                )) }
            </div>

        </section>
    )
}

export default Brand;