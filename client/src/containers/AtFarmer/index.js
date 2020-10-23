import { connect } from 'react-redux';
import AtMyFarmer from 'src/components/AtMyFarmer';
// import { fetchRecipes } from 'src/actions/recipes';
// import { checkIsLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  //   loading: state.app.loading,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AtMyFarmer);
