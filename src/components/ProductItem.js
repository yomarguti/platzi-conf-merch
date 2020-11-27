import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const { title, image, price, description } = product;
  return (
    <div className="flex flex-col rounded shadow-md w-full md:w-52 mx-3 my-4">
      <img src={image} alt={title} className="w-full h-img object-contain" />

      <div className="px-2 pb-3">
        <span className="font-bold text-lg">{title}</span> <span>{` $${price}`}</span>
        <p className="text-gray-400">{description}</p>
      </div>
      <button
        className="bg-blueNice rounded-b py-1 hover:bg-blue-500 focus:outline-none"
        type="button"
        onClick={onAddToCart}
      >
        Comprar
      </button>
    </div>
  );
};

export default ProductItem;
