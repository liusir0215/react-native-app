/**
 * Created by liusheng on 6/1/16.
 */
import { ListView } from 'react-native';

const initialState = {
	loaded: false,
	dataSource: new ListView.DataSource({
		rowHasChanged: (row1, row2) => row1 !== row2,
	}),
}
function movieReducers(state = initialState, action = {}) {
	switch (action.type) {
		case 'REQUEST_MOVIES':
			return {
				loaded: true,
				dataSource: action.movies
			}
		default :
			return state
	}
}

export default movieReducers;