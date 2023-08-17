import React from 'react'
import './example.css'
import data from './data'
import { NavLink } from 'react-router-dom'
import img1 from '../images/pexels-becca-correia-8723508.jpg'
import img2 from '../images/pexels-rizky-sabriansyah-8268859.jpg'
import img3 from '../images/pexels-julie-aagaard-5044314.jpg'


const Example = () => {

 
  return (
    <>
     <div className='row'>
       <div className='col-lg-7 col-12'>
           <div className='row'>
            {data.map(items => {
              return(
                <div className='col-lg-6 col-12 mt-3'>
              <NavLink to='/collection' className='examp-anc'>
              <div className='bg-img' style={{backgroundImage: `url(${items.imgs})`}}>
                   <h2 className='ps-3'>{items.desc}</h2>
                </div>
              </NavLink>
             </div>
              )
            })}
           </div>
       </div>
       <div className='col-lg-5 col-12 mt-3'>
       <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='blur-grey'></div>
      <img src={img1} className="d-block w-100 examp-img1" alt="..."/>
      <div className='examp-desc'>
      <h1>SIGNS</h1>
      <div className='black-border'></div>
      <h3 className='pt-4'>Make The Season Yours</h3>
      </div>
    </div>
    <div class="carousel-item">
    <div className='blur-grey'></div>
      <img src={img2} className="d-block w-100 examp-img1" alt="..."/>
      <div className='examp-desc1'>
      <h1>COSMOS</h1>
      <h1>STORES</h1>
      <div className='black-border'></div>
      <h3 className='pt-4'>Make The Season Yours</h3>
      </div>
    </div>
    <div class="carousel-item">
    <div className='blur-grey'></div>
      <img src={img3} className="d-block w-100 examp-img1" alt="..."/>
      <div className='examp-desc'>
      <h1>SNEEK PEEK</h1>
      <div className='black-border'></div>
      <h3 className='pt-4'>Make The Season Yours</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev prev-pos" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next next-pos" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       </div>
     </div>
    </>
  )
}

export default Example