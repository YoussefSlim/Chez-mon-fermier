import { connect } from 'react-redux';
import Shop from 'src/components/ContentPage/Shop';

import { fetchShop } from 'src/actions/shop';

const mapStateToProps = (state) => ({ shops: state.shop.shops });

const mapDispatchToProps = (dispatch) => ({
  fetchShop: () => {
    dispatch(fetchShop());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
