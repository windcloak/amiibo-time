import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';

import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>

      <Route exact path="/" component={Home} />
      {/* <Route path="/graph" component={Graph} />
      <Route path="/about" component={About} /> */}
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
