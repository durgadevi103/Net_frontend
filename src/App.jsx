import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavbarDA from './Components/NavbarDA';
import Footer from './Components/Footer';
import SkinCare from './Components/SkinCare';
import HairCare from './Components/HairCare';
import Cosmetics from './Components/Cosmetics';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';



const App = () => {
  const [cart,setCart] = useState([])

  const handleAddToCart = (item) =>{
    setCart([...cart,item])
  };
  
  return (
    <div>
      
      <BrowserRouter>
      <NavbarDA cart={cart}/>
      <Routes>
        <Route path='/*' element={<Home addToCart={handleAddToCart}/>}/>
        <Route path='/skincare' element={<SkinCare addToCart={handleAddToCart}/>}/>
        <Route path='/haircare' element={<HairCare addToCart={handleAddToCart}/>}/>
        <Route path='/cosmetics' element={<Cosmetics addToCart={handleAddToCart}/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
