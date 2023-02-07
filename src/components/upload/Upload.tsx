import React from 'react'
import styles from '@/styles/Upload.module.css';
import DragAndDrop from '@/components/drag-and-drop/DropAndDrop';

export const Upload = () => {
  return (
    <div className={`${styles['upload-container']}`}>
        <img
            className={`${styles.moon}`}
            srcSet='https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_256/v1675452816/moon_abdu3x.webp 256w,
                    https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_512/v1675452816/moon_abdu3x.webp 512w,
                    https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_768/v1675452816/moon_abdu3x.webp 768w,
                    https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1024/v1675452816/moon_abdu3x.webp 1024w,
                    https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1280/v1675452816/moon_abdu3x.webp 1280w'
            src='https://res.cloudinary.com/dtlqlf4de/image/upload/f_auto,q_100,w_1280/v1675452816/moon_abdu3x.webp'
            alt='astronaut'>
        </img>
        <div className={`${styles.upload}`}>
            <DragAndDrop />
        </div>
    </div>
  )
}
