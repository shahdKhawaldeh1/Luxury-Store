import React, { useEffect, useState } from 'react';
import './styles.css';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice.js';
export const Product = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    fetchProduct();
  }, [id]);

  const dispatch = useDispatch()
  const addToCart = () => dispatch(cartActions.addItem(product))
  return (
    <section className="product-section">
      <div className="product-container">
        <div className='product-details'>
          <div className='details'>
            <h2 className="product-brand">{product.category}</h2>
            <h1 className="product-title">{product.title}</h1>
            <div className="product-rating">
              <span className="product-star" />
              <span className="product-star" />
              <span className="product-star" />
              <span className="product-star" />
              <span className="product-star" />
              <span className="product-reviews">4 Reviews</span>
            </div>
            <p className="product-description">
              {product.description}
            </p>
            <div className="product-options">
              <div className="product-colors">
                <span className="product-color" />
                <span className="product-color product-active" />
                <span className="product-color product-indigo" />
              </div>
              <div className="product-sizes">
                <select className="product-size-select">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="product-price">
              <span className="product-price-value">${product.price}</span>
              <button className="product-add-to-cart" onClick={addToCart}>Add to Cart</button>
              <button className="product-favorite">
                <svg className="product-favorite-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='product-image'>
          <img className="product-image" src={product.image} alt="Product" />
        </div>
      </div>
    </section>
  );
}
