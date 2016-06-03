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
	View
} from 'react-native';
import { fetchMovies } from '../actions';

class AwesomeProject extends Component {
	render() {
		const { dispatch } = this.props;
		if (!this.props.loaded) {
			dispatch(fetchMovies());

			return this.renderLoadingView();
		}
		const data = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		}).cloneWithRows(this.props.dataSource);

		return (
			<ListView
				dataSource={data}
				renderRow={this.renderMovie}
				style={styles.listView}
				/>
		);
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>
					Loading movies...
				</Text>
			</View>
		);
	}

	renderMovie(movie) {
		return (
			<View style={styles.container}>
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