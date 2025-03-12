import Image from 'next/image';

import styles from './banner.module.css'

export default function Banner(){{
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
                alt='cover'
                fill={true}
                priority
                objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl'>Your Travel Partner</h1>
                <h3 className='text-xl, font-serif'>Explore your world with us</h3>
            </div>
        </div>
    );
}}