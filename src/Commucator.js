import axios from 'axios';

const apiURL = "/api/";

export function get(cb) {
    axios.get(apiURL).then(data =>cb(data.data));
}

export function poistaRavintola(id) {
    return axios.delete(apiURL + "/")
}

export function lisaaRavintola(data) {
    return axios.post(apiURL, {ravintola:data.ravintola});
}

export function lisaaArvostelu(data){
    return axios.post(apiURL, {arvio:data.arvio})
}
