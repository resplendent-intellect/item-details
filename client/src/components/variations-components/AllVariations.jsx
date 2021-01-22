import React from 'react';
import PropTypes from 'prop-types';
import Variation from './Variation.jsx';

const AllVariations = ({ variations }) => (
  <div>
    {variations.map((variation) => (
      <Variation
        key={variation._id}
        variation={variation}
      />
    ))}
  </div>
);

AllVariations.propTypes = {
  variations: PropTypes.instanceOf(Array).isRequired,
};

export default AllVariations;
