import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PriceMatch from './PriceMatch.jsx';
import Returns from './Returns.jsx';
import PriceModal from './PriceModal.jsx';
import styles from './Price.module.css';

const Price = ({ price }) => {
  const [showPriceModal, setShowPriceModal] = useState(false);

  return (
    <div>
      <PriceMatch />
      <div className={styles.pricesContainer}>
        <div className={styles.price}>
          $
          {price.toFixed(2)}
        </div>
        <div className={styles.or}>
          Or
        </div>
        <div className={styles.monthlyContainer}>
          <div className={styles.monthly}>
            $
            {(price / 12).toFixed(2)}
            /mo. *
          </div>
          <div className={styles.suggested}>
            suggested payments with
            <br />
            {' '}
            <b>12-Month Financing</b>
          </div>
          <div>
            <a
              href="/"
              className={`${styles.showMeHow} showMeHow`}
              onClick={(e) => {
                e.preventDefault();
                setShowPriceModal(true);
              }}
            >
              Show me how &gt;
            </a>
            <PriceModal
              showPriceModal={showPriceModal}
              closePriceModal={() => { setShowPriceModal(false); }}
            />
          </div>
        </div>
      </div>
      <Returns />
    </div>

  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Price;
