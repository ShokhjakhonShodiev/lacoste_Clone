import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className='footer__wrap wrap__con'>
            <div className='footer__f footer__ff'>
                <p>Join Le Club Lacoste</p>
                <input placeholder='Your Email Address' type="text" />
                <button className='sign'>Sign Up</button>
                <div className='footer__icons'>
                    <ul>
                        <li>
                            <a href=""><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li>
                            <a href=""><i class="fab fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
                <button className='bouti'>Find a boutique</button>
            </div>
            <div className='footer__wrap'>
                <div className='footer__f ff__ff'>
                    <p>Join Le Club Lacoste</p>
                    <input placeholder='Your Email Address' type="text" />
                    <button className='sign'>Sign Up</button>
                    <div className='footer__icons'>
                        <ul>
                            <li>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-pinterest-p"></i></a>
                            </li>
                            <li>
                                <a href=""><i class="fab fa-youtube"></i></a>
                            </li>
                        </ul>
                    </div>
                    <button className='bouti'>Find a boutique</button>
                </div>
                <div className='footer__s'>
                    <p>About Lacoste</p>
                    <ul>
                        <li><a href="">Le CLub Lacoste</a></li>
                        <li><a href="">The Lacoste Group</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Brand protection</a></li>
                    </ul>
                </div>
                <div className='footer__th'>
                    <p>Categoties</p>
                    <ul>
                        <li><a href="">Men's Collection</a></li>
                        <li><a href="">Women's Collection</a></li>
                        <li><a href="">Kids Collection</a></li>
                        <li><a href="">Polo Shop</a></li>
                        <li><a href="">Shoe Shop</a></li>
                        <li><a href="">Lacoste Live</a></li>
                        <li><a href="">Lacoste Sport</a></li>
                    </ul>
                </div>
                <div className='footer__fo'>
                    <p>Help & Contact</p>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">BY EMAIL</a></li>
                        <li><a href="">BY PHONE</a></li>
                        <li><a href="">(93) 105 98 27</a></li>
                    </ul>
                    <p className='fo__des'>Contact our customer service team from Monday to Friday from 8 am to 6 pm and on Saturday from 9 am to 5 pm.</p>
                    <p className='fo__des__tw'>**Local costs apply depending on your phone provider.</p>
                </div>
            </div>
        </div>
    )
}
