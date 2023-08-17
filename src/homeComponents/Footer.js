import React from 'react'
import './footer.css'
import { BsTwitter } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaGooglePlusG, FaTumblr } from 'react-icons/fa'
import FooterSec2 from './FooterSec2'

export const Footer = () => {
 
 

  return (
    <div className='bg-black'>
       <div className='container'>
        <div className='row pt-4 mt-5'>
            <div className='col-lg-4 col-12 text-lg-center text-start'>
            <h1 className='footer-head text-lg-end text-center'>ShoesZone</h1> 
            </div>
            <div className='col-lg-4 col-12 text-lg-center text-start footer-inp text-lg-start text-center'>
             <input type='text' className='footer-inp mt-lg-0 mt-5' placeholder='Your email address'/>
            </div>
            <div className='col-lg-4 col-12 pt-lg-4 pt-5'>
              <div className='footer-icons'>
              <NavLink>
              <BsTwitter size={25}/>  
              </NavLink> 
              <NavLink>
              <FaFacebookF size={25}/>  
              </NavLink>  
              <NavLink>
              <FaGooglePlusG size={30}/>  
              </NavLink>  
              <NavLink>
              <FaTumblr size={25}/>  
              </NavLink>   
              </div>
            </div>
        </div>
       </div>
       <hr style={{color: 'white'}}/>
       <FooterSec2/>
    </div>
  )
}

export default Footer