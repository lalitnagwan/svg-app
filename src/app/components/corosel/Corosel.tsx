'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageData {
  src: string;
  text: string;
  heading: string;
  btn: string;
}

const images: ImageData[] = [
  {
    src: '/images/4180847.jpg',
    heading: 'GROUND SERVICES',
    text: 'SVG Provide Highest Quality',
    btn: 'READ MORE',
  },
  {
    src: '/images/1621500.jpg',
    heading: 'AIR FREIGHT SERVICES',
    text: 'SVG Provide Highest Quality',
    btn: 'READ MORE',
  },
  {
    src: '/images/4181366.jpg',
    heading: 'WAREHOUSING & PACKAGING SERVICES',
    text: 'SVG Provide Highest Quality',
    btn: 'READ MORE',
  },
];

export default function Carousel(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='relative w-full mx-auto mt-2'>
      <div className='relative h-[460px] mx-12 group'>
        <div className='testing'></div>
        <text className='absolute aana-or'>{images[currentIndex].text}</text>
        <text className='absolute aana-or-jaana'>
          {images[currentIndex].heading}
        </text>

        <Link className='btn_mod-b' href='/'>
          <text className='read-more'>{images[currentIndex].btn}</text>
        </Link>

        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          fill
          objectFit='cover'
          className='rounded-xl transition-all duration-500 ease-in-out cursor-pointer home-page-coruosel-image'
        />
      </div>
      <div className='flex justify-center mt-4'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? 'bg-[#beff46] rounded-xl'
                : 'bg-gray-300 rounded-xl'
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
