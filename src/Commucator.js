import axios from 'axios';

const apiURL = "http://localhost:8080/api/";

export function get(cb) {
    axios.get(apiURL + "ravintolat").then(data =>cb(data.data));
}

export function haeArviot(cb){
    axios.get(apiURL + "arvostelut").then(data =>cb(data.data));
}


export function lisaaArvostelu(data){
    return axios.post(apiURL + "arvostelut", data)
}
