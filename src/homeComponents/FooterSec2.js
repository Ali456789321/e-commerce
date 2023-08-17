import React from 'react'
import './footer.css'
import { BsHouseDoorFill, BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import footerdata from './footerdata'

const FooterSec2 = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
         <div className='col-lg-3 col-12'>
            <div className='contact ps-lg-5 ps-0'>
            <h5 style={{color:"white"}} className='ps-lg-5 ps-2'>Contact Us</h5>
            <div className='d-flex ps-lg-5 ps-0'>
                <BsHouseDoorFill className='house'/>
                <p className='pt-1 ms-2'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
            </div>
            <div className='d-flex ps-lg-5 ps-0'>
                <BsTelephoneFill className='pt-2 phone'/>
                <p className='pt-1 ms-2'>000 - 123456789</p>
            </div>   
            <div className='d-flex ps-lg-5 ps-0'>
                <GrMail className='pt-2 phone'/>
                <p className='pt-1 ms-2'>info@example.com</p>
            </div>    
            </div>
         </div>
         {footerdata.map((items) => {
          return(
            <div className='col-lg-3 col-12 mt-lg-0 mt-4'>
            <div className='contact ps-lg-5 ps-0'>
            <h5 style={{color:"white"}} className='ps-lg-3 ps-2'>{items.name}</h5>
            <div className='ps-lg-3 ps-0'>
                <p className='m-0 pt-2'>{items.desc1}</p>
            </div>
            <div className='ps-lg-3 ps-0'>
                <p className='m-0 pt-2'>{items.desc2}</p>
            </div>   
            <div className='ps-lg-3 ps-0'>
                <p className='m-0 pt-2'>{items.desc3}</p>
            </div>  
            <div className='ps-lg-3 ps-0'>
                <p className='m-0 pt-2'>{items.desc4}</p>
            </div>  
            <div className='ps-lg-3 ps-0'>
                <p className='m-0 pt-2'>{items.desc5}</p>
            </div> 
            </div>
         </div>
          )
         })}
      </div>
    </div>
  )
}

export default FooterSec2