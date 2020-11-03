import { connect } from 'react-redux';
import Categories from 'src/components/ContentPage/Categories';

import { fetchCategories } from 'src/actions/categories';

const mapState = ({ categories: { categories } }) => ({ categories });

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

export default connect(mapState, mapDispatchToProps)(Categories);
