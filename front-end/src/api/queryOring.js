import axios from "./axios.js";

export const  getOringsRequest =  (medidasOring) => {
 
        return axios.get(`/api/queryOring/query`, { params: medidasOring });  
    }; 

export const createOringsRequest = (queryOring) => axios.post(`/queryOring`, queryOring); 

export const updateOringRequest = (queryOring) => axios.put(`/queryOring/${queryOring._id}`, queryOring); 

export const deleteOringRequest = (id) => axios.delete(`/queryOring/${id}`); 


