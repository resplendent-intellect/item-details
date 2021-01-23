import React from 'react';
import PropTypes from 'prop-types';
import styles from './Protection.module.css';

const Plan = ({ plan, index }) => (
  <div className={styles.planContainer}>
    <div className={styles.checkbox}>
      <input id={`plan${index}`} type="checkbox" />
    </div>
    <label htmlFor={`plan${index}`} className={styles.planName}>
      <div>
        {plan.name}
      </div>
    </label>
    <div className={styles.pricesContainer}>
      <label htmlFor={`plan${index}`} className={styles.totalPrice}>
        <div>
          <b>
            $
            {plan.price.toFixed(2)}
          </b>
        </div>
        <div className={styles.monthlyPrice}>
          About $
          {(plan.price / 24).toFixed(2)}
          /mo
        </div>
      </label>
    </div>
  </div>
);

Plan.propTypes = {
  plan: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};

export default Plan;
