import React, { useState } from 'react'
import logo from '../images/logon.png'
import searchs from '../images/searches.png'
import loc from '../images/loc.jpg'
import lacos from '../images/lacos.jpg'
import './hamburgers.css';
import './Header.css'
import Man_Hover from './subComponent/Man_Hover'
import Women_Hover from './subComponent/Women_Hover'
import Kid_Hover from './subComponent/Kid_Hover'
import Lacoste_Hover from './subComponent/Lacoste_Hover'
export default function Header() {
    const [active, setActive] = useState(false)

    let isactive = active ? 'is-active' : 'not-active'
    return (
        <div className='header__container'>
            <div className='header__laptop'>
                <a href="">
                    <img className='header__sea' src={searchs} alt="" />
                </a>
                <img className='header__lacos' src={lacos} alt="" />
                <button onClick={() => (setActive(!active))} class={`hamburger hamburger--collapse ${isactive}`} type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className='header__head'>
                <div className='header__logo'>
                    <a href="">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className='header__link'>
                    <div className='header__nav'>
                        <ul>
                            <li className='header__hove'>
                                <a className='nav__hov' href="">Men</a>
                                < Man_Hover/>
                            </li>
                            <li className='header__hove'>
                                <a className='nav__hov' href="">Women</a>
                                < Women_Hover/>
                            </li>
                            <li className='header__hove'>
                                <a className='nav__hov' href="">Kids</a>
                                <Kid_Hover />
                            </li>
                            <li className='header__hove'>
                                <a className='nav__hov' href="">Lacoste Inside</a>
                                <Lacoste_Hover />
                            </li>
                            <li>
                                <a href="">
                                    <img src={searchs} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='header__loc'>
                        <a href="">En</a>
                        <a href=""><img src={loc} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
