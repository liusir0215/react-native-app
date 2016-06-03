/**
 * Created by liusheng on 6/1/16.
 */
import AwesomeProject from '../components/App';
import { connect } from 'react-redux';
import counter from '../reducers';

const mapStateToProps = (state) => {
	return {
		loaded: counter(state).movieReducers.loaded,
		dataSource: counter(state).movieReducers.dataSource
	};
}

export default connect(mapStateToProps)(AwesomeProject);