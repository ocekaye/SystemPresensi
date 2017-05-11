export default function reducer(state={
    jadwal:[],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
        case "FETCH_JADAL": {
            return {...state, fetching: true}
        }
        case "FETCH_JADWAL_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_JADWAL_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                jadwal: action.payload,
            }
        }
    }

    return state;
}
