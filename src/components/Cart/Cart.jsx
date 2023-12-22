import React from 'react';
import './styles.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem.jsx';
import { Link } from 'react-router-dom';
export const Cart = (props) => {
  const cartsProduct = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    // Use props.showMenu to conditionally render the cart menu
    props.showMenu ? (
      <>
        <div className={'cart-container'}>
          <div className={'cart'}>
            <h2 className='cart-heading'>Cart</h2>
            <ul className='listCart'>
              {
                cartsProduct.length ? cartsProduct.map(item => <CartItem key={item.id} product={item} />) :
                  <p style={{color: "red"}}>Your cart is empty</p>
              }
            </ul>
            <div className='checkout cart__bottom'>
              <h6>Subtotal : <span>${totalAmount}</span></h6>
              <button>
                <Link style={{color: "#fff", textDecoration: "none"}} to={'/checkout'}>Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    ) : null
  );
};


