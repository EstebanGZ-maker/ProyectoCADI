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
    const [errors, setErrors ] = useState([]); 

//Obtenedor de la consulta
    const getQueryOring = async () => {
        const res = await getOringsRequest();
        console.log(res)
    }
//Creador de la consulta
    const createQueryOring = async (queryOring) => {

        try {
            const res = await createOringsRequest(queryOring)
            console.log(res.data); 
            setQueryOring(res.data); 

        } catch (error) {
            console.error(errors); 
        }
    }

 /*    const handleChange = (event) => {
        const numeroMaquina = event.target.value.toString(); 
        const copiaMaquinaSelect = [...queryOring]; 

        if (event.target.checked) {
            copiaMaquinaSelect.push(numeroMaquina); 
        } else {
            copiaMaquinaSelect = copiaMaquinaSelect.filter((valor) => valor !== numeroMaquina); 
        }
        setQueryOring(copiaMaquinaSelect);
    }; 
 
//use efect 

    useEffect(() => {
        const initialSelected = data.Tmaquina.map((valor) => valor.toString());
        setQueryOring(initialSelected); 
    }, [data.Tmaquina]); 
 */

    return (
        < QueryOringContext.Provider
            value = {{
                queryOring,
                createQueryOring,
                errors, 
                getQueryOring
                /* handleChange, */  
            }}
        >    
            {children}
        </ QueryOringContext.Provider>


    )
    
}

