import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { ReactComponent as CartIcon } from './../../assets/images/shopping-cart.svg'
import { Cart } from '../Cart/Cart'

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <nav className="custom-navbar">
  <div className="nav-left">
    <Link className="nav-link logo" to="/">
      Luxury Store
    </Link>
  </div>
  <div className="nav-center">
    <ul className="navbar-nav centered-list">
      <li className="nav-item">
        <Link className="nav-link " to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/category">
          Category
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About Us
        </Link>
      </li>
    </ul>
  </div>
  <div className="nav-right">
    <CartIcon
      className="cart-icon"
      onClick={() => {
        setIsMenuVisible(!isMenuVisible);
      }}
    />
  </div>
  <Cart showMenu={isMenuVisible} />
</nav>

  )
}

export default Navbar
