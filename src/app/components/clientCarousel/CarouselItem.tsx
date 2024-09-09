import React from 'react';

export default function CarouselItem({
  imgUrl,
  imgTitle,
}: {
  imgUrl: string;
  imgTitle: string;
}) {
  return (
    <div className='carousel-card'>
      <img className='carousel-card-image' src={imgUrl} alt={imgTitle} />
    </div>
  );
}
