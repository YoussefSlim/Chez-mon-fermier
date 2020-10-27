// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// == Import
import HeaderNav from 'src/components/HeaderNav';
import ToolsBar from 'src/components/ToolsBar';
import ContentPage from 'src/containers/ContentPage';
import Footer from 'src/components/Footer';
//import Cart from 'src/components/Cart';
import './styles.css';

// == Composant
const App = ({ fetchProducts, fetchCategories }) => {
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <>
      <HeaderNav />
      <ToolsBar />
      <ContentPage />
      <Footer />
    </>
  );
};

App.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

// == Export
export default App;
