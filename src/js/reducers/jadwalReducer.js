export default function reducer(state={
    jadwal:[],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
        case "FETCH_JADWAL": {
            state.fetching = true;
            return {...state}
        }
        case "FETCH_JADWAL_REJECTED": {
            state.fetching = false;
            state.error = action.payload;
            return {...state}
        }
        case "FETCH_JADWAL_FULFILLED": {
            state.fetching = false;
            state.fetched = true;
            state.jadwal = action.payload;
            return {...state}
        }
    }

    return {...state};
}
