import React from 'react';
import './autoplaycarousel.css';
// import { cardDetails } from './carousel-config';
import { cardDetails } from './carousel-config';
// import CarouselItem from './CarouselItem';
import CarouselItem from './CarouselItem';

export default function AutoplayCarousel() {
  return (
    <div className='carousel-container'>
      <div className='carousel-track'>
        {cardDetails.map((cardDetail, i) => {
          return (
            <CarouselItem
              key={i}
              imgUrl={cardDetail.imgUrl}
              imgTitle={cardDetail.title}
            ></CarouselItem>
          );
        })}
        {cardDetails.map((cardDetail, i) => {
          return (
            <CarouselItem
              key={i}
              imgUrl={cardDetail.imgUrl}
              imgTitle={cardDetail.title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
