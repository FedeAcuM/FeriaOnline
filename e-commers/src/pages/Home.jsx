import React from 'react';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenidos a Feria Online ¡donde encontras lo que buscas!</h1>
      <ProductList />
    </div>
  );
}

export default Home;
