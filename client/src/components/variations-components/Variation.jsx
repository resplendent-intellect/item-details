import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VariationItem from './VariationItem.jsx';
import styles from './Variation.module.css';

const Variation = ({ variation }) => {
  const [variationName, setVariationName] = useState();
  const [variationItemIndex, setVariationItemIndex] = useState(0);
  const itemsLastIndex = variation.variationItems.length - 1;

  const wrapperStyle = {
    transform: `translateX(-${variationItemIndex * (100 / variation.variationItems.length)}%)`,
  };

  const next = () => {
    setVariationItemIndex(variationItemIndex + 1);
  };

  const prev = () => {
    setVariationItemIndex(variationItemIndex - 1);
  };

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
        <div className={styles.next}>
          <button
            type="button"
            className={styles.nextButton}
            onClick={next}
            disabled={variationItemIndex === itemsLastIndex}
          >
            &gt;
          </button>
        </div>
        <div className={styles.prev}>
          <button
            type="button"
            className={styles.prevButton}
            onClick={prev}
            disabled={variationItemIndex === 0}
          >
            &lt;
          </button>
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
