import React, { useState } from "react";
import './App.css';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiShoppingBag } from 'react-icons/gi';
import { HiMenu } from 'react-icons/hi';
import { ImCross } from 'react-icons/im';
// import data from "./data"
// // FiSearch

const Nav = (props) => {

  const [state, setState] = useState(false)
  const navigate = useNavigate()

  const goTo = () => {
     navigate('/shop')
  }



  return (
    <>
      <nav className="container">
        <div className="row">
          <div className="col-lg-4 col-6">
            <h1 className="pt-lg-2 pt-0">Shoes2</h1>
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <div className="pt-3">

              <NavLink to='/' className='home-pos anc'>Home</NavLink>
              <div className="collect-hover home-pos1">
                <NavLink to='/collection' className='ps-5 colect-nav anc'>Collection</NavLink>
                <div className="row hover-shoes">
                  {props.datas.map((item)=> {
                
                    return(
                      <div className="col-3 shoes-none">
                       <img src={item.imgs} id={item.id} alt={item.id}/>
                       <div onClick={goTo}>
                        <div></div>
                        <button className="hover-btn" id={item.id} onClick={() => props.handleAddProduct(item)}>{item.price}Rs</button>
                        </div>
                       </div>
                      
                      
                    )
                       
                  })}
                </div>
              </div>

              <NavLink to="/shoes" className='ps-5 home-pos2 anc'>Shoes</NavLink>


              <NavLink to="/climbing" className='ps-5 home-pos3 anc'>Climbing</NavLink>


              <NavLink to="#" className='ps-5 home-pos4 anc'>Pages</NavLink>

            </div>
          </div>

          <div className="col-lg-4 col-6 text-end pt-1 d-flex justify-content-end">
            <NavLink to="#" className='anc'>
              <FiSearch size={47} className="d-lg-block d-none pe-4" />
            </NavLink>
            <NavLink to="#" className='anc'>
              <BsFillPersonFill size={47} className="d-lg-block d-none pe-4" />
            </NavLink>
            <NavLink to="/shop" className='pt-2 anc'>
              <GiShoppingBag size={27} className="d-lg-block d-none pt-1" />
            </NavLink>
            <NavLink to="#" onClick={() => {
              setState(true)
            }} className='d-lg-none d-block anc'>
              <HiMenu size={23} />
            </NavLink>
          </div>

        </div>
      </nav>

      {/* Responsive Navbar */}

      <div className="black-bg d-lg-none" style={state ? { display: 'block' } : { display: 'none' }}></div>

      <div className="responsive-pos d-lg-none" style={state ? { display: 'block' } : { display: 'none' }}>
        <div className="text-end pe-3 cross-pos">
          <ImCross onClick={() => {
            setState(false)
          }} />
        </div>
        <hr className="mb-2 mt-4" />
        <div className="d-flex flex-column pt-1">
          <NavLink to='/' className='ps-3 anc'>Home</NavLink>
          <hr className="mb-2 mt-4" />
          <NavLink to='/collection' className='pt-3 ps-3 anc'>Collection</NavLink>
          <hr className="mb-2 mt-4" />
          <NavLink to="/shoes" className='pt-3 ps-3 anc'>Shoes</NavLink>
          <hr className="mb-2 mt-4" />
          <NavLink to="/climbing" className='pt-3 ps-3 anc'>Climbing</NavLink>
          <hr className="mb-2 mt-4" />
          <NavLink to="#" className='pt-3 ps-3 anc'>Pages</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Nav;
