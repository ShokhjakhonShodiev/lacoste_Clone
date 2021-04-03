import React from 'react'
import './Billboard.css'
function Billboard() {
    return (
        <div className='bill__con'>
            <div className='bill__up'>
                <a className='bill__f' href="">
                    <img src={process.env.PUBLIC_URL + '/slideImg/bill.webp'} alt="" />
                </a>
            </div>
            <div className='bill__below'>
                <h2>AG-LT21 Ultra shoes</h2>
                <p>Your new game exprience</p>
                <a className='bill__s' href="">Raise your level</a>
            </div>
        </div>
    )
}

export default Billboard
