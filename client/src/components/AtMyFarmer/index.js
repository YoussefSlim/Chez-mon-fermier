// npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// imports routes
import routes from 'src/components/Router';

import LeftSideBar from 'src/components/LeftSideBar';
import StaticHeader from 'src/components/StaticHeader';
import LegalNotice from 'src/components/LegalNotice';
import ProjectTeam from 'src/components/ProjectTeam';
import TermsAndConditions from 'src/components/TermsAndConditions';
import TheConcept from 'src/components/TheConcept';
import HomePage from 'src/containers/HomePage';
import ContactUs from 'src/components/ContactUs';
import NotFound from 'src/components/NotFound';
import SignUp from 'src/components/SignUp';
import ToLogIn from 'src/components/ToLogIn';

import './style.scss';

const AtMyFarmer = () => {
  return (
    <>
      <LeftSideBar />
      <ToLogIn />
      <StaticHeader />
      <Switch>
        <Route exact path={routes.route1} component={HomePage} />
        <Route exact path={routes.route3} component={LegalNotice} />
        <Route exact path={routes.route4} component={TermsAndConditions} />
        <Route exact path={routes.route5} component={TheConcept} />
        <Route exact path={routes.route6} component={ProjectTeam} />
        <Route exact path={routes.route7} component={HomePage} />
        <Route exact path={routes.route8} component={HomePage} />
        <Route exact path={routes.route9} component={ContactUs} />
        <Route exact path={routes.route10} component={SignUp} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default AtMyFarmer;
