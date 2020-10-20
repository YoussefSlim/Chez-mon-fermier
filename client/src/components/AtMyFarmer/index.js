import React from "react";

import HomePage from "../HomePage";
//import StaticHeader from "../StaticHeader";
//import LeftSideBar from "../LeftSideBar";

import BecomeAseller from "../Footer/BecomeAseller";
import Contact from "../Footer/Contact";
import LegalNotice from "../Footer/LegalNotice";
import MyAccount from "../Footer/MyAccount";
import OurTeam from "../Footer/OurTeam";
import TermsOfSales from "../Footer/TermsOfSales";
import TheConcept from "../Footer/TheConcept";

//import Footer from "../../components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.scss";

const AtMyFarmer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/HomePage" component={HomePage} />
        <Route path="/BecomeAseller" component={BecomeAseller} />
        <Route path="/Contact" component={Contact} />
        <Route path="/LegalNotice" component={LegalNotice} />
        <Route path="/MyAccount" component={MyAccount} />
        <Route path="/OurTeam" component={OurTeam} />
        <Route path="/TermsOfSales" component={TermsOfSales} />
        <Route path="/TheConcept" component={TheConcept} />
      </Switch>
    </Router>
  );
};

export default AtMyFarmer;

//<Footer />
//<StaticHeader />
//<LeftSideBar />
