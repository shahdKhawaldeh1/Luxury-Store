import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.jsx';
import { Category } from './components/Category/Category.jsx';
import {Navbar} from './components/Navbar/Navbar.jsx';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { Product } from './components/Product/Product.jsx';
import { Cart } from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import { Footer } from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='category/*' element={<Category />} />
        <Route path='product/:id' element={<Product />} />
      
        <Route path='cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
