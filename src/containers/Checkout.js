import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleTotalSum = () => {
    return cart.reduce((acc, current) => acc + current.price, 0);
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col flex-1">
        <h3 className="font-bold text-xl">
          {cart.length > 0 ? 'Lista de Pedidos' : 'Sin Pedidos...'}
        </h3>
        {cart.map(({ id, title, price }) => {
          return (
            <div className="flex justify-between w-full" key={id}>
              <h4>{title}</h4>
              <div className="pr-3">
                <span className="px-2">${price}</span>
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleRemove(id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Precio Total ${handleTotalSum()}</h3>
        <Link to="/checkout/information">
          <button
            type="button"
            className="bg-blueNice rounded px-5 py-1 hover:bg-blue-500 focus:outline-none"
          >
            Continuar Pedido
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
