import React, { useState } from 'react'


export default function ImageWithFallback({ fallback = 'https://i.imgur.com/QKiik2o.png', src, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const onError = () => {
    setImgSrc(fallback);
    console.log('here')
  }

  return <img src={imgSrc ? imgSrc : fallback} onError={onError} {...props} />
}
