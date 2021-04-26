import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Homepage from "../src/pages/Homepage";
import Contact from "../src/pages/Contact";
import Portfolio from "../src/pages/Portfolio";
import NoMatch from "../src/pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/"]}>
            <Homepage />
          </Route>
          <Route exact path={["/portfolio"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/Contact"]}>
            <Contact />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
