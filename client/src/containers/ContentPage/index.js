import { connect } from 'react-redux';
import ContentPage from 'src/components/ContentPage';

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
