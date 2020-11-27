import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext.js';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);

  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="flex">
      <div className="flex-1 pr-6">
        <div className="pb-2">
          <h2 className="text-2xl">Informacion de Contacto</h2>
        </div>
        <div>
          <form ref={form} className="flex flex-col pb-3">
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Nombre Completo"
              name="name"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="email"
              placeholder="Correo Electronico"
              name="email"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Direccion"
              name="address"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Apto"
              name="apto"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Ciudad"
              name="city"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Pais"
              name="country"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Estado"
              name="state"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Codigo Postal"
              name="cp"
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-1"
              type="text"
              placeholder="Telefono"
              name="phone"
            />
          </form>
        </div>
        <div className="flex justify-between">
          <Link to="/checkout">Regresar</Link>
          <button type="button" onClick={handleSubmit}>
            Pagar
          </button>
        </div>
      </div>
      <div className="w-1/4">
        <h3 className="font-bold text-lg">Pedido </h3>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex justify-between">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
