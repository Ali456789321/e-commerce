import React from 'react'
import './shop.css'
import Footer from './homeComponents/Footer'


const Shop = ({cartItems, handleAddProduct, handleRemoveProduct}) => {

const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)

  return (
    <>
       <div className='container'>
        <div className='jumbo-img'>
        <div className='shop-jumbo-img'>
          <div className='img-shade'></div>
        </div>
        <h1>Shop Now</h1>
        </div>
       
    {cartItems && cartItems.length > 0 ? (
      cartItems.map(items => {
        return(
          <>
          <div className='row mt-3'>
          <div className='col-6'>
          <img className='shop-img' src={items.imgs} alt={items.imgs}/>  
          </div>
            <div className='col-6 quantities'>
            <span className='minus-button' onClick={()=> {handleRemoveProduct(items)}}>-</span>
            <span className='fw-bold'>X{items.quantity}</span>
            <span className='plus-button' onClick={() => {handleAddProduct(items)}}>+</span>
            <h5 className='mt-3'>Price: {items.price * items.quantity}</h5>      
            </div>      
          </div>
          </>
        )
      })
    ) : (
      <p>No items in cart</p>
    )}
    
    <h3 className='text-center mt-5'>Total Price: {totalPrice}</h3>
  </div>
  <Footer/>
    </>
  )
}

export default Shop