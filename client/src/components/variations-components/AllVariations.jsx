import React from 'react';
import PropTypes from 'prop-types';
import Variation from './Variation.jsx';
import styles from './Variation.module.css';
import airPodsMax from '../data/airPodsMaxData';

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
  variations: PropTypes.instanceOf(Array),
};

AllVariations.defaultProps = {
  variations: airPodsMax.variations,
};

export default AllVariations;
