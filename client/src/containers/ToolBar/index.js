import { connect } from 'react-redux';
import ToolsBar from 'src/components/ToolsBar';

const mapState = (state) => {
    state.categories.categories.find((categorie) => {
        
    });

};

const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(ToolsBar);
