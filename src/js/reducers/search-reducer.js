
import {
    GET_SEARCH_FAILURE,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_REQUEST
} from '../actions/search/search-actions'

export default function reducer(state = {
    isFetching: false,
    results: []
}, action) {
    switch (action.type) {
        case GET_SEARCH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                query: action.query,
                limit: action.limit,
                offset: action.offset,
                contentType: action.contentType
            });
        case GET_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                results: action.results
            });
        case GET_SEARCH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message
            });
        default:
            return state;
    }
}