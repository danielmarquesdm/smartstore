import React, { useEffect } from 'react';

import './Main.css';
import ProductList from '../components/productList/ProductList';
import ProductOnCart from '../components/productOnCart/ProductOnCart';

export default function Main({ history }) {
  useEffect(() => {}, []);

  async function handleCart() {
    history.push('/carrinho');
  }

  return (
    <div className="main-container">
      <ProductOnCart onCart={() => handleCart()} />
      <ProductList onAddCart={() => handleCart()} />
    </div>
  );
}
