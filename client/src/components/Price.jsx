import React from 'react';
import PropTypes from 'prop-types';
import PriceMatch from './PriceMatch.jsx';
import Returns from './Returns.jsx';

const Price = ({ price }) => (
  <div>
    <PriceMatch />
    <div>
      $
      {price.toFixed(2)}
    </div>
    or
    <div>
      $
      {(price / 12).toFixed(2)}
      /mo. *
      suggested payments with 12-Month Financing
    </div>
    <a href="http://localhost:3000">Show me how &gt;</a>
    <Returns />
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
};

Price.defaultProps = {
  price: 100,
};

export default Price;
