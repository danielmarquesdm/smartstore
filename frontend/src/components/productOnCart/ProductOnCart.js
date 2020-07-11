import React from 'react';

import './ProductOnCart.css';
import Button from '../../components/button/Button';

export default function ProductOnCart({ onCart }) {
  return (
    <div className="produto-adicionado">
      <div id="conteudo-produto">
        <img
          src="https://images-americanas.b2w.io/produtos/01/00/img/360622/6/360622647_1SZ.jpg"
          alt="produto"
        />
        <div id="conteudo">
          <strong>Produto 1</strong>
          <span>R$ 3.490,90</span>
        </div>
        <Button
          id="button"
          type="button"
          value="Ver Carrinho"
          clickAction={onCart}
        />
      </div>
    </div>
  );
}
