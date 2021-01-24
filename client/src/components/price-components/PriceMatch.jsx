import React, { useState, useRef } from 'react';
import styles from './Price.module.css';
import PriceMatchPopup from './PriceMatchPopup.jsx';

const PriceMatch = () => {
  const [showPricePopup, setShowPricePopup] = useState(false);
  const popupRef = useRef();

  const handleOutsideClick = (e) => {
    if (!popupRef.current.contains(e.target)) {
      setShowPricePopup(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!showPricePopup) {
      document.addEventListener('click', handleOutsideClick);
      setShowPricePopup(true);
    }
  };

  return (
    <div className={styles.priceMatchContainer}>
      <div ref={popupRef}>
        <PriceMatchPopup
          showPricePopup={showPricePopup}
          setShowPricePopup={setShowPricePopup}
        />
      </div>
      <a
        href="/"
        className={styles.priceMatch}
        onClick={handleClick}
      >
        Price Match Guarantee
      </a>
    </div>
  );
};

export default PriceMatch;
