import React from 'react';

export default function Payment() {
  return (
    <form>
      <h3>Endereço</h3>
      <input type="text" placeholder="Rua, avenida, etc" />
      <input type="text" placeholder="Número" />
      <input type="text" placeholder="Bairro" />
      <input type="text" placeholder="Cidade" />
      <input type="text" placeholder="UF" />
      <label>Transportadora</label>
      <select>
        <option value="sedex">SEDEX</option>
        <option value="fedex">FEDEX</option>
        <option value="aguacu">Aguaçu</option>
        <option value="transport">Transport</option>
      </select>
    </form>
  );
}
