import React from 'react';
import PropTypes from 'prop-types';

const StockShipping = ({ inStock }) => {
  if (inStock === 'sold out') {
    return null;
  }
  let pickup;
  let shipping;
  if (inStock === 'Backordered') {
    pickup = 'Not available for this item';
    shipping = 'Should ship by tomorrow';
  }
  if (inStock === 'in stock') {
    pickup = 'Order now for pickup tomorrow';
    shipping = 'Get it by tomorrow';
  }

  return (
    <div>
      <div>
        {inStock === 'in stock' ? 'Get it in 8 days' : inStock}
      </div>
      <div>
        Pickup:
        {' '}
        {pickup}
      </div>
      <div>
        FREE Shipping:
        {' '}
        {shipping}
      </div>
      <div>
        <a href="about:blank">Estimates for 96789</a>
      </div>
    </div>
  );
};

StockShipping.propTypes = {
  inStock: PropTypes.string.isRequired,
};

export default StockShipping;
