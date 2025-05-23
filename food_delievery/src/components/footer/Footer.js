import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='' />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                
                    </div>
                <div className='footer-content-center'>
                         <h2>COMPANY</h2>
                         <ul>
                            <li onClick={()=>navigate('/')}>Home</li>
                            <li>About us</li>
                            <li onClick={()=>navigate('/order')}>Delievery</li>
                            <li>Privacy policy</li>

                         </ul>
                </div>
           
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-1231231230</li>
                    <li>contact@gmail.com</li>

                <a href='https://play.google.com/store'>
    <img src={assets.play_store} alt='' /></a>
                </ul>
             

            </div>
             </div>
             <hr />
             <p className='footer-copyright'>
                Copyright 2025 &copy; Eatoo- All Right Reserved

             </p>
    
      
    </div>
  )
}

export default Footer






