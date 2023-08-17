import React from 'react'
import './sale.css'

const Sale = () => {
    return (
        <>
            <div className='test-bg mt-5'>
                <div className='bg-shadow'></div>
                <div className='texts'>
                 <span>
                  <div className='sale text-center'>
                   <h4>THE SEASON BEGINS</h4> 
                  <h1 className='text-imgs'>PROMOTION<span className='span-text'> SALE UPTO 50%</span></h1>
                  <button className='mt-lg-3 mt-1'>SHOP NOW</button>  
                 </div>  
                 </span> 
                </div>
                <div className='second-pos text-center'>
                <h1 className='mt-lg-0 mt-5 pt-lg-0 pt-3 pb-'>HURRY</h1>
                <h2>BEORE OFFER ENDS</h2>
                <h4 className='mt-5'>Expired</h4>
                </div>
            </div>
        </>
    )
}

export default Sale