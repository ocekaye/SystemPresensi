export default function reducer(state={
    kelas: [],
    tugas:[],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_KELAS": {
        return {...state, fetching: true}
      }
      case "FETCH_KELAS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_KELAS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          kelas: action.payload,
        }
      }
      case "FETCH_TUGAS": {
        return {...state, fetching: true}
      }
      case "FETCH_TUGAS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TUGAS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tugas: action.payload,
        }
      }
      case "ADD_TWEET": {
        return {
          ...state,
          siswas: [...state.siswas, action.payload],
        }
      }
      case "UPDATE_TWEET": {
        const { id, text } = action.payload
        const newTweets = [...state.siswas]
        const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          siswas: newTweets,
        }
      }
      case "DELETE_TWEET": {
        return {
          ...state,
          siswas: state.siswas.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
