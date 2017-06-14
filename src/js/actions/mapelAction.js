/**
 * Created by Hinata on 6/8/2017.
 */
import axios from "axios";
import {API_BASE, webStorage, saveAccount} from '../utils';
export function getMapel() {
    return function(dispatch) {
        return axios.get(API_BASE+'Mapels')
            .then((response) => {
                dispatch({type: "MAPEL_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                console.log("MAPEL_REJECTED", err);
                dispatch({type: "MAPEL_REJECTED", payload: err})
            })
    }
}