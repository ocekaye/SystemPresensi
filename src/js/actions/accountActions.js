import axios from "axios";

export function checkLogin() {
  return function (dispatch) {
    dispatch({type: "CHECK_LOGIN"});
  }
}
