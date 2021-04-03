import React, {createRef, useState } from 'react'
// import Swiper JS
import { SwiperSlide } from 'swiper/react';
import Swiper from 'react-id-swiper';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
// import slide1 from '/slideImg/slide-1.webp'
import './Showbar.css'

SwiperCore.use([Virtual, Navigation, Pagination]);

function Showbar() {
    const [showCon, setShowCon] = useState([
        {
            pf: 'LASTING MEMORIES',
            h: 'Lacoste x Polaroid',
            ps: 'Iconic colours, retro motifs, and an inclusive spirit: the new Lacoste x Polaroid collection brings everyone together to make new memories…',
            b: 'Zoom In',
        },{
            pf: 'EXCLUSIVE COLLABORATION',
            h: 'Lacoste x Ricky Regal',
            ps: 'Lacoste\'s iconic sport premium spirit meets the charismatic Bruno Mars for a sun-inspired collection. For those looking to shine',
            b: 'Explore',
        },{
            pf: 'LASTING MEMORIES',
            h: 'Lacoste x Polaroid',
            ps: 'Iconic colours, retro motifs, and an inclusive spirit: the new Lacoste x Polaroid collection brings everyone together to make new memories…',
            b: 'Zoom In',
        },{
            pf: 'ESSENTIAL, ENDURING, TIMELESS',
            h: 'Icons: now & always',
            ps: 'The three iconic unisex Lacoste essentials for a style that never goes out of style.',
            b: '(Re)discover them',
        },{
            pf: 'ICONIC, FORMAL OR SHORT-SLEEVED',
            h: 'Which shirt is yours?',
            ps: 'Follow Lacoste\'s selection and pick a shirt for the new season and all the ones ahead.',
            b: 'Discover'
        }
    ]) 
    
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
    
    for (let i = 0; i <5; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} className={`slide${i}`}>
                <img src={process.env.PUBLIC_URL + '/slideImg/ss-'+i+'.webp'} alt="" />
                <div className='showbar__ins'>
                    <div className='showbar__inn'>
                        <p className='show__f'>{showCon[i].pf}</p>
                        <h2 className='show__hh'>{showCon[i].h}</h2>
                        <p className='show__th'>{showCon[i].ps}</p>
                    </div>
                    <a className='show__link' href="">{showCon[i].b}</a>
                </div>
            </SwiperSlide>
        )
    }

    return (<div className='showbar__swiper'>
        <h2 className={`lac__ins ${''}`}>Lacoste Inside</h2>
        {/* <img src={process.env.PUBLIC_URL + '/slideImg/llogo5.png'} alt=""/> */}
        <Swiper
            id='main'
            spaceBetween={30}
            slidesPerView={1}
            navigation
            {...params}
        >
            {slides}
        </Swiper>
    </div>)
}

export default Showbar
