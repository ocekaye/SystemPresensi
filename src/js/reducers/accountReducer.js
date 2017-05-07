import {webStorage} from '../utils';
export default function reducer(state={
    isLogin: webStorage.getItem('token') ? true : false,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "CHECK_LOGIN": {
        return {...state, fetching: false, fetched: true}
      }

    }

    return state
}
