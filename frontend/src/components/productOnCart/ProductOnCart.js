import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './ProductOnCart.css';
import Button from '../../components/button/Button';

function ProductOnCart({ cart }) {
  return (
    <div className="produto-adicionado">
      {cart.map((product) => (
        <li key={product._id} id="conteudo-produto">
          <img src={product.image} alt={product.name} />
          <div id="conteudo">
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </div>
          <Link to="/carrinho">
            <Button id="button" type="button" value="Ver Carrinho" />
          </Link>
        </li>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.slice(0, 1),
});

export default connect(mapStateToProps)(ProductOnCart);
