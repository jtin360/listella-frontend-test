import React from 'react'
import Right from '@/assets/right.svg';
import Planet from '@/assets/planet.svg';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';
import { Photo } from '@/types';
import ImageSlider from './ImageSlider/ImageSlider';

interface GalleryProps {
    photos: Photo[];
}

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <div className={`${styles['gallery-container']}`}>
        <div className={`${styles['astro-container']}`}>
            <div className='mb-5'>
                <h1 className={`${styles['galleries-text']}`}>Galleries <span >•</span> <span>Space Database</span></h1>
            </div>
            <div className={styles['image-container']}>
            <img
                className={`${styles.image}`}
                sizes='(min-width: 30em) 28em, 100vw'
                srcSet='https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_256/v1675452816/astronaut_uhzhrl.webp 256w,
                        https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_512/v1675452816/astronaut_uhzhrl.webp 512w,
                        https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_768/v1675452816/astronaut_uhzhrl.webp 768w,
                        https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1024/v1675452816/astronaut_uhzhrl.webp 1024w,
                        https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1280/v1675452816/astronaut_uhzhrl.webp 1280w'
                src='https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1280/v1675452816/astronaut_uhzhrl.webp'
                alt='astronaut' />
            </div>
        </div>
        <div className={`${styles['nasa-container']}`}>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center'>
                    <div>
                        <Image src={Planet.src} alt={'Planet'} width={108} height={109} blurDataURL={Planet.blurDataURL}></Image>
                    </div>
                    <div className='flex flex-col ml-6'>
                        <h1>NASA&apos;s Space Database</h1>
                        <span>Our Public Gallery for Outer Space</span>
                    </div>
                </div>
                <hr className={`${styles['spacer-purple']} my-4`}></hr>
                <div className='mb-12'>
                    <p className='text-2xl font-normal whitespace-normal'>We want to see space through your eyes! Take photos and upload them to our public library. Our goal is to provide the largest database of quality images. Space is amazing! Let&apos;s capture it together!</p>
                </div>
                <div className='flex flex-col mb-5'>
                    <h1>Featured Images</h1>
                    <span>Scroll to see more</span>
                </div>
                <div className='flex grow'>
                    <ImageSlider photos={photos}></ImageSlider>
                </div>
                <div className={`${styles['view-gallery-container']} flex justify-end text-2xl mb-4 mr-4 font-bold content-end`}>
                    <div className={`${styles['view-gallery']} flex flex-row`}>
                        <div className={`${styles['view-gallery-text']} relative`}>View Gallery</div>
                        <img className={`${styles['view-gallery-right']} relative`} src={Right.src} alt={'Right'} width={9} height={15} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;