/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SavePopup from './SavePopup.jsx';
import CartModal from './CartModal.jsx';
import ComparePopup from './ComparePopup.jsx';
import styles from './AddToCart.module.css';

const AddToCart = ({ product }) => {
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showComparePopup, setShowComparePopup] = useState(false);

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
        <button
          type="button"
          className={styles.btn}
          onClick={() => { setShowCartModal(true); }}
        >
          <div>
            <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/shoppingcart.svg" alt="shopping cart" />
          </div>
          <div>
            Add to Cart
          </div>
        </button>
        <CartModal
          showCartModal={showCartModal}
          closeCartModal={() => { setShowCartModal(false); }}
          product={product}
        />
      </div>
      <div className={styles.compareSaveContainer}>
        <div
          className={`${styles.compare} compare`}
          onClick={() => { setShowComparePopup(true); }}
        >
          Compare
        </div>
        <div
          className={`${styles.save} save`}
          onClick={handleClick}
        >
          Save
        </div>
      </div>
      <div ref={popupRef}>
        <SavePopup
          showSavePopup={showSavePopup}
          setShowSavePopup={setShowSavePopup}
        />
      </div>
      <div>
        <ComparePopup
          showComparePopup={showComparePopup}
          setShowComparePopup={setShowComparePopup}
          product={product}
        />
      </div>
    </div>
  );
};

AddToCart.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
};

export default AddToCart;
