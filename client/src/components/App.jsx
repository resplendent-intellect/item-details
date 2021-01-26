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

  // componentDidMount() {
  //   this.getRandomProduct();
  // }

  // getProduct(id) {
  //   $.get(`/products/${id}`, (data) => {
  //     this.setState({
  //       product: data,
  //     });
  //   });
  // }

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
        <hr />
        <AllVariations variations={variations} />
        <hr />
        <Protection protectionPlans={protectionPlans} name={name} />
        <hr />
        <StockShipping inStock={inStock} />
        <hr />
        <AddToCart product={product} />
        <hr />
        <Offers offers={offers} />
      </div>
    );
  }
}

export default App;
