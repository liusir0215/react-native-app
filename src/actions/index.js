/**
 * Created by liusheng on 6/1/16.
 */
import * as types from '../constants/ActionType';
import movies from '../apis/fetchMovies';

export function fetchMovies() {
	return dispatch => {
		movies.fetchData(movies => {
			dispatch({
					type: 'REQUEST_MOVIES',
					movies: movies.movies,
			});
		})
	}
}