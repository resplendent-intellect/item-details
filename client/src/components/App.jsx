import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getProduct('60021bc40276d4416e8f8cf3');
  }

  getProduct(id) {
    $.get(`/products/${id}`, (data) => {
      this.setState(data);
    });
  }

  render() {
    return <h1>Hello from App.jsx</h1>;
  }
}

export default App;
