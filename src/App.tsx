import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import DataStructures from './DataStructures/DataStructures';
import Algorithms from './Algorithms/Algorithms';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="App-main">
            <Navigation />
            <Switch>
              <Route path='/' exact component={DataStructures} />
              <Route path='/data-structures' component={DataStructures} />
              <Route path='/algorithms' component={Algorithms} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
