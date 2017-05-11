import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import kelas from "./kelasReducer"
import account from './accountReducer';
import jadwal from './jadwalReducer';

export default combineReducers({
    tweets,
    user,
    kelas,
    account,
    jadwal,
})
