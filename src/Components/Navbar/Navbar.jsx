import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

    const [menu,setMenu] = useState("shop");
    const cartItemCount = Object.values(cartItems).reduce((acc, cur) => acc + cur, 0);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>UNITYWEAR</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none' }}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none' }}to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none' }}to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none' }}to='/kids'>Kid</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" />
        {cartItemCount > 0 && <div className="nav-cart-count">{cartItemCount}</div>}</Link>
        
      </div>
    </div>
  )
}

export default Navbar
