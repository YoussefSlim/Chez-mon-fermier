import React from "react";
import HomePage from "../HomePage";
import Footer from "../../components/Footer";
import LegalNotice from "../Footer/LegalNotice";
//import TermsAndConditions from "../Footer/TermsAndConditions";
//import Confidentiality from "../Footer/Confidentiality";
//import WhoAreWe from "../Footer/WhoAreWe";
import Contact from "../Footer/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.scss";

const AtMyFarmer = () => {
  return (
    <Router>
      <HomePage />
      <Footer />

      <Switch>
        <Route exact path="/" components={HomePage} />
        <Route path="/Footer" components={Footer} />
        <Route path="/LegalNotice" components={LegalNotice} />
        <Route path="/Contact" components={Contact} />
      </Switch>
    </Router>
  );
};

export default AtMyFarmer;
