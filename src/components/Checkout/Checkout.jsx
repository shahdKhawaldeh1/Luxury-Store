import React, { useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './checkout.css'
import { cartActions } from '../../store/cartSlice.js'
const initialInputsState = {
    name: "",
    email: "",
    number: "",
    country: "",
    city: "",
    postalCode: ""
}

function inputsStateReducer(state, action) {
    switch (action.type) {
        case 'changeInputValue':
            {
                const { name, value } = action.payload.target
                return { ...state, [name]: value };
            }
        case 'reset':
            return initialInputsState;
        default:
            return state;
    }
}

function Checkout() {
    const dispatch = useDispatch();
    const [inputsState, dispatchInputsState] = useReducer(inputsStateReducer, initialInputsState);
    const handleInputsChange = e => { dispatchInputsState({ type: "changeInputValue", payload: e }) }
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const shippingCost = cartTotalAmount ? 30 : 0;
    const totalAmount = cartTotalAmount + Number(shippingCost);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ok", inputsState);
        dispatchInputsState({ type: "reset" })
        localStorage.removeItem('cartSlice')
        dispatch(cartActions.reset())
    }
    return (
        <section className='checkout__section'>
            <div className="container">
                <h2 className='title-checkout mb-4'>Shipping Address</h2>

                <form className="checkout__form w-100" onSubmit={handleSubmit}>

                    <div className="form__group w-100">
                        <input  className="form-checkout-input"type="text" placeholder='Enter your name'
                            name='name'
                            value={inputsState.name}
                            required onChange={handleInputsChange} />
                    </div>

                    <div className="form__group">
                        <input  className="form-checkout-input" type="email" placeholder='Enter your email'
                            name='email'
                            value={inputsState.email}
                            required onChange={handleInputsChange} />
                    </div>

                    <div className="form__group">
                        <input  className="form-checkout-input" type="number" placeholder='Phone number'
                            name='number'
                            value={inputsState.number}
                            required onChange={handleInputsChange} />
                    </div>

                    <div className="form__group">
                        <input className="form-checkout-input"  type="text" placeholder='Country'
                            name='country'
                            value={inputsState.country}
                            required onChange={handleInputsChange} />
                    </div>

                    <div className="form__group">
                        <input  className="form-checkout-input" type="text" placeholder='City'
                            name='city'
                            value={inputsState.city}
                            required onChange={handleInputsChange} />
                    </div>

                    <div className="form__group">
                        <input  className="form-checkout-input" type="number" placeholder='Postal code'
                            name='postalCode'
                            value={inputsState.postalCode}
                            required onChange={handleInputsChange} />
                    </div>
                    <button className="addTOCart__btn">Payment</button>

                </form>

                {/* End of form */}
                <div className="checkout__bill w-25">
                    <h4 className=' d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h4>
                    <h4 className=' d-flex align-items-center justify-content-between'>Shipping: <span>${shippingCost}</span></h4>
                    <div className='checkout__total mb-3'>
                        <h3 className=' d-flex align-items-center justify-content-between'>Total: <span>${totalAmount.toFixed(2)}</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
