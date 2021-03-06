import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';

export default class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          
        </React.Fragment>
      </div>
    )
  }
}