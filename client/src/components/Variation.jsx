import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VariationItem from './VariationItem.jsx';

const Variation = ({ variation }) => {
  const [variationName, setVariationName] = useState();

  return (
    <div>
      <div>
        {variation.variationType}
        :
        {' '}
        {variationName}
      </div>
      <div>
        {variation.variationItems.map((item) => (
          <VariationItem
            key={item._id}
            item={item}
            setVariationName={setVariationName}
          />
        ))}
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
