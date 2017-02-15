/**
 * Created by liusheng on 6/1/16.
 */
import React, { Component } from 'react';
import {
	View
} from 'react-native';
import App from '../components/App';
import MapViews from '../components/MapView';
import { connect } from 'react-redux';
import counters from '../reducers';

class AwesomeProject extends Component {
	render() {
		return (
			<View>
				<App {...this.props} />
				<MapViews />
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loaded: counters(state).movieReducers.loaded,
		dataSource: counters(state).movieReducers.dataSource
	};
}

export default connect(mapStateToProps)(AwesomeProject);