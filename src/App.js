import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Collection from './Collection';
import Shoes from './Shoes';
import Climbing from './Climbing';
import Shop from './Shop';
import data from './data';
import { useState } from 'react';


function App() {

const [cartItems, setCartItems] = useState([])




const handleAddProduct = (product) => {
  const existingProduct = cartItems.find(item => item.id === product.id);
  if(existingProduct){
    setCartItems(cartItems.map(item => {
      console.log(item)
     return item.id === product.id ? {...existingProduct, quantity:existingProduct.quantity + 1} : item  }))
  } else{
    setCartItems([...cartItems,{...product,quantity:1}])
  }
}

const handleRemoveProduct = (product) => {
  const existingProduct = cartItems.find(item => item.id === product.id);
  if(existingProduct.quantity === 1){
    setCartItems(cartItems.filter(item => {
     return item.id !== product.id 
  }))
  } else{
    setCartItems(cartItems.map(item => {
      return item.id === product.id ? {...existingProduct, quantity:existingProduct.quantity - 1} : item
   }))
  }
}

  return (
    <>
        <HashRouter> 
          <Routes>
            <Route path='/' element={<Nav datas={data} handleAddProduct={handleAddProduct}/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/collection' element={<Collection handleAddProduct={handleAddProduct}/>}/>
            <Route path='/shoes' element={<Shoes/>}/>
            <Route path='/climbing' element={<Climbing/>}/>
            <Route path='/shop' element={<Shop cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
            </Route>
          </Routes>
        </HashRouter>
    </>
  );
}

export default App;


