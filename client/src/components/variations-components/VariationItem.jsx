import React from 'react';
import PropTypes from 'prop-types';

const VariationItem = ({ item, setVariationName }) => (
  <div
    onMouseEnter={() => { setVariationName(item.name); }}
    className="card"
  >
    <img src={item.image} alt={item.name} />
    {item.price.toFixed(2)}
  </div>
);

VariationItem.propTypes = {
  item: PropTypes.instanceOf(Object),
  setVariationName: PropTypes.instanceOf(Function),
};

VariationItem.defaultProps = {
  item: {},
  setVariationName: () => {},
};

export default VariationItem;
