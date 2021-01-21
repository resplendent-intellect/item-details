import React from 'react';
import PropTypes from 'prop-types';

const Plan = ({ plan }) => (
  <div>
    <input type="checkbox" />
    <div>
      {plan.name}
    </div>
    <div>
      $
      {plan.price.toFixed(2)}
      About $
      {(plan.price / 12).toFixed(2)}
      /mo
    </div>
  </div>
);

Plan.propTypes = {
  plan: PropTypes.instanceOf(Object).isRequired,
};

export default Plan;
