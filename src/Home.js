import React from "react";
import './home.css'
import img1 from './images/caro-img1.jpg'
import img2 from './images/caro-img2.jpg'
import img3 from './images/caro-img3.jpg'
import Example from "./homeComponents/Example";
import Swiper2 from "./homeComponents/Swiper2";
import Sale from "./homeComponents/Sale";
import Option from "./homeComponents/Option";
import { Footer } from "./homeComponents/Footer";




const Home = () => {
  return (
    <>
      <div className="container-sm-fluid container">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img2} class="d-block w-100 height-img" alt="..." />
              <div class="carousel-caption">
                <button className="btn-1">Shop Now</button>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img1} class="d-block w-100 height-img" alt="..." />
              <div class="carousel-caption">
                <button className="btn-2">Shop Now</button>
              </div>
            </div>
            <div class="carousel-item ">
              <img src={img3} class="d-block w-100 height-img" alt="..." />
              <div class="carousel-caption">
                <button className="btn-3">Shop Now</button>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <Example/>
        <Swiper2/>
      </div>
      <Sale/>
      <div className="container">
        <Option/>
      </div>
      <Footer/>
    </>
  )
}

export default Home;