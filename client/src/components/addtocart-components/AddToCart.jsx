/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import SavePopup from './SavePopup.jsx';
import styles from './AddToCart.module.css';

const AddToCart = () => {
  const [showSavePopup, setShowSavePopup] = useState(false);
  const popupRef = useRef();
  const handleOutsideClick = (e) => {
    if (!popupRef.current.contains(e.target)) {
      setShowSavePopup(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleClick = () => {
    if (!showSavePopup) {
      document.addEventListener('click', handleOutsideClick);
      setShowSavePopup(true);
    }
  };
  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.btnContainer}>
        <button type="button" className={styles.btn}>
          <div>
            <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/shoppingcart.svg" alt="shopping cart" />
          </div>
          <div>
            Add to Cart
          </div>
        </button>
      </div>
      <div className={styles.compareSaveContainer}>
        <div className={styles.compare}>
          <input type="checkbox" />
          Compare
        </div>
        <div
          className={styles.save}
          onClick={handleClick}
        >
          {/* <input type="checkbox" /> */}
          Save
        </div>
      </div>
      <div ref={popupRef}>
        <SavePopup
          showSavePopup={showSavePopup}
          setShowSavePopup={setShowSavePopup}
        />
      </div>
    </div>
  );
};

export default AddToCart;
