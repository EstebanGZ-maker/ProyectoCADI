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
    const [errors, setErrors ] = useState([]); 


//Creador de la consulta
    const createQueryOring = async (queryOring) => {

        try {
            const res = await createOringsRequest(queryOring)
            console.log(res.data); 
            setQueryOring(res.data); 

        } catch (error) {
            console.error(errors); 
            setErrors(error.response.data)
        }
    }

    //Obtenedor de la consulta
    const getQueryOring = async (medidasOring) => {

        try {
            const res = await getOringsRequest(medidasOring)
            console.log(res.data); 
            setMedidasOring(res.data); 

        } catch (error) {
            console.error(errors);
            setErros([error.response.data.message])
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
                medidasOring,
                createQueryOring,
                getQueryOring,
                errors, 
                /* handleChange, */  
            }}
        >    
            {children}
        </ QueryOringContext.Provider>


    )
    
}

