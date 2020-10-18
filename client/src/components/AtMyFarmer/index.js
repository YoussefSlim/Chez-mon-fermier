import React from "react";
import HomePage from "../HomePage";
import Footer from "../Footer";
import LegalNotice from "../Footer/LegalNotice";
//import TermsAndConditions from "../Footer/TermsAndConditions";
//import Confidentiality from "../Footer/Confidentiality";
//import WhoAreWe from "../Footer/WhoAreWe";
import Contact from "../Footer/Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./style.scss";

const AtMyFarmer = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/Footer" component={Footer} />
      <Route path="/LegalNotice" component={LegalNotice} />
      <Route path="/Contact" component={Contact} />
    </Router>
  );
};

export default AtMyFarmer;
