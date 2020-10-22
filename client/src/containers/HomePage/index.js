import { connect } from 'react-redux';
import HomePage from '../HomePage';
import { fetchCategory } from '../../actions/categories';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchCategory: () => {
    console.log('je veux charger les données des category');
    dispatch(fetchCategory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
