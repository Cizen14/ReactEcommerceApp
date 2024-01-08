import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  const [menu, setMenu]=useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>Shopaholic</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu ==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}>Men{menu ==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Women{menu ==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> kids{menu ==="kids"?<hr/>:<></>}</li>
        </ul>
        <ul className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} />
            <div className='nav-count'>0</div>
        </ul>

      
    </div>
  )
}

export default Navbar
