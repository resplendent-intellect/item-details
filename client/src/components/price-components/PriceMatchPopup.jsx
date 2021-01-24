/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Price.module.css';

const PriceMatchPopup = ({ showPricePopup, setShowPricePopup }) => {
  if (!showPricePopup) {
    return null;
  }

  return (
    <div className={styles.popup}>
      <div className={styles.popupTitleContainer}>
        <div className={styles.dollarSignContainer}>
          <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/dollarsignpricematch.svg" alt="dollar sign" />
        </div>
        <h4 className={styles.pmg}>Price Match Guarantee</h4>
      </div>
      <div className={styles.pmgParagraph}>
        Best Buy is dedicated to always offering the
        best value to our customers. We will match the
        price, at the time of purchase, on a Price Match
        Guarantee product if you find the same item at
        a lower price at a qualifying online retailer or at
        a local retail competitor&apos;s store.
        <br />
        <br />
        Here&apos;s how:
        <ul>
          <li>
            If you find a qualifying lower price
            online, call 1-888-BEST BUY and direct a
            customer service agent to the web site
            with the lower price, or when visiting a
            Best Buy store, one of our employees will
            assist you.
          </li>
          <li>
            On qualifying products, Best Buy will
            then verify the current price to complete
            the price match.
          </li>
        </ul>
        Exclusions apply including, but not limited to,
        items sold by Marketplace vendors,
        competitors&apos; service prices, special daily or
        hourly sales, and items for sale the Sunday
        before Thanksgiving Day through the Monday
        after Thanksgiving.
        {' '}
        <span className={styles.seeDetails}>See Details</span>
      </div>
      <div
        className={styles.popupX}
        onClick={() => { setShowPricePopup(false); }}
      >
        X
      </div>
      <div className={styles.popupTriangle} />
    </div>
  );
};

PriceMatchPopup.propTypes = {
  showPricePopup: PropTypes.bool.isRequired,
  setShowPricePopup: PropTypes.instanceOf(Function).isRequired,
};

export default PriceMatchPopup;
