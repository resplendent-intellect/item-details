/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ComparePopup.module.css';

const ComparePopup = ({ showComparePopup, setShowComparePopup, product }) => {
  if (!showComparePopup) {
    return null;
  }
  const photo = product.variations[0].variationItems[0].image;
  return ReactDOM.createPortal(
    <div className={styles.popupContainer}>
      <div className={styles.topRow}>
        <div className={styles.compareText}>
          Compare (1)
        </div>
        <div className={styles.clearAllCompare}>
          <div
            className={styles.clearAll}
            onClick={() => { setShowComparePopup(false); }}
          >
            Clear all
          </div>
          <button
            type="button"
            className={styles.compareBtn}
          >
            Compare
          </button>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.arrow}>
          &lt;
        </div>
        <div className={`${styles.box} ${styles.box1}`}>
          <img src={photo} alt="product" className={styles.img} />
          <div className={styles.infoNPrice}>
            <p className={styles.info}>
              {product.brand}
              -
              {product.name}
              -
              {product.color}
            </p>
            <p className={styles.price}>
              $
              {product.price.toFixed(2)}
            </p>
          </div>
          <div
            className={styles.xContainer}
            onClick={() => { setShowComparePopup(false); }}
          >
            <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/Eo_circle_blue_letter-x.svg" alt="bluex" className={styles.blueX} />
          </div>
        </div>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.arrow}>
          &gt;
        </div>
      </div>
    </div>,
    document.querySelector('#portal'),
  );
};

ComparePopup.propTypes = {
  showComparePopup: PropTypes.bool.isRequired,
  setShowComparePopup: PropTypes.instanceOf(Function).isRequired,
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ComparePopup;
