import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Homepage from "../src/pages/Homepage";
import Contact from "../src/pages/Contact";
import Portfolio from "../src/pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/"]} component={Homepage} />
          <Route exact path={["/Portfolio"]} component={Portfolio} />
          <Route exact path={["/Contact"]} component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
