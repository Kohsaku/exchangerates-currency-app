import React from 'react';
import Table from './components/table/table.components';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rates: {},
    };
  }

  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            rates: result.rates
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  createTable = () => {
    const rates = this.state;
    var ratesArr = Object.keys(rates).map(i => rates[i])[2];
    var table = [];
    var children = [];
    var displayedCurrencies = ["JPY", "USD", "EUR", "HKD"];

    for (var key in ratesArr) {
      if (ratesArr.hasOwnProperty(key) && displayedCurrencies.includes(key)) {
        children.push(
          <tr>
          <td>{key}</td>
          <td>{ratesArr[key]}</td>
          </tr>
        );
      }
    }
  table.push(<tbody>{children}</tbody>);

  return table;
};

  render() {
    const { error, isLoaded } = this.state;

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
              {this.createTable()}
            </table>
          </div>
        </div>
      )
    }
  }
}
export default App;
