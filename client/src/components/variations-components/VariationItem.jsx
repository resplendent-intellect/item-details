/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Variation.module.css';

const VariationItem = ({
  item,
  setVariationName,
  defaultVariation,
  setDefaultVariation,
}) => {
  const isSelected = () => {
    if (item.name === defaultVariation) {
      return `${styles.card} ${styles.selected}`;
    }
    return `${styles.card}`;
  };

  return (
    <div className={styles.cardContainer}>
      <div
        onMouseEnter={() => { setVariationName(item.name); }}
        onMouseLeave={() => { setVariationName(defaultVariation); }}
        onClick={() => { setDefaultVariation(item.name); }}
        className={isSelected()}
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
};

VariationItem.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  setVariationName: PropTypes.instanceOf(Function).isRequired,
  defaultVariation: PropTypes.string.isRequired,
  setDefaultVariation: PropTypes.instanceOf(Function).isRequired,
};

export default VariationItem;
