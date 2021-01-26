import React from 'react';
import styles from './Price.module.css';

const Returns = () => (
  <div id="returns" className={`${styles.returns} returns`}>
    <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/iconfinder_comerce_delivery_shop_business-24_4544831.svg" alt="return icon" />
    <div className={styles.textContainer}>
      <h3>15-DAY FREE & EASY RETURNS</h3>
      <p>
        Guest shoppers get 15 days to return or exchange
        this item. Log in for personalized information.
        {' '}
        <a
          href="http://localhost:3000"
          className={styles.learnMore}
          onClick={(e) => { e.preventDefault() }}
        >
          Learn more &gt;
        </a>
      </p>
    </div>
  </div>
);

export default Returns;
