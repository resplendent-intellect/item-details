import React from 'react';
import PropTypes from 'prop-types';
import Plan from './Plan.jsx';

const Protection = ({ protectionPlans, name }) => (
  <div>
    <div>
      <h3>
        Protection for your
        {' '}
        {name}
      </h3>
    </div>
    <div>
      {protectionPlans.map((plan) => (
        <Plan plan={plan} />
      ))}
    </div>
    <div>
      <a href="about:blank">Learn more</a>
    </div>
  </div>
);

Protection.propTypes = {
  protectionPlans: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
};

export default Protection;
