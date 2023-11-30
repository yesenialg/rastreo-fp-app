import axios from "axios";

const apiBaseGuiaUrl  = "http://localhost:5177/api/Guia/"

export function getGuia(id){
    const url = `${apiBaseGuiaUrl}ByNumero/${id}`
    return axios.get(url)
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log("Error al obtener la guía:", error);
    })
}