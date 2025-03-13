'use client'
import Image from 'next/image';
import { useState } from 'react';
import styles from './banner.module.css'

export default function Banner(){{
    const covers=['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg'];
    const [index, setIndex] = useState(0);

    return(
        <div className={styles.banner}>
            <Image src={covers[index%3]}
                onClick={()=>{
                    setIndex(index+1);
                }}
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