import React from 'react';

import './ProductList.css';
import Button from '../button/Button';

export default function ({ onAddCart }) {
  return (
    <>
      <ul id="productList-container">
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360622/6/360622647_1SZ.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            ></Button>
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360564/1/360564168_1GG.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360622/6/360622647_1SZ.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360564/1/360564168_1GG.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360622/6/360622647_1SZ.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360564/1/360564168_1GG.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360622/6/360622647_1SZ.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
        <li>
          <img
            src="https://images-americanas.b2w.io/produtos/01/00/img/360564/1/360564168_1GG.jpg"
            alt="smartphone"
          />
          <footer>
            <strong>Produto 1</strong>
            <p>Descricao do produto</p>
            <span>R$ 3.490,90</span>
            <Button
              type="button"
              value="Adicionar ao Carrinho"
              clickAction={onAddCart}
            />
          </footer>
        </li>
      </ul>
    </>
  );
}
