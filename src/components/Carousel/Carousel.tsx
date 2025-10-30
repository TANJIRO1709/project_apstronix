'use client';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { SwiperRef } from 'swiper/react';
import { ScreenViewContainer, SliderContainer, Wrapper } from './Carousel.styles';
import { LeftArrowButton, RightArrowButton } from './ArrowButton';
import './swiper.css';
interface SwiperCarouselProps {
  // Accept either a render function (used by callers like Featuredcomp) or pre-built nodes.
  mapFunction: React.ReactNode | (() => React.ReactNode);
  mobileViewClassName?: string;
  desktopViewClassname?: string;
  onIndexChange?: (index: number) => void;
  isEventSection?: boolean;
}

export const SwiperCarousel: React.FC<SwiperCarouselProps> = ({
  mapFunction,
  mobileViewClassName,
  desktopViewClassname,
  onIndexChange,
  isEventSection,
}) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef<SwiperRef | null>(null);
  const slideWidth = 456.74;

  useEffect(() => {
    const updateScreenSize = () => setIsMobile(window.innerWidth < 900);
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const handleNext = () => swiperRef.current?.swiper?.slideNext();
  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();

  const onSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    setCurrentIndex(newIndex);
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
  };

  useEffect(() => {
    if (scope.current) {
      const xOffset = -currentIndex * slideWidth;
      animate(
        scope.current,
        { x: xOffset },
        { duration: 7, ease: [0.42, 0, 0.58, 1], type: 'tween' },
      );
    }
  }, [currentIndex, animate, scope]);

  return (
    <Wrapper>
      <ScreenViewContainer>
        <div style={{ position: 'absolute', left: '10px', top: '50%', zIndex: 10 }}>
          <LeftArrowButton onClick={handlePrev} />
        </div>
        <SliderContainer>
          <Swiper
            ref={swiperRef}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides
            loop
            spaceBetween={isMobile ? 30 : 0}
            onSlideChange={onSlideChange}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: isEventSection ? 3000 : 15000, disableOnInteraction: false }}
            className={isMobile ? mobileViewClassName : desktopViewClassname}
          >
            {typeof mapFunction === 'function' ? mapFunction() : mapFunction}
          </Swiper>
        </SliderContainer>
        <div style={{ position: 'absolute', right: '10px', top: '50%', zIndex: 10 }}>
          <RightArrowButton onClick={handleNext} />
        </div>
      </ScreenViewContainer>
    </Wrapper>
  );
};