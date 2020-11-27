import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';

import AppContext from '../context/AppContext';

const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const paypalOptions = {
    clientId: '',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleTotalSum = () => {
    return cart.reduce((acc, current) => acc + current.price, 0);
  };

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold">Resumen del pedido:</h3>
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
        <div>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleTotalSum()}
            onPaymentStart={() => console.log('Payment started!!')}
            onPaymentSuccess={(data) => console.log(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
