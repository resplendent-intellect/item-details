import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VariationItem from './VariationItem.jsx';
import styles from './Variation.module.css';

const Variation = ({ variation }) => {
  const [variationName, setVariationName] = useState();
  const [variationItemIndex, setVariationItemIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const wrapperStyle = {
    // transform: `translateX(-${variationItemIndex * (100 / variation.variationItems.length)}%)`,
    transform: `translateX(-${variationItemIndex * (86 * (variation.variationItems.length - 4))}px)`,
  };

  const next = () => {
    setVariationItemIndex(variationItemIndex + 1);
  };

  const prev = () => {
    setVariationItemIndex(variationItemIndex - 1);
  };

  const leftButton = (
    <button
      type="button"
      className={styles.prevButton}
      onClick={() => {
        prev();
        setShowLeftButton(false);
        setShowRightButton(true);
      }}
      disabled={variationItemIndex === 0}
    >
      &lt;
    </button>
  );

  const rightButton = (
    <button
      type="button"
      className={styles.nextButton}
      onClick={() => {
        next();
        setShowLeftButton(true);
        setShowRightButton(false);
      }}
    >
      &gt;
    </button>
  );

  return (
    <div>
      <div className={styles.variationAndType}>
        <b>
          {variation.variationType}
        </b>
        :
        {' '}
        {variationName}
      </div>
      <div className={styles.cardsSlider}>
        <div className={styles.prev}>
          {showLeftButton ? leftButton : null}
        </div>
        <div className={styles.next}>
          {showRightButton ? rightButton : null}
        </div>
        <div
          className={styles.cardsSliderWrapper}
          style={wrapperStyle}
        >
          {variation.variationItems.map((item) => (
            <VariationItem
              key={item._id}
              item={item}
              setVariationName={setVariationName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Variation.propTypes = {
  variation: PropTypes.instanceOf(Object).isRequired,
};

export default Variation;
