import { connect } from 'react-redux';
import Carousel from 'src/components/ContentPage/Carousel';

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
