/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddToCart.module.css';

const SavePopup = ({ showSavePopup, setShowSavePopup }) => {
  if (!showSavePopup) {
    return null;
  }
  return (
    <div className={styles.popup}>
      <div className={styles.popupText}>
        <p>
          <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/green_check.svg" alt="check" />
          <b className={styles.saved}>
            Saved
          </b>
        </p>
        <p className={styles.goTo}>Go to your saved items</p>
      </div>
      <div
        className={styles.popupX}
        onClick={() => { setShowSavePopup(false); }}
      >
        X
      </div>
      <div className={styles.popupTriangle} />
    </div>
  );
};

SavePopup.propTypes = {
  showSavePopup: PropTypes.bool.isRequired,
  setShowSavePopup: PropTypes.instanceOf(Function).isRequired,
};

export default SavePopup;
