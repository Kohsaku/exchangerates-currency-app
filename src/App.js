import React from 'react';
import Table from './components/table/table.components';
import Header from './components/header/header.components';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      USDrates: {},
      EURrates: {},
      HKDrates: {},
      CADrates: {}
    };
  }

  componentDidMount() {
    let urls = [
      "https://api.exchangeratesapi.io/latest?base=USD",
      "https://api.exchangeratesapi.io/latest?base=EUR",
      "https://api.exchangeratesapi.io/latest?base=HKD",
      "https://api.exchangeratesapi.io/latest?base=CAD"
    ];
    let requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(results => {
        this.setState({
          isLoaded: true,
          USDrates: results[0].rates.JPY,
          EURrates: results[1].rates.JPY,
          HKDrates: results[2].rates.JPY,
          CADrates: results[3].rates.JPY,
        })
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }
  componentDidUpdate() {
    console.log(this.state.USDrates);
    console.log(this.state.EURrates);
  }

  render() {
    const { error, isLoaded} = this.state;

    if (error) {
      return <div>Oops: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Header />
          <div className="App__body">
            <Table className="table"
              USDrates = {this.state.USDrates}
              EURrates = {this.state.EURrates}
              HKDrates = {this.state.HKDrates}
              CADrates = {this.state.CADrates}
            />
        </div>
        </div>
      )
    }
  }
}
export default App;
