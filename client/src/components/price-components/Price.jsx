import React from 'react';
import PropTypes from 'prop-types';
import PriceMatch from './PriceMatch.jsx';
import Returns from './Returns.jsx';
import styles from './Price.module.css';

const Price = ({ price }) => (
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
          <a href="http://localhost:3000" className={styles.showMeHow}>Show me how &gt;</a>
        </div>
      </div>
    </div>
    <Returns />
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
};

Price.defaultProps = {
  price: 100,
};

export default Price;
