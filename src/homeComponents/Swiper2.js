import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './swiper.css';


import swipedata from './swipedata';

import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';





// import required modules
import { Navigation } from "swiper";

const Swiper2 = () => {
  return (
    <>
    <div className='d-flex mt-5'>
      <div className='new-line'></div>
      <div className='ms-3'> 
      <h1>NEW ARRIVALS</h1>
      <h6 style={{color:"gray"}}>Just in now</h6>
      </div>
     
    </div>
   
    
      <div className='d-lg-block d-none mt-5'>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={3}
          spaceBetween={30} className="mySwiper">
          
             {swipedata.map(items => {
               return (
                <>
                <SwiperSlide>
                <div className="swiper-img" style={{backgroundImage: `url(${items.imgs})`}}></div>
              <h4 className="text-center pt-3">{items.name}</h4>
              <hr />
              <div className='row'>
               <div className='col-6'> 
                 <h4 className='fw-bold'>$758</h4>
                  <AiFillStar size={15}/>
                  <AiFillStar size={15}/>
                  <AiFillStar size={15}/>
                  <AiFillStar size={15}/>
                  <AiOutlineStar size={15}/>
               </div>
               <div className='col-6 text-end'>
                <GiShoppingBag size={55} className='pt-3 pe-3'/>
               </div>
              </div>
                </SwiperSlide>
                </>
               )
             })}
        </Swiper>
      
      </div>

      <div className='d-sm-none d-block mt-5'>
        <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}
          spaceBetween={30} className="mySwiper">
         {swipedata.map(items => {
               return (
                <>
                <SwiperSlide>
                <div className="swiper-img" style={{backgroundImage: `url(${items.imgs})`}}></div>
              <h4 className="text-center pt-lg-0 pt-3">{items.name}</h4>
              <hr />
              <div className='row'>
               <div className='col-6'>
                 <h2>$758</h2>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
               </div>
               <div className='col-6 text-end'>
               <GiShoppingBag size={55} className='pt-3 pe-3'/>
               </div>
              </div>
                </SwiperSlide>
                </>
               )
             })}
          
        </Swiper>
        
      </div>
    </>
  )
}

export default Swiper2