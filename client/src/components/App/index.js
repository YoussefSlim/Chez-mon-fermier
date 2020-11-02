// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// == Import
import ToolsBar from 'src/components/ToolsBar';
import ContentPage from 'src/containers/ContentPage';
import Footer from 'src/components/Footer';
import LoginForm from 'src/containers/LoginForm';

import './styles.css';
import SignUp from 'src/containers/SignUp';
import Cart from 'src/containers/Cart';
import Spins from 'src/components/Spins';
import HeaderNav from '../../containers/headerNav';
import SucessMessage from '../SucessMessage';

// == Composant
const App = ({ fetchProducts, fetchCategories, fetchShop, user, loading, signup }) => {
  console.log('je suis dans app component =>', signup);
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchShop();
  }, []);
  return (
    <>
      {loading ? (
        <>
          <HeaderNav isLogged={user.isLogged} pseudo={user.pseudo} />
          <ToolsBar />
          <Spins />
          <Footer />
        </>
      ) : (
        <>
          <HeaderNav isLogged={user.isLogged} pseudo={user.pseudo} />
          <ToolsBar />
          <Switch>
            <Route path="/authentification">
              {user.isLogged ? <Redirect to="/" /> : <LoginForm />}
            </Route>
            <Route path="/panier" component={Cart} />
            <Route path="/inscription" component={SignUp} />

            <Route path="/" component={ContentPage} />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
};

App.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  fetchShop: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  signup: PropTypes.bool,
  user: PropTypes.shape({
    isLogged: PropTypes.bool,
    pseudo: PropTypes.any,
  }).isRequired,
};
App.defaultProps = {
  isLogged: false,
  signup: false,
};

// == Export
export default App;
