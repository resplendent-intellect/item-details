import React from 'react';
import $ from 'jquery';
import Price from './price-components/Price.jsx';
import AllVariations from './variations-components/AllVariations.jsx';
import airPodsMax from './data/airPodsMaxData';
import Protection from './protection-components/Protection.jsx';
import StockShipping from './stock-shipping-components/StockShipping.jsx';
import AddToCart from './addtocart-components/AddToCart.jsx';
import Offers from './offers-components/Offers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = airPodsMax;
  }

  // componentDidMount() {
  //   this.getProduct('6007a3853fdca13bc5b1a2e5');
  // }

  getProduct(id) {
    $.get(`/products/${id}`, (data) => {
      this.setState(data);
    });
  }

  render() {
    const {
      price,
      variations,
      protectionPlans,
      name,
      inStock,
      offers,
    } = this.state;
    return (
      <div>
        <Price price={price} />
        <hr />
        <AllVariations variations={variations} />
        <hr />
        <Protection protectionPlans={protectionPlans} name={name} />
        <hr />
        <StockShipping inStock={inStock} />
        <hr />
        <AddToCart />
        <hr />
        <Offers offers={offers} />
      </div>
    );
  }
}

export default App;
