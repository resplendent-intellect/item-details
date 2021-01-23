import React from 'react';
import PropTypes from 'prop-types';
import styles from './Offers.module.css';

const Offers = ({ offers }) => (
  <div className={styles.offersContainer}>
    {offers.map((offer) => (
      <div className={styles.offersAndType}>
        <h5>{offer.offerType}</h5>
        {offer.offers.map((item) => (
          <div className={styles.offerTitle}>
            <a href="about:blank">{item.title}</a>
          </div>
        ))}
      </div>
    ))}
  </div>
);

Offers.propTypes = {
  offers: PropTypes.instanceOf(Array).isRequired,
};

export default Offers;
