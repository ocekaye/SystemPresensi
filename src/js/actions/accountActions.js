import axios from "axios";
import {API_BASE, webStorage, saveAccount} from '../utils';

export function checkLogin() {
  return function (dispatch) {
    dispatch({type: "CHECK_LOGIN"});
  }
}

export function login(username, password) {
  return function(dispatch) {
    return axios.post(API_BASE+'Gurus/login', {
      username: username,
      password: password
    }).then((response) => {
          webStorage.setItem('token', response.data.id);
          dispatch({type: "LOGIN_FULFILLED", payload: response.data})
          console.log('login', response);
          return (response.data.userId);
        })
        .catch((err) => {
          console.log("LOGIN_REJECTED", err);
          dispatch({type: "LOGIN_REJECTED", payload: err})
        })
  }
}

export function getAccount(id) {
  return function(dispatch) {
    return axios.get(API_BASE+'Gurus/'+id)
        .then((response) => {
          console.log('getAccount', response);
          saveAccount(response.data);
          return (id);
        })
        .catch((err) => {
          console.log("LOGIN_REJECTED", err);
          dispatch({type: "LOGIN_REJECTED", payload: err})
        })
  }
}
