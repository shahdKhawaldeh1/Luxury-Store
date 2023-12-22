import { createSlice } from "@reduxjs/toolkit";
const sliceFromLocalStorage = JSON.parse(localStorage.getItem('cartSlice'))
const initialState = sliceFromLocalStorage ?? {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
};
const storeInLocal = (data) => {
    localStorage.setItem("cartSlice", JSON.stringify(data))
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: initialState,

        reducers: {
            addItem(state, action) {
                const newItem = action.payload;
                const existingItem = state.cartItems.find(item => item.id === newItem.id)
                state.totalQuantity++;
                if (!existingItem) {
                    state.cartItems.push({ ...newItem, quantity: 1, totalPrice: newItem.price })
                } else {
                    existingItem.quantity++;
                    existingItem.totalPrice = Number(existingItem.totalPrice + newItem.price); // existingItem.quantity * newItem.price
                }
                state.totalAmount = state.cartItems.reduce((total, item) => (
                    total + Number(item.price) * Number(item.quantity)
                ), // initial value
                    0);

                storeInLocal(state)
            },
            // ===== remove item (decrement quantity by one) =  =====
            removeItem(state, action) {
                const id = action.payload;
                const existingItem = state.cartItems.find(item => item.id === id);
                state.totalQuantity--;

                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
                }

                state.totalAmount = state.cartItems.reduce((total, item) => (
                    total + Number(item.price) * Number(item.quantity)
                ), 0)
                storeInLocal(state)
            },

            // ====== delete item ======
            deleteItem(state, action) {
                const id = action.payload;
                const existingItem = state.cartItems.find(item => item.id === id);

                if (existingItem) {
                    state.cartItems = state.cartItems.filter(item => item.id !== id);
                    state.totalQuantity = state.totalQuantity - existingItem.quantity;
                }

                state.totalAmount = state.cartItems.reduce((total, item) => (
                    total + Number(item.price) * Number(item.quantity)
                ), 0)
                storeInLocal(state)
            },

            reset() {
                return {
                    cartItems: [],
                    totalQuantity: 0,
                    totalAmount: 0
                };
            },
        }
    }
);

export const cartActions = cartSlice.actions;


export default cartSlice;