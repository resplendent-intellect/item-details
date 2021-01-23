import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockShipping.module.css';

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
    <div className={styles.stockShippingContainer}>
      <div className={styles.inStock}>
        {inStock === 'in stock' ? 'Get it in 8 days' : inStock}
      </div>
      <div className={styles.pickupContainer}>
        <div className={styles.svgContainer}>
          <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/Store.svg" alt="pickup" className={styles.svg} />
        </div>
        <div className={styles.pickup}>
          <b>Pickup:</b>
          {' '}
          {pickup}
        </div>
      </div>
      <div className={styles.shippingContainer}>
        <div className={styles.svgContainer}>
          <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/Shipping.svg" alt="shipping" className={styles.svg} />
        </div>
        <div>
          <div className={styles.freeShipping}>
            <b>FREE Shipping:</b>
            {' '}
            {shipping}
          </div>
          <div>
            <a href="about:blank" className={styles.estimates}>Estimates for 96789</a>
          </div>
        </div>
      </div>
    </div>
  );
};

StockShipping.propTypes = {
  inStock: PropTypes.string.isRequired,
};

export default StockShipping;
