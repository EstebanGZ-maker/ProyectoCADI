import { createContext, useContext, useEffect, useState } from "react";
import { createOringsRequest, getOringsRequest } from "../api/queryOring.js";


const QueryOringContext = createContext(); 

export const useQueryOring = () => {
    const context = useContext(QueryOringContext); 

    if (!context) {
        throw new Error( "useQueryOring must be used within a QueryOringProvider" );
    }

    return context; 
}; 

export const QueryOringProvider = ({children}) => {
    const [queryOring, setQueryOring] = useState([]); 
    const [medidasOring, setMedidasOring ] = useState([]); 
    const [isAuthenticated, setIsAuthenticated ] = useState(false);
    const [errors, setErrors ] = useState([]); 
    const [loading, setLoading] = useState(true);

//Creador de la consulta
    const createQueryOring = async (queryOring) => {

        try {
            const res = await createOringsRequest(queryOring)
            console.log(res.data); 
            setQueryOring(res.data); 

        } catch (error) {
            setErrors([error.response.data.message])
            console.log(error.response.status);
            console.log(error.toJSON());
        }
    }

    //Obtenedor de la consulta
    const getQueryOring = async ( medidasOring) => {
        if (!medidasOring) {
            console.error("Error: Medidas de oring indefinidas"); 
            return; 
        }
        try {
            const res = await getOringsRequest(medidasOring) 
            console.log(res.data.message); 
            console.log(res.data.result); 
            setMedidasOring(res.data.result); 
            setIsAuthenticated(true)

        } catch (error) {
            setErrors([error.response.status])
            console.log(error.response.status);
            console.log(error.toJSON());
            setErrors(error.response.status)
        }
    }

        useEffect(() => {
            if (errors.length > 0) {
                const timer = setTimeout(() => {
                    setErrors([])
                }, 6000)
                return () => clearTimeout(timer)
            }
        },[errors]); 

    return (
        < QueryOringContext.Provider
            value = {{
                createQueryOring,
                getQueryOring,
                queryOring,
                medidasOring,
                isAuthenticated, 
                loading, 
                errors, 
            }}
        >    
            {children}
        </ QueryOringContext.Provider>
    )
}

