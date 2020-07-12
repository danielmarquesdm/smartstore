import React from 'react';

import './Payment.css';
import Button from '../components/button/Button';

export default function Payment() {
  return (
    <>
      <h3 id="titulo">Endereço</h3>
      <form>
        <div className="adress">
          <input type="text" placeholder="Rua, avenida, etc" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>
        <h3 id="label">Transportadora</h3>
        <div className="shipping">
          <select>
            <option value="sedex">SEDEX</option>
            <option value="fedex">FEDEX</option>
            <option value="aguacu">Aguaçu</option>
            <option value="transport">Transport</option>
          </select>
          {/* <span>Frete: R$ 29,90</span> */}
        </div>
        <h3 id="label">Dados do pagador</h3>
        <div className="payment">
          <input type="text" placeholder="Número do cartão" />
          <input type="text" placeholder="MM/AA" />
          <input type="text" placeholder="CVV" />
          <input type="text" placeholder="País  " />
        </div>
        <Button type="button" value="Finalizar" />
      </form>
    </>
  );
}
