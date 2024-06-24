import {  createContext, useContext, useEffect, useState } from "react";
import { createArandelasRequest, getArandelaRequest } from "../api/queryArandelas.js";


const QueryArandelaContext = createContext(); 

export const useQueryArandela = () => {
    const context = useContext(QueryArandelaContext); 

    if (!context) {
        throw new Error(" useQueryArandela must be used whitin a QueryArandelaProvider ")
    }

    return context; 
}; 

export const QueryArandelaProvider = ({children}) => {

    const [createArandela, setCreateArandela] = useState([]);
    const [medidasArandela, setMedidasArandela] = useState([]); 
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const [errors, setErrors] = useState([]);

    //CREADOR DE ARANDELAS 

    const createQueryArandela = async (createArandela) => {
        
        try { 
            const res = await createArandelasRequest(createArandela)
            console.log(res.data);
            setCreateArandela(res.data); 
            
        } catch (error) {
            setErrors([error.response.data.message]);
            console.log(error.response.data);            
            console.log(error.toJSON()); 
        }
    }; 

    //OBTENEDOR DE CONSULTA 

    const getQueryArandela = async (medidasArandela) => {

        if (!medidasArandela) {
            console.log("Error: Medidas de Arandelas indefinidas");
            return; 
        }
        try {
            const res = await getArandelaRequest(medidasArandela)
            console.log(res.data.message);
            console.log(res.data.result);
            setMedidasArandela(res.data.result); 
            setIsAuthenticated(true);

        } catch (error) {
            setErrors([error.response.status]); 
            console.log(error.response.status);
            console.log(error.toJSON());
            setErrors(error.response.status);
        }
    }; 

        useEffect(() => {
            if (errors.length > 0) {
            const timer = setTimeout(() => {
                    setErrors([])
                }, 6000)
                return() => clearTimeout(timer)
            }
        },[errors]); 

    return(
        <QueryArandelaContext.Provider
            value={{
                createQueryArandela,
                getQueryArandela, 
                createArandela,
                medidasArandela,
                isAuthenticated,
                errors
            }}    
        >
            {children}
        </QueryArandelaContext.Provider>

    )
};   
