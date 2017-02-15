/**
 * Created by liusheng on 6/1/16.
 */
import * as types from '../constants/ActionType';
import movies from '../fetchMethods/fetchMovies';

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