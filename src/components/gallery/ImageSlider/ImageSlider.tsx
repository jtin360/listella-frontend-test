import { Photo } from '@/types';
import Image from 'next/image'
import React, { FC, useState } from 'react'
import {
    AutoSizer as _AutoSizer,
    AutoSizerProps,
  } from 'react-virtualized';
import { FixedSizeList as List } from 'react-window';
import styles from '@/styles/ImageSlider.module.css';
import { useHorizontalScroll } from '@/hooks/mouse';

const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;
interface ImageSliderProps {
    photos: Photo[];
}

const ImageSlider = ({ photos }: ImageSliderProps) => {

    const ImageWithFallBack = ({ index, style }: any) => {
        // const [src, setSrc] = useState(photos[index.img_src -> on error set fallback image here 'insert fallback image here']);
        const [imageSize, setSmageSize] = useState({
            width: 240,
            height: 208
        });
        return (
        <div className={`flex flex-col`} key={index} style={{...style, width: '240px', height: '208px'}}>
          <Image
              src={photos[index].img_src}
              className={`${styles['image-item']}`}
              key={photos[index].id}
              fill
            //   width={imageSize.width}
            //   height={imageSize.height}
              alt={photos[index].id.toString()}
              onLoadingComplete={target => {
                  setSmageSize({
                    width: target.naturalWidth,
                    height: target.naturalHeight
                  });
                }}
              unoptimized={true}
              onError={(e) => {
                    console.log(e);
                    //set src to fallback and use that instead
                }
            }
              loader={() => photos[index].img_src}>
          </Image>
        </div>
      )
    }
    
    const scrollRef = useHorizontalScroll();

    return (
        <AutoSizer>
            {({ width, height }) =>  (
                <List
                    layout="horizontal"
                    width={width}
                    height={256}
                    itemCount={photos.length}
                    itemSize={256}
                    outerRef={scrollRef}
                >
                    {ImageWithFallBack}
                </List>
            )}
        </AutoSizer>
    )
}

export default ImageSlider;