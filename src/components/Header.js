import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="flex justify-between pb-4">
      <h1 className="text-4xl font-bold text-blueNice">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="flex justify-evenly items-center justify-items-center w-16 ml-3">
        <Link to="/checkout">
          <i className="fas fa-shopping-cart text-blueNice"></i>
        </Link>
        {cart.length > 0 && <div className="text-green-500 font-bold ml-3">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
