/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AddToCart.module.css';

const CartModal = ({ showCartModal, closeCartModal, product }) => {
  if (!showCartModal) {
    return null;
  }
  const photo = product.variations[0].variationItems[0].image;

  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.modalContentContainer}>

          <div className={styles.subtotalContainer}>
            <div className={styles.productNCheck}>
              <div className={styles.checkContainer}>
                <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/Allowed.svg" alt="check" />
              </div>
              <div className={styles.productCard}>
                <p className={styles.atc}>Added to Cart</p>
                <div className={styles.imgContainer}>
                  <img src={photo} alt="product-img" />
                </div>
                <p className={styles.cardPrice}>
                  $
                  {product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className={styles.subtotalCard}>
              <p
                className={styles.continue}
                onClick={closeCartModal}
              >
                Continue Shopping
              </p>
              <p className={styles.subtotal}>
                Cart Subtotal (1 item):
                {' '}
                <b>
                  $
                  {product.price.toFixed(2)}
                </b>
              </p>
              <button className={styles.gtcBtn} type="button">
                Go to Cart
              </button>
            </div>
          </div>

          <div className={styles.protectionContainer}>
            <div className={styles.protectionImgContainer}>
              <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/protectionimg.jpg" alt="protection-img" />
            </div>
            <div className={styles.protectionDetails}>
              <img
                src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/Screen+Shot+2021-01-24+at+2.24.48+PM.png"
                alt="protection-details"
                className={styles.protectionScreenShot}
                />
              <button type="button" className={styles.protectionBtn}>
                <div>
                  <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/shoppingcart.svg" alt="shopping cart" />
                </div>
                <div>
                  Add to Cart
                </div>
              </button>
            </div>
          </div>

        </div>
        <div
          className={styles.x}
          onClick={closeCartModal}
          role="button"
          tabIndex={0}
          onKeyDown={closeCartModal}
        >
          X
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={closeCartModal}
      />
    </div>
  );
};

CartModal.propTypes = {
  showCartModal: PropTypes.bool.isRequired,
  closeCartModal: PropTypes.instanceOf(Function).isRequired,
  product: PropTypes.instanceOf(Object).isRequired,
};

export default CartModal;
