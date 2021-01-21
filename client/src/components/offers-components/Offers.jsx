import React from 'react';
import PropTypes from 'prop-types';

const Offers = ({ offers }) => (
  <div>
    {offers.map((offer) => (
      <div>
        <h5>{offer.offerType}</h5>
        {offer.offers.map((item) => (
          <div>
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
