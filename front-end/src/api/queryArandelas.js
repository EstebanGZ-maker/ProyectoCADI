import axios from "./axios.js";

export const getArandelaRequest = (medidasArandela) => {
    return axios.get("/queryArandela/query", {params: medidasArandela});
}; 

export const createArandelasRequest = (createArandelas) => axios.post("/queryArandela", createArandelas );

export const updateArandelasRequest = (parametros) => axios.put("/queryArandelas/id", parametros ); 

export const deleteArandelasRequest = (parametros) => axios.delete("/queryArandelas/id", parametros ); 
