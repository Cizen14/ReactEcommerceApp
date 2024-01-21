import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/herologo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/down-arrow.png'

const Navbar = () => {
  const [menu, setMenu]=useState("shop")
  const {getTotalCartItems} = useContext(ShopContext);
  


  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

  }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>Shopaholic</p>
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt='' />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link  class="text-secondary" style={{textDecoration:'none'}} to='/'>Shop</Link>{menu ==="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}><Link class="text-secondary" style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu ==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link class="text-secondary" style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu ==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link class="text-secondary" style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu ==="kids"?<hr/>:<></>}</li>
        </ul>
        <ul className='nav-login-cart'>
            <Link to='/login'><button>Login</button> </Link>
            <Link to='/cart'> <img src={cart_icon} alt='' /> </Link>
            <div className='nav-count'>{getTotalCartItems()}</div>
        </ul>

      
    </div>
  )
}

export default Navbar
