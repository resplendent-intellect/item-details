import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import EstimatesPopup from './EstimatesPopup.jsx';
import styles from './StockShipping.module.css';
import airPodsMax from '../data/airPodsMaxData';

const StockShipping = ({ inStock }) => {
  const [showEstimatesPopup, setShowEstimatesPopup] = useState(false);
  const popupRef = useRef();

  const handleOutsideClick = (e) => {
    if (!popupRef.current.contains(e.target)) {
      setShowEstimatesPopup(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!showEstimatesPopup) {
      document.addEventListener('click', handleOutsideClick);
      setShowEstimatesPopup(true);
    }
  };
  if (inStock === 'sold out') {
    return null;
  }
  let pickup;
  let shipping;
  const inStockStyle = () => {
    if (inStock === 'Backordered') {
      pickup = 'Not available for this item';
      shipping = 'Should ship by tomorrow';
      return `${styles.backordered}`;
    }
    pickup = 'Order now for pickup tomorrow';
    shipping = 'Get it by tomorrow';
    return `${styles.inStock}`;
  };

  return (
    <div className={styles.stockShippingContainer}>
      <div className={inStockStyle()}>
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
            <a
              href="about:blank"
              className={styles.estimates}
              onClick={handleClick}
            >
              Estimates for 96789
            </a>
            <div ref={popupRef}>
              <EstimatesPopup
                showEstimatesPopup={showEstimatesPopup}
                setShowEstimatesPopup={setShowEstimatesPopup}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StockShipping.propTypes = {
  inStock: PropTypes.string,
};

StockShipping.defaultProps = {
  inStock: airPodsMax.inStock,
};

export default StockShipping;
