import React from 'react';
import './App.css';
import Header from './components/Header'
import SwiperCom from './components/SwiperCom';
import left_chev from './images/left-chevron.png'
import right_chev from './images/right-chevron.png'

function App() {
    return (
        <div className='app__container'>
            <Header />
            <div className='app__body'>
                <div className="app__wrap">
                    <h2 className='app__h2'>New Collection</h2>
                    <div className='app__number'>
                        <a href="">
                            <img src={left_chev} alt="" />
                        </a>
                        <strong> 1 / 12 </strong>
                        <a href="">
                            <img src={right_chev} alt="" />
                        </a>
                    </div>
                </div>
                <SwiperCom />
            </div>
        </div>
    )
}
export default App;