import React from 'react';

import './Cart.css';
import Button from '../components/button/Button';

export default function Cart({ history }) {
  async function handlePayment() {
    history.push('/pagamento');
  }

  return (
    <div className="cart-container">
      <ul>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360564/1/360564168_1GG.jpg"
            alt="Daniel"
          />
          <strong>Produto 1</strong>
          <p>Descricao do produto</p>
          <p>R$ 3.490,00</p>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360622/6/360622647_1SZ.jpg"
            alt="Daniel"
          />
          <strong>Produto 1</strong>
          <p>Descricao do produto</p>
          <p>R$ 4.590,90</p>
        </li>
      </ul>
      <footer>
        <div id="subtotal">
          <h3>Subtotal</h3>
          <h3>R$ 8.080,90</h3>
          <h3>Envio</h3>
          <h3>R$ 19,90</h3>
        </div>
        <div id="total">
          <h3>Total</h3>
          <h3>R$ 8.100,80</h3>
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
