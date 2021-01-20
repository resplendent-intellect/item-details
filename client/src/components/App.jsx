import React from 'react';
import $ from 'jquery';
import Price from './price-components/Price.jsx';
import AllVariations from './variations-components/AllVariations.jsx';
import airPodsMax from './data/airPodsMaxData';

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
    const { price, variations } = this.state;
    return (
      <div>
        <Price price={price} />
        <hr />
        <AllVariations variations={variations} />
        <hr />
      </div>
    );
  }
}

export default App;
