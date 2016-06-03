/**
 * Created by liusheng on 6/1/16.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/index';

import App from './AwesomeProject';

const store = configureStore();

class AwesomeProject extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

export default AwesomeProject;