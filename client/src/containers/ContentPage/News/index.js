import { connect } from 'react-redux';
import News from 'src/components/ContentPage/News';

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(News);
