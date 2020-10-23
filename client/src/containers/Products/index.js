import { connect } from 'react-redux';
import Products from 'src/components/Products';

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
