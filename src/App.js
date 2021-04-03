import React from 'react';
import './App.css';
import Billboard from './components/Billboard';
import Footer from './components/Footer';
import Header from './components/Header'
import Showbar from './components/Showbar'
import SwiperCom from './components/SwiperCom';

function App() {

    return (
        <div className='app__container'>
            <Header />
            <Billboard />
            <div className='app__body'>
                <div className="app__wrap">
                    <h2 className='app__h2'>New Collection</h2>
                </div>
                <SwiperCom />
                <h2 className='app__heading'>The Lacoste world</h2>
            </div>
            <div className='app__adver'>
                <div className='adver__f'>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + '/slideImg/lfive.webp'} alt="" />
                        <p className='adver__padd padd__f'>Lacoste x Ricky Regal</p>
                        <p className='adver__padd padd__s'>Exclusive Collaboration</p>
                        <button className='adver__but'>Explore</button>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + '/slideImg/lone.webp'} alt="" />
                        <p className='adver__padd padd__f'>New Spring Looks</p>
                        <p className='adver__padd padd__s'>Exclusive Collaboration</p>
                        <button className='adver__but'>Introduce Yourself</button>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={process.env.PUBLIC_URL + '/slideImg/ltwo.webp'} alt="" />
                        <p className='adver__padd padd__f f__below'>Lacoste Polo Shirts</p>
                        <p className='adver__padd padd__s s__below'>Exclusive Collaboration</p>
                        <button className='adver__but but__below'>See all</button>
                    </a>
                </div>
                <div>
                    <a href="">
                        {window.innerWidth <= 768 ? (
                            <video loop autoPlay muted src={process.env.PUBLIC_URL + '/video/lv.webm'} />
                        ) : (
                            <img src={process.env.PUBLIC_URL + '/slideImg/lthree.webp'} alt="" />
                        )}
                        <p className='adver__padd padd__f f__below'>Lacoste Sport Collection</p>
                        <p className='adver__padd padd__s s__below'>Exclusive Collaboration</p>
                        <button className='adver__but but__below'>Your turn to play</button>
                    </a>
                </div>
            </div>
            <div className='app__show'>
                <Showbar />
            </div>
            <footer>
                <Footer />
                <div className='app__footer'>
                    <ul>
                        <li><a href="">Sitemap <span>|</span></a></li>
                        <li><a href="">Terms & COndition <span>|</span></a></li>
                        <li><a href="">Credits <span>|</span></a></li>
                        <li><a href="">Privacy policy <span>|</span></a></li>
                        <li><a href="">Size Guide</a></li>
                    </ul>
                    <a href="">France</a>
                </div>
            </footer>
        </div>
    )
}
export default App;