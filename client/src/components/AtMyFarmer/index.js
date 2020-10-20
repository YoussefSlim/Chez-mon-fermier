// npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// imports routes
import routes from '../Router';

import LeftSideBar from '../LeftSideBar';
import StaticHeader from '../StaticHeader';
import LegalNotice from '../LegalNotice';
import ProjectTeam from '../ProjectTeam';
import TermsAndConditions from '../TermsAndConditions';
import TheConcept from '../TheConcept';
import { HomePage } from '../HomePage';
import ContactUs from '../ContactUs';
import NotFound from '../NotFound';

import './style.scss';

const AtMyFarmer = () => {
  return (
    <>
      <StaticHeader />
      <LeftSideBar />
      <Switch>
        <Route exact path={routes.route1} component={HomePage} />
        <Route exact path={routes.route3} component={LegalNotice} />
        <Route exact path={routes.route4} component={TermsAndConditions} />
        <Route exact path={routes.route5} component={TheConcept} />
        <Route exact path={routes.route6} component={ProjectTeam} />
        <Route exact path={routes.route7} component={HomePage} />
        <Route exact path={routes.route8} component={HomePage} />
        <Route exact path={routes.route9} component={ContactUs} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default AtMyFarmer;
