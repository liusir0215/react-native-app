/**
 * Created by liusheng on 6/2/16.
 */
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default {
	fetchData(cb) {
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				cb(responseData);
			})
			.done();
	}
}