import React from 'react';
import PropTypes from 'prop-types';
import Plan from './Plan.jsx';
import styles from './Protection.module.css';

const Protection = ({ protectionPlans, name }) => (
  <div className={styles.container}>
    <div className={styles.protectionContainer}>
      <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/iconfinder_outlined_shield_4280489.png" alt="warranty icon" className={styles.shield} />
      <div className={styles.protectionStarsContainer}>
        <h3>
          Protection for your
          {' '}
          {name}
        </h3>
        <div className={styles.stars}>
          <img src="https://bigbrain-itemdetails.s3-us-west-1.amazonaws.com/5_stars.svg" alt="stars" />
          (839)
        </div>
      </div>
    </div>
    <div>
      {protectionPlans.map((plan, i) => (
        <Plan plan={plan} index={i} />
      ))}
    </div>
    <div>
      <a href="about:blank" className={styles.learnMore}>Learn more</a>
    </div>
  </div>
);

Protection.propTypes = {
  protectionPlans: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
};

export default Protection;
