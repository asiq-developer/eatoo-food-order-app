import React, { useState } from 'react'
import Navigationbar from './components/navbar/Navigationbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeorder/Placeorder'
import Footer from './components/footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'





const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navigationbar setShowLogin={setShowLogin} />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
    
  
  
      
    </div>
    <Footer />
    </>
  )
}

export default App
