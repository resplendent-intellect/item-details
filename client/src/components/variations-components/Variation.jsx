import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VariationItem from './VariationItem.jsx';

const Variation = ({ variation }) => {
  const [variationName, setVariationName] = useState();
  const [variationItemIndex, setVariationItemIndex] = useState(0);
  const itemsLastIndex = variation.variationItems.length - 1;

  const wrapperStyle = {
    transform: `translateX(-${variationItemIndex * (200 / variation.variationItems.length)}%)`,

  };

  const next = () => {
    setVariationItemIndex(variationItemIndex + 1);
  };

  const prev = () => {
    setVariationItemIndex(variationItemIndex - 1);
  };

  return (
    <div>
      <div>
        {variation.variationType}
        :
        {' '}
        {variationName}
      </div>
      <div className="cards-slider">
        <div
          className="cards-slider-wrapper"
          style={wrapperStyle}
        >
          <div className="next">
            <button
              type="button"
              onClick={next}
              disabled={variationItemIndex === itemsLastIndex}
            >
              &gt;
            </button>
          </div>
          {variation.variationItems.map((item) => (
            <VariationItem
              key={item._id}
              item={item}
              setVariationName={setVariationName}
            />
          ))}
          <button
            className="button prev"
            type="button"
            onClick={prev}
            disabled={variationItemIndex === 0}
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};

Variation.propTypes = {
  variation: PropTypes.instanceOf(Object),
};

Variation.defaultProps = {
  variation: {},
};

export default Variation;
