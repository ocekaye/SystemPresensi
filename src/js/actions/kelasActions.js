import axios from "axios";

export function fetchKelas() {
  return function(dispatch) {
    axios.get("http://localhost:3000/api/Kelas")
      .then((response) => {
        dispatch({type: "FETCH_KELAS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_KELAS_REJECTED", payload: err})
      })
  }
}

export function fetchKelasTugas(api) {
  return function(dispatch) {
    axios.get(api)
        .then((response) => {
          dispatch({type: "FETCH_TUGAS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
          dispatch({type: "FETCH_TUGAS_REJECTED", payload: err})
        })
  }
}

export function addTweet(id, text) {
  return {
    type: 'ADD_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function updateTweet(id, text) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      id,
      text,
    },
  }
}

export function deleteTweet(id) {
  return { type: 'DELETE_TWEET', payload: id}
}
