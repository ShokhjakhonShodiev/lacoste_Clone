import React, { } from 'react'
// import Swiper JS
import { SwiperSlide } from 'swiper/react';
import Swiper from 'react-id-swiper';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// import slide1 from '/slideImg/slide-1.webp'
import './SwiperCom.css'

SwiperCore.use([Virtual, Navigation, Pagination]);

function SwiperCom() {
    const slides = [];
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }
    let view;
    let w = window.innerWidth
    if (w <= 1024 && w > 768) {
        for (let i = 1; i <= 14; i++) {
            slides.push(
                <SwiperSlide key={`slide-${i}`} className={`slide${i}`}>
                    <img src={process.env.PUBLIC_URL + '/slideImg/slide-' + i + '.webp'} alt="" />
                    <div className='slide__text'>
                        <div>
                            <p>New Arrival</p>
                        </div>
                        <a href="">Men's Hooded Sweetshirt Cloud Based Jeans Collection</a>
                    </div>
                </SwiperSlide>
            )
        }
        view = (<div>
            <Swiper
                id='main'
                spaceBetween={30}
                slidesPerView={3}
                navigation
                {...params}
            >
                {slides}
            </Swiper>
        </div>)
    } else if (w > 1024) {
        for (let i = 1; i <= 15; i++) {
            slides.push(
                <SwiperSlide key={`slide-${i}`} className={`slide${i}`}>
                    <img src={process.env.PUBLIC_URL + '/slideImg/slide-' + i + '.webp'} alt="" />
                    <div className='slide__text'>
                        <div>
                            <p>New Arrival</p>
                        </div>
                        <a href="">Men's Hooded Sweetshirt Cloud Based Jeans Collection</a>
                    </div>
                </SwiperSlide>
            )
        }
        view = (<div>
            <Swiper
                id='main'
                spaceBetween={50}
                slidesPerView={4}
                navigation
                {...params}
            >
                {slides}
            </Swiper>
        </div>)
        
    } else if (w <= 768) {
        for (let i = 1; i <= 13; i++) {
            slides.push(
                <SwiperSlide key={`slide-${i}`} className={`slide${i}`}>
                    <img src={process.env.PUBLIC_URL + '/slideImg/slide-' + i + '.webp'} alt="" />
                    <div className='slide__text'>
                        <div>
                            <p>Exclusive Collaboration</p>
                        </div>
                        <a href="">Men's Hooded Sweetshirt Cloud Based Jeans Collection</a>
                    </div>
                </SwiperSlide>
            )
        }
        view = (<div>
            <Swiper
                id='main'
                spaceBetween={55}
                slidesPerView={1}
                navigation
                // {...params}
            >
                {slides}
            </Swiper>
        </div>)
        
    }
    return (<div className='swi__up'>
        {view}
    </div>)
}

export default SwiperCom
