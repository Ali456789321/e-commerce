import React from 'react'
import { FaPlane, FaHeadphones } from 'react-icons/fa';
import { TbArrowsRightLeft, TbBrandSvelte } from 'react-icons/tb'



const Expectus = () => {
    return (
        <>
            <div className='row mt-5 pt-lg-5 pt-0'>
              <div className='col-lg-3 col-12 d-flex justify-content-lg-center justify-content-start ps-lg-0 ps-3'>
                 <FaPlane size={35}/>
                 <div className='ps-4'>
                   <h6 className='m-0'>Free</h6>
                   <h6>Delievery</h6>
                 </div>
              </div>
              <div className='col-lg-3 col-12 d-flex justify-content-lg-center justify-content-start mt-lg-0 mt-5 ps-lg-0 ps-3'>
                 <FaHeadphones size={35}/>
                 <div className='ps-4'>
                   <h6 className='m-0'>Free</h6>
                   <h6>Delievery</h6>
                 </div>
              </div>
              <div className='col-lg-3 col-12 d-flex justify-content-lg-center justify-content-start  mt-lg-0 mt-5 ps-lg-0 ps-3 '>
                 <TbArrowsRightLeft size={35}/>
                 <div className='ps-4'>
                   <h6 className='m-0'>Free</h6>
                   <h6>Delievery</h6>
                 </div>
              </div>
              <div className='col-lg-3 col-12 d-flex justify-content-lg-center justify-content-start  mt-lg-0 mt-5 ps-lg-0 ps-3 '>
                 <TbBrandSvelte size={35}/>
                 <div className='ps-4'>
                   <h6 className='m-0'>Free</h6>
                   <h6>Delievery</h6>
                 </div>
              </div>
            </div>
            
        </>
    )
}

export default Expectus