import axios from "./axios.js";

export const getOringsRequest = (Espesor, Dinterno, Dexterno) => axios.get(`/queryOring/${Espesor, Dinterno, Dexterno}`);

export const createOringsRequest = (queryOring) => axios.post(`/queryOring`, queryOring); 

export const updateOringRequest = (queryOring) => axios.put(`/queryOring/${queryOring._id}`, queryOring); 

export const deleteOringRequest = (id) => axios.delete(`/queryOring/${id}`); 
