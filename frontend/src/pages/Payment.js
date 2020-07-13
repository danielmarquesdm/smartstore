import React, { useState, useEffect } from 'react';

import './Payment.css';
import Button from '../components/button/Button';
import api from '../services/api';
import { connect } from 'react-redux';

function Payment({ history, cart }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const [shipping, setShipping] = useState('');

  const [methodPayment, setMethodPayment] = useState('');
  const [numberCard, setNumberCard] = useState('');
  const [validThru, setValidThru] = useState('');
  const [cvv, setCvv] = useState('');
  const [country, setCountry] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadPriceShipping(shipping) {
      const response = await api.get('/pagamento', {
        where: { name: shipping },
      });
      console.log(response);
    }
    loadPriceShipping();
  }, [shipping]);

  function handleReturn() {
    history.push('/carrinho');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    cart.map((product) => {
      products.push(product);
    });

    const response = await api.post('/pagamento', {
      address: {
        street,
        number,
        neighborhood,
        city,
        uf,
      },
      shipping,
      payment: {
        methodPayment,
        numberCard,
        validThru,
        cvv,
        country,
      },
      products,
      client: {
        name,
        email,
      },
    });

    alert(
      `Pedido realizado! Número do seu pedido é ${Math.floor(
        Math.random() * 1000000
      )} e o seu código de rastreamento é ${Math.floor(
        Math.random() * 1000000
      )}`
    );

    history.push('/');
  }

  return (
    <>
      <h3 id="titulo">Cliente</h3>
      <form onSubmit={handleSubmit}>
        <div className="client">
          <input
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
          />
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="E-mail"
          />
        </div>
        <h3 id="titulo">Endereço</h3>
        <div className="address">
          <input
            required
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            placeholder="Rua, avenida, etc"
          />
          <input
            required
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            placeholder="Número"
          />
          <input
            required
            onChange={(e) => setNeighborhood(e.target.value)}
            type="text"
            placeholder="Bairro"
          />
          <input
            required
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Cidade"
          />
          <input
            required
            onChange={(e) => setUf(e.target.value)}
            type="text"
            placeholder="UF"
          />
        </div>
        <h3 id="label">Transportadora</h3>
        <div className="shipping">
          <select
            required
            id="shipping"
            onChange={(e) => setShipping(e.target.value)}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="SEDEX">SEDEX</option>
            <option value="FEDEX">FEDEX</option>
            <option value="Aguaçu">Aguaçu</option>
            <option value="Transport">Transport</option>
          </select>
          <span id="frete">Frete: R$29,90</span>
        </div>
        <h3 id="label">Forma de pagamento</h3>
        <div className="payment">
          <select
            required
            id="methodPayment"
            onChange={(e) => setMethodPayment(e.target.value)}
          >
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="cartao">Cartão</option>
            <option value="boleto">Boleto</option>
          </select>
          {methodPayment === 'cartao' && (
            <div className="cartao">
              <strong>Dados do cartão</strong>
              <div>
                <input
                  required
                  onChange={(e) => setNumberCard(e.target.value)}
                  type="text"
                  placeholder="Número do cartão"
                />
                <input
                  required
                  onChange={(e) => setValidThru(e.target.value)}
                  type="text"
                  placeholder="MM/AA"
                />
                <input
                  required
                  onChange={(e) => setCvv(e.target.value)}
                  type="text"
                  placeholder="CVV"
                />
                <input
                  required
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="País  "
                />
              </div>
            </div>
          )}
        </div>
        <div className="buttons">
          <Button clickAction={handleReturn} type="button" value="Voltar" />
          <Button type="submit" value="Finalizar" />
        </div>
      </form>
    </>
  );
}

export default connect((state) => ({
  cart: state.cart,
}))(Payment);
