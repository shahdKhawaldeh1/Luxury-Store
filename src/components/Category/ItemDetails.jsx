import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/cartSlice.js';
import { useDispatch } from 'react-redux';

export const ItemDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const responseData = await response.json();
      setData(responseData);
    };

    getProducts();
  }, []);
  const dispatch = useDispatch();
  const addToCart = (product) => dispatch(cartActions.addItem(product))

  return (
    <div className="container">
      <div className="row">
        <div className="categories">
          <div className="category-buttons">
            <h2 className="title-items">Popular Collection</h2>
          </div>

          <div className="card-container">
            {data.map((product) => (
              <div className="custom-card" key={product.id}>
                <Link to={`/product/${product.id}`} className="item-link"> { }
                  <img src={product.image} className="custom-card-img" alt={product.title} />
                  <div className="custom-card-body">
                    <h5 className="custom-card-title">{product.title.substring(0, 12)}</h5>
                    <p className="custom-card-text">${product.price}</p>
                  </div>

                </Link>
                <center>
                  <button className="product-add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
                </center>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
