import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Main.css';
import api from '../services/api';
import ProductOnCart from '../components/productOnCart/ProductOnCart';
import Button from '../components/button/Button';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/');
    this.setState({ products: response.data });
  }

  handleAddToCart = (product) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="main-container">
        <ProductOnCart />
        <ul id="productList-container">
          {products.map((product) => (
            <li key={product._id}>
              <img src={product.image} alt={product.name} />
              <footer>
                <strong>{product.name}</strong>
                <p>{product.description}</p>
                <span>{product.price}</span>
                <Button
                  type="button"
                  value="Adicionar ao Carrinho"
                  clickAction={() => this.handleAddToCart(product)}
                ></Button>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect()(Main);
