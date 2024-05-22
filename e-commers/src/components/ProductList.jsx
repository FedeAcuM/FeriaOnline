import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

