/**
 * Created by Hinata on 5/11/2017.
 */
import axios from "axios";
import {API_BASE, webStorage, saveAccount, getAccount} from '../utils';

export function getJadwal() {
    return function(dispatch) {
        dispatch({type: "FETCH_JADAL"});
        return axios.get(API_BASE+'Gurus/'+getAccount().id+'/jadwal/detail')
            .then(function (response) {
                console.log('jadwal', response);
                dispatch({type: "FETCH_JADWAL_FULFILLED", payload: response.data});
            }).catch(function (err) {
                dispatch({type: "FETCH_JADWAL_REJECTED", payload: err.data})
            });
    }
}