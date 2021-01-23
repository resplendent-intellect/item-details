import React from 'react';
import styles from './AddToCart.module.css';

const AddToCart = () => (
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
      <div className={styles.save}>
        <input type="checkbox" />
        Save
      </div>
    </div>
  </div>
);

export default AddToCart;
