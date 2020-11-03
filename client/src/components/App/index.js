// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useParams, useRouteMatch } from 'react-router-dom';

// == Import
import ToolsBar from 'src/components/ToolsBar';
import ContentPage from 'src/containers/ContentPage';
import Footer from 'src/components/Footer';
import LoginForm from 'src/containers/LoginForm';
import { routes } from 'src/components/Routes';
import './styles.css';
import PageProduct from 'src/containers/ContentPage/Products/PageProduct';
import SignUp from 'src/containers/SignUp';
import Cart from 'src/containers/Cart';
import Spins from 'src/components/Spins';
import HeaderNav from '../../containers/headerNav';
// import SucessMessage from '../SucessMessage';
import Products from '../ContentPage/Products';

// == Composant
const App = ({ fetchProducts, fetchCategories, fetchShop, user, loading, products }) => {
  // const match = useRouteMatch({
  //   path: '/products/:slug/',
  //   isExact: true,
  //   strict: true,
  //   sensitive: true,
  // });
  console.log('je suis dans app component =>', routes);
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
            <Route exact path={routes.authentification}>
              {user.isLogged ? <Redirect to={routes.acceuil} /> : <LoginForm />}
            </Route>
            <Route exact path={routes.panier} component={Cart} />
            <Route exact path={routes.inscription} component={SignUp} />
            <Route exact path={routes.produits} component={Products} />
            <Route exact path={routes.camembert} component={PageProduct} />
            <Route exact path={routes.boeuf} component={PageProduct} />
            <Route exact path={routes.veau} component={PageProduct} />
            <Route exact path={routes.pommes} component={PageProduct} />
            <Route exact path={routes.jambons} component={PageProduct} />

            <Route path={routes.acceuil} component={ContentPage} />
            {/* <Route path="/produits/:slug">
              {match ? <PageProduct match={match} /> : <Products />}
            </Route> */}
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
