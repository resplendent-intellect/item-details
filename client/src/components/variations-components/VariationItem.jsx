import React from 'react';
import PropTypes from 'prop-types';
import styles from './Variation.module.css';

const VariationItem = ({ item, setVariationName }) => (
  <div className={styles.cardContainer}>
    <div
      onMouseEnter={() => { setVariationName(item.name); }}
      className={styles.card}
    >
      <img
        src={item.image}
        alt={item.name}
        className={styles.thumbnail}
      />
      <div className={styles.price}>
        $
        {item.price.toFixed(2)}
      </div>
    </div>
  </div>
);

VariationItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  setVariationName: PropTypes.instanceOf(Function).isRequired,
};

export default VariationItem;
