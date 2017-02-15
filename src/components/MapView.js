/**
 * Created by liusheng on 6/5/16.
 */
import {
	MapView,
	StyleSheet
} from 'react-native';

import React, { Component } from 'react';

export default class MapViews extends Component {
	render(){

		return (
		<MapView
			style={styles.map}
			>
		</MapView>
	)}
}

const styles = StyleSheet.create({
	map: {
		height: 150,
		margin: 10,
		borderWidth: 1,
		borderColor: '#000000',
	},

})