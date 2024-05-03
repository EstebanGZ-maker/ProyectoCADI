import axios from "./axios.js";

export const getOringsRequest = (medidasOring) => axios.get(`/queryOring/query`, medidasOring);

export const createOringsRequest = (queryOring) => axios.post(`/queryOring`, queryOring); 

export const updateOringRequest = (queryOring) => axios.put(`/queryOring/${queryOring._id}`, queryOring); 

export const deleteOringRequest = (id) => axios.delete(`/queryOring/${id}`); 
