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
                dispatch({type: "FETCH_JADWAL_FULFILLED", payload: response.data});
            }).catch(function (err) {
                dispatch({type: "FETCH_JADWAL_REJECTED", payload: err.data})
            });
    }
}

export function getAllTugas() {
    return function(dispatch) {
        dispatch({type: "FETCH_TUGAS"});
        return axios.get(API_BASE+'Gurus/'+getAccount().id+'/tugas/detail')
            .then(function (response) {
                console.log('tugas', response);
                dispatch({type: "FETCH_TUGAS_FULFILLED", payload: response.data});
            }).catch(function (err) {
                dispatch({type: "FETCH_TUGAS_REJECTED", payload: err.data})
            });
    }
}

export function getAllTugasByKelas(id) {
    return function(dispatch) {
        dispatch({type: "FETCH_TUGAS"});
        return axios.get(API_BASE+'Kelas/'+id+'/'+getAccount().id+'/tugas')
            .then(function (response) {
                console.log('tugas', response);
                dispatch({type: "FETCH_TUGAS_FULFILLED", payload: response.data});
            }).catch(function (err) {
                dispatch({type: "FETCH_TUGAS_REJECTED", payload: err.data})
            });
    }
}