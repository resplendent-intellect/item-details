import React from 'react';
import PropTypes from 'prop-types';
import styles from './Offers.module.css';
import airPodsMax from '../data/airPodsMaxData';

const Offers = ({ offers }) => (
  <div className={styles.offersContainer}>
    {offers.map((offer) => (
      <div className={styles.offersAndType}>
        <h5>{offer.offerType}</h5>
        {offer.offers.map((item) => (
          <div className={styles.offerTitle}>
            <a href="/" onClick={(e) => { e.preventDefault(); }}>{item.title}</a>
          </div>
        ))}
      </div>
    ))}
  </div>
);

Offers.propTypes = {
  offers: PropTypes.instanceOf(Array),
};

Offers.defaultProps = {
  offers: airPodsMax.offers,
};

export default Offers;
