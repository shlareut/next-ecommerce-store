'use client';
import React, { useEffect, useState } from 'react';

export default function ImageComponent(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState('/images/loading.jpeg');
  useEffect(() => {
    const setImage = async () => {
      const newImage = props.image;
      setImageUrl(newImage);
      setIsLoading(false);
    };
    setImage().catch((error) => {
      console.log(error);
    });
    console.log('Fetch!');
  }, [props.image]);
  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <img
          data-test-id="product-image"
          alt="test123"
          src={imageUrl}
          width={100}
          height={100}
        />
      )}
    </div>
  );
}
