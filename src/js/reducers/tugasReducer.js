export default function reducer(state={
    tugas:[],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
        case "FETCH_TUGAS": {
            state.fetching = true;
            state.fetched = false;
            state.tugas = [];
            return {...state}
        }
        case "FETCH_TUGAS_REJECTED": {
            state.fetching = false;
            state.fetched = false;
            state.tugas = [];
            state.error = action.payload;
            return {...state}
        }
        case "FETCH_TUGAS_FULFILLED": {
            state.fetching = false;
            state.fetched = true;
            state.tugas = action.payload;
            return {...state}
        }
    }

    return {...state};
}
