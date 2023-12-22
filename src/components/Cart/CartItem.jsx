import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice.js';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const incrementItem = () => dispatch(cartActions.addItem({ ...product }));
    const decreasetItem = () => dispatch(cartActions.removeItem(product.id));
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(product.id))
    }
    return (
        <li className='cart__item'>
            <div className='cart__item-info'>
                <img src={product.image} alt="product img" />
                <div className="cart__product-info">
                    <h6 className="cart__product-title">{product.title.slice(0, 15)}...</h6>
                    <p className='cart__product-price'>{product.quantity}x <span>${product.totalPrice}</span></p>
                    <div className="increase__decrease">
                        <span className='increase__btn' onClick={incrementItem}><i className="ri-add-line"></i></span>
                        <span className='quantity'>{product.quantity}</span>
                        <span className='decrease__btn' onClick={decreasetItem}><i className="ri-subtract-line"></i></span>
                    </div>
                </div>
                <span className='delete__btn' onClick={deleteItem}><i className="ri-close-line"></i></span>
            </div>
        </li>
    )
}

export default CartItem
