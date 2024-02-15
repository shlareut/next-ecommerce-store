'use client';
import React, { useEffect, useState } from 'react';
import styles from './ImageComponent.module.scss';

export default function ImageComponent(props) {
  const [imageUrl, setImageUrl] = useState('/images/loading.jpeg');
  useEffect(() => {
    const setImage = () => {
      const newImage = props.image;
      setImageUrl(newImage);
    };
    setImage();
    console.log('Fetch!');
  }, [props.image]);
  return (
    <img
      className={styles.style}
      data-test-id="product-image"
      alt={props.alt}
      src={imageUrl}
      width={100}
      height={100}
      loading="eager"
    />
  );
}
