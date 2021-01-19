import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    $.get('/products/60021bc40276d4416e8f8cf3', (data) => {
      this.setState(data);
    });
  }

  render() {
    return <div>Hello from App.jsx</div>;
  }
}

export default App;
