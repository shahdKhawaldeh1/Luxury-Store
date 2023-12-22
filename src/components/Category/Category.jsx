import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';

export const Category = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      let apiUrl = "https://fakestoreapi.com/products";

      if (selectedCategory) {
        let encodedCategory = encodeURIComponent(selectedCategory); // Encode the category name
        apiUrl += `/category/${encodedCategory}`;
        navigate(`/category/${encodedCategory}`);
      }

      const response = await fetch(apiUrl);
      const responseData = await response.json();
      setData(responseData);
    };

    getProducts();
  }, [selectedCategory, navigate]);

  return (
    <div className="container">
      <div className="row">
        <div className='categories'>
          <div className='category-buttons'>
            <button className='category-btn' onClick={() => setSelectedCategory("jewelery")}>Jewelry</button>
            <button className='category-btn' onClick={() => setSelectedCategory("men's clothing")}>Men's Collection</button>
            <button className='category-btn' onClick={() => setSelectedCategory("women's clothing")}>Women's Collection</button>
          </div>

          <div className="card-container">
            {data.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-link"> {/* Add a class for styling */}
                <div className="custom-card">
                  <img src={product.image} className="custom-card-img" alt={product.title} />
                  <div className="custom-card-body">
                    <h5 className="custom-card-title">{product.title.substring(0, 12)}</h5>
                    <p className="custom-card-text">${product.price}</p>
                    <a href="#" className="custom-card-button">
                      Buy Now
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
