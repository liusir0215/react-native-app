/**
 * Created by liusheng on 6/2/16.
 */
import { movies_url } from '../apis';

export default {
	fetchData(cb) {
		fetch(movies_url)
			.then((response) => response.json())
			.then((responseData) => {
				cb(responseData);
			})
			.done();
	}
}