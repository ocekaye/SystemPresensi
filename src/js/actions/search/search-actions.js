import { API_BASE, webStorage } from '../../utils'
import axios from 'axios'

export const GET_SEARCH_REQUEST = 'GET_SEARCH_REQUEST';
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
export const GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE';

const API_URL= API_BASE + 'search';

function requestSearch (query, offset, limit, contentType) {
    return {
        type: GET_SEARCH_REQUEST,
        isFetching: true,
        limit,
        offset,
        contentType
    }
}

function receiveSearch (results) {
    return {
        type: GET_SEARCH_SUCCESS,
        isFetching: false,
        results
    }
}

function getSearchFailure (message) {
    return {
        type: GET_SEARCH_FAILURE,
        isFetching: false,
        results: [],
        message
    }
}

export function getSearch(query) {
    var params = {
        query
    };

    return dispatch => {
        dispatch(requestSearch(query, null, null, null));
        return axios.get(API_URL, {
            params,
            headers: {'Authorization': webStorage.getItem('token')}
        }).then(function (response) {
            dispatch(receiveSearch(response.data));
        }).catch(function (error) {
            dispatch(getSearchFailure(error));
            return Promise.reject(error);
        })
    }
}