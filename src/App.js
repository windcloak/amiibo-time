import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-up";

// import pages
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

import Home from "./pages/Home/Home";
import AmiiboDetail from "./pages/AmiiboDetail/AmiiboDetail";
import Amiibo from "./pages/Amiibo/Amiibo";
import About from "./pages/About/About";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleUp, faCode } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faChevronCircleUp, faCode);

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/amiibo" component={Amiibo} />
          <Route path="/amiibo/:id" exact component={AmiiboDetail} />
        </Switch>


        <Footer />
        
        <ScrollToTop showUnder={160}>
          <FontAwesomeIcon icon={faChevronCircleUp} size="2x" />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
