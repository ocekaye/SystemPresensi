
export default function reducer(state={
    mapels: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "MAPEL_FULFILLED": {
        return {...state, mapels:action.payload, fetching: false, fetched: true}
      }

    }

    return state
}
