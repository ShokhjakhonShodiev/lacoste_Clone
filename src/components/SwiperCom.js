import React from 'react'
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual, Navigation } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Virtual, Navigation]);

function SwiperCom() {

    const slides = [];
    for(let i = 1; i <= 12; i++){
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={`/slideImg/slide-${i}.webp`} alt=""/>
            </SwiperSlide>
        )
    }

    return (
        <div>
            <Swiper 
                id='main'
                spaceBetween={50}
                slidesPerView={3}
                navigation   
            >
                {slides}
            </Swiper>
        </div>
    )
}

export default SwiperCom
