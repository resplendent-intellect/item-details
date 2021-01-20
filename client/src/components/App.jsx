import React from 'react';
import $ from 'jquery';
import Price from './Price.jsx';
import AllVariations from './AllVariations.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getProduct('6007a3853fdca13bc5b1a2e5');
  }

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
      </div>
    );
  }
}

export default App;
