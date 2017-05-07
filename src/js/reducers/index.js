import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import kelas from "./kelasReducer"
import account from './accountReducer';

export default combineReducers({
    tweets,
    user,
    kelas,
    account,
})
