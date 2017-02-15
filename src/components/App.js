/**
 * Created by liusheng on 6/1/16.
 */
import React, { Component, PropTypes } from 'react';
import {
	AppRegistry,
	Image,
	ListView,
	StyleSheet,
	Text,
	View,
	PanResponder
} from 'react-native';
import { fetchMovies } from '../actions';

class AwesomeProject extends Component {

	componentDidMount(){

	}

	componentWillMount() {
		this.props.dispatch(fetchMovies());

		this._panResponder = PanResponder.create({
			// Ask to be the responder:
			onStartShouldSetPanResponder: (evt, gestureState) => true,
			onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

			onPanResponderGrant: (evt, gestureState) => {
				// The guesture has started. Show visual feedback so the user knows
				// what is happening!

				// gestureState.{x,y}0 will be set to zero now
			},
			onPanResponderMove: (evt, gestureState) => {
				// The most recent move distance is gestureState.move{X,Y}

				// The accumulated gesture distance since becoming responder is
				// gestureState.d{x,y}
			},
			onPanResponderTerminationRequest: (evt, gestureState) => true,
			onPanResponderRelease: (evt, gestureState) => {
				// The user has released all touches while this view is the
				// responder. This typically means a gesture has succeeded
			},
			onPanResponderTerminate: (evt, gestureState) => {
				// Another component has become the responder, so this gesture
				// should be cancelled
			},
			onShouldBlockNativeResponder: (evt, gestureState) => {
				// Returns whether this component should block native components from becoming the JS
				// responder. Returns true by default. Is currently only supported on android.
				return true;
			},
		});
	}

	render() {
		const { loaded, dataSource } = this.props;

		if (!loaded) {
			return this.renderLoadingView();
		}
		const data = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		}).cloneWithRows(dataSource);

		return (
			<ListView
				dataSource={data}
				renderRow={this.renderMovie}
				style={styles.listView}
				{...this._panResponder.panHandlers}
				/>
		);
	}

	renderLoadingView() {
		return (
			<View
				style={styles.container}
				{...this._panResponder.panHandlers}
				>
				<Text>
					Loading movies...
				</Text>
			</View>
		);
	}

	renderMovie(movie) {
		return (
			<View
				style={styles.container}
				>
				<Image
					source={{uri: movie.posters.thumbnail}}
					style={styles.thumbnail}
					/>
				<View style={styles.rightContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.year}>{movie.year}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	thumbnail: {
		width: 53,
		height: 81,
	},
	rightContainer: {
		flex: 1,
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	year: {
		textAlign: 'center',
	},
	listView: {
		paddingTop: 20,
		backgroundColor: '#F5FCFF',
	},
});

export default AwesomeProject;