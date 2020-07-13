import React from 'react';
import { connect } from 'react-redux';

import './Cart.css';
import formatPrice from '../util/formatPrice';
import Button from '../components/button/Button';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

function Cart({ history, cart, total, dispatch }) {
  async function handlePayment() {
    history.push('/pagamento');
  }

  return (
    <div className="cart-container">
      <ul>
        {cart.map((product) => (
          <li key={product._id}>
            <img src={product.image} alt={product.name} />
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <span>{formatPrice(product.price)}</span>
            <div>
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: 'DECREMENT_AMOUNT', id: product._id })
                }
              >
                <MdRemoveCircleOutline size={20} color="#d94036" />
              </button>
              <input type="number" readOnly value={product.amount} />
              <button
                type="button"
                onClick={() =>
                  dispatch({ type: 'INCREMENT_AMOUNT', id: product._id })
                }
              >
                <MdAddCircleOutline size={20} color="#d94036" />
              </button>
            </div>
            <strong>{product.subtotal}</strong>
            <button
              id="buttonDelete"
              type="button"
              onClick={() =>
                dispatch({ type: 'REMOVE_FROM_CART', id: product._id })
              }
            >
              <MdDelete id="iconDelete" size={20} color="#d94036" />
            </button>
          </li>
        ))}
      </ul>
      <footer>
        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>
        <Button
          type="button"
          value="Pagar"
          clickAction={() => handlePayment()}
        />
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps)(Cart);
