/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Price.module.css';

const PriceModal = ({ showPriceModal, closePriceModal }) => {
  if (!showPriceModal) {
    return null;
  }
  return (
    <div>
      <div
        className={styles.modal}
      >
        <div
          className={styles.x}
          onClick={closePriceModal}
          role="button"
          tabIndex={0}
          onKeyDown={closePriceModal}
        >
          X
        </div>
        <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/BestBuyPriceModal.png" alt="credit card offer" />
      </div>
      <div
        className={styles.overlay}
        onClick={closePriceModal}
      />
    </div>
  );
};

PriceModal.propTypes = {
  showPriceModal: PropTypes.bool.isRequired,
  closePriceModal: PropTypes.instanceOf(Function).isRequired,
};

export default PriceModal;
