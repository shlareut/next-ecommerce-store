'use client';
import React, { useEffect, useState } from 'react';

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
      data-test-id="product-image"
      alt="test123"
      src={imageUrl}
      width={100}
      height={100}
    />
  );
}
