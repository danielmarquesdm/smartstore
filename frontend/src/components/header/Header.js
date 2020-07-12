import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';
import logo from '../../assets/logo.png';
import { MdShoppingCart } from 'react-icons/md';

function Header({ cartSize }) {
  return (
    <div id="header">
      <Link to="/">
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <Link id="link-to-cart" to="/carrinho">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart id="cart-icon" size={40} color="#D94036" />
      </Link>
    </div>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
