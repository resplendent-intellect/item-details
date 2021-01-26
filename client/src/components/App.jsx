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
    this.state = {
      product: airPodsMax,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    $.get(`http://localhost:3002/api${window.location.pathname}`, (data) => {
      this.setState({
        product: data,
      });
    });
  }

  // getRandomProduct() {
  //   $.get('/random', (data) => {
  //     this.setState({
  //       product: data[0],
  //     });
  //   });
  // }

  render() {
    const { product } = this.state;
    const {
      price,
      variations,
      protectionPlans,
      name,
      inStock,
      offers,
    } = product;

    return (
      <div>
        <Price price={price} />
        <AllVariations variations={variations} />
        <Protection protectionPlans={protectionPlans} name={name} />
        <StockShipping inStock={inStock} />
        <AddToCart product={product} />
        <Offers offers={offers} />
      </div>
    );
  }
}

export default App;
