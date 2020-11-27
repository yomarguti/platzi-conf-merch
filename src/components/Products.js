import React, { useContext } from 'react';
import ProductItem from './ProductItem';

import AppContext from '../context/AppContext';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);

  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="flex flex-row flex-wrap">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        );
      })}
    </div>
  );
};

export default Products;
