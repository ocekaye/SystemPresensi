import { combineReducers } from "redux"

import tweets from "./tweetsReducer"
import user from "./userReducer"
import kelas from "./kelasReducer"
import account from './accountReducer';
import jadwal from './jadwalReducer';
import tugas from './tugasReducer';

export default combineReducers({
    tweets,
    user,
    kelas,
    account,
    jadwal,
    tugas,
})
