import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Price from './price-components/Price.jsx';
import AllVariations from './variations-components/AllVariations.jsx';
import airPodsMax from './data/airPodsMaxData';
import Protection from './protection-components/Protection.jsx';
import StockShipping from './stock-shipping-components/StockShipping.jsx';
import AddToCart from './addtocart-components/AddToCart.jsx';
import Offers from './offers-components/Offers.jsx';

const App = () => {
  const [product, setProduct] = useState(airPodsMax);

  // const getProduct = (id) => {
  //   $.get(`/products/${id}`, (data) => {
  //     setProduct(data);
  //   });
  // };

  // useEffect(() => {
  //   getProduct('6007a3853fdca13bc5b1a2e5');
  // });

  const {
    price,
    variations,
    protectionPlans,
    name,
    inStock,
    offers,
  } = product;

  return (
    <div>
      <Price price={price} />
      <hr />
      <AllVariations variations={variations} />
      <hr />
      <Protection protectionPlans={protectionPlans} name={name} />
      <hr />
      <StockShipping inStock={inStock} />
      <hr />
      <AddToCart />
      <hr />
      <Offers offers={offers} />
    </div>
  );
};

export default App;
