import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';


const PaymentForm = () => {

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    console.log(evt.target)
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
<h2>Dados do cartão</h2>
      <input
        type="tel"
        name="number"
        placeholder="**** **** **** ****"
        pattern="[\d| ]{16,22}"
        required
        value={state.number}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      <input
        type="tel"
        name="expiry"
        placeholder="MM/AA"
        pattern="\d\d/\d\d"
        required
        value={state.expiry}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />

      <input
        type="text"
        name="name"
        placeholder="Nome no cartão"
        required
        value={state.name}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />

      <input
        type="tel"
        name="cvc"
        placeholder="CVV"
        pattern="\d{3,4}"
        required
        value={state.cvc}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />

      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />

    </div>
  );
}

export default PaymentForm;