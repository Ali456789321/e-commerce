import React from 'react'
import './cards.css'
import { NavLink } from 'react-router-dom'
import cardata from './cardata'
import { AiFillStar } from 'react-icons/ai'
import { GiShoppingBag } from 'react-icons/gi'

const Card1 = () => {
  return (
    <>
     <div className='row'>
      {cardata.map((items)=> {
            return (
              <div className='col-lg-6 col-12 pt-5'>
                <div className='width'>
                <NavLink>
                <div className='card-img  card-animate' style={{backgroundImage: `url(${items.imgs})`}}>
                </div>
              </NavLink>
              <h4 className="text-center pt-3">{items.desc}</h4>
              <hr/>
              <div className='row'>
               <div className='col-6'>
                 <h2 className='pt-3'>$758</h2>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
               </div>
               <div className='col-6 text-end'>
                <NavLink>
                  <GiShoppingBag size={90} className='pe-5 shop-bag'/>
                </NavLink>
               </div>
              </div>
                </div>
             </div>
            )
      })}
     </div>
    </>
  )
}

export default Card1