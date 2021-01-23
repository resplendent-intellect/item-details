import React from 'react';
import PropTypes from 'prop-types';
import Variation from './Variation.jsx';
import styles from './Variation.module.css';

const AllVariations = ({ variations }) => (
  <div className={styles.variationsContainer}>
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
