import React from 'react';
import Table from './components/table/table.components';
import Header from './components/header/header.components';
import SelectInput from './components/selectInput/selectInput.components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    console.log(event.target.value);
    const currency = event.target.value
    let urls = [
      "https://api.exchangeratesapi.io/latest?base=USD",
      "https://api.exchangeratesapi.io/latest?base=EUR",
      "https://api.exchangeratesapi.io/latest?base=HKD",
      "https://api.exchangeratesapi.io/latest?base=CAD"
    ];
    let requests = urls.map(url => fetch(url));
    Promise.all(requests)
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(results => 
        {
          if (currency === "JPY") {
            this.setState({
              isLoaded: true,
              USDrates: results[0].rates.JPY,
              EURrates: results[1].rates.JPY,
              HKDrates: results[2].rates.JPY,
              CADrates: results[3].rates.JPY,
            })
          }
          else if (currency === "USD") {
            this.setState({
              isLoaded: true,
              USDrates: results[0].rates.USD,
              EURrates: results[1].rates.USD,
              HKDrates: results[2].rates.USD,
              CADrates: results[3].rates.USD,
            })
          }
          else if (currency === "EUR") {
            this.setState({
              isLoaded: true,
              USDrates: results[0].rates.EUR,
              EURrates: results[1].rates.EUR,
              HKDrates: results[2].rates.EUR,
              CADrates: results[3].rates.EUR,
            })
          }
          else {
            this.setState({
              isLoaded: true,
              USDrates: "",
              EURrates: "",
              HKDrates: "",
              CADrates: "",
            })
          }
        },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }  
      );
  }
  
  render() {
    const { error, isLoaded} = this.state;

    if (error) {
      return <div>Oops: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Router>
          <div className="App">
            <Header />
            <SelectInput onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            <Switch>
              <Route path="/">
              <div className="App__body">
                <Table className="table"
                  USDrates = {this.state.USDrates}
                  EURrates = {this.state.EURrates}
                  HKDrates = {this.state.HKDrates}
                  CADrates = {this.state.CADrates}
                />
              </div>
              </Route>
              <Route path="/JPY">
                <Table className="table"
                  USDrates = {this.state.USDrates}
                  EURrates = {this.state.EURrates}
                  HKDrates = {this.state.HKDrates}
                  CADrates = {this.state.CADrates}
                  />
              </Route>
              <Route path="/USD">
              <Table className="table"
                  USDrates = {this.state.USDrates}
                  EURrates = {this.state.EURrates}
                  HKDrates = {this.state.HKDrates}
                  CADrates = {this.state.CADrates}
                  />
              </Route>
            </Switch>
          </div>
        </Router>
      )
    }
  }
}
export default App;
