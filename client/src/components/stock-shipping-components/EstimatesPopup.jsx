/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './StockShipping.module.css';

const EstimatesPopup = ({ showEstimatesPopup, setShowEstimatesPopup }) => {
  if (!showEstimatesPopup) {
    return null;
  }
  return (
    <div className={styles.popup}>
      <div className={styles.popupContentContainer}>
        <div className={styles.popUpTop}>
          <h4>Estimates for Mililani, HI 96789</h4>
          <div>Update Location</div>
        </div>
        <div className={styles.hr}>
          <hr />
        </div>
        <div className={styles.popUpBottom}>
          <div>Order soon and get it by:</div>
          <div>
            <b>Tue, Feb 23</b>
            {' '}
            - FREE
          </div>
        </div>
      </div>
      <div
        className={styles.popupX}
        onClick={() => { setShowEstimatesPopup(false); }}
      >
        X
      </div>
      <div className={styles.popupTriangle} />
    </div>
  );
};

EstimatesPopup.propTypes = {
  showEstimatesPopup: PropTypes.bool.isRequired,
  setShowEstimatesPopup: PropTypes.instanceOf(Function).isRequired,
};

export default EstimatesPopup;
