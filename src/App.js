import React from 'react';
import Table from './components/table/table.components';

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
    };
  }

  componentDidMount() {
    let urls = [
      "https://api.exchangeratesapi.io/latest?base=USD",
      "https://api.exchangeratesapi.io/latest?base=EUR",
      "https://api.exchangeratesapi.io/latest?base=HKD",
    ];
    let requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(results => {
        this.setState({
          isLoaded: true,
          USDrates: results[0].rates.JPY,
          EURrates: results[1].rates.JPY,
          HKDrates: results[2].rates.JPY
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
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Rate</th>
                </tr>
              </thead>
              <tr>
                <td>USD</td>
                <td>{this.state.USDrates}</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>{this.state.EURrates}</td>
              </tr>
              <tr>
                <td>HKD</td>
                <td>{this.state.HKDrates}</td>
              </tr>
            </table>
          </div>
        </div>
      )
    }
  }
}
export default App;
