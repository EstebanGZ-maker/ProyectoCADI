import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth.js";
import { set } from "mongoose";


export const AuthContext = createContext();

export const useAuth = ( ) => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Useth must be used within an AuthProvider")
    }
    return context; 
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated ] = useState(false); 
    const [errors, setErros] = useState([]); 


    const signup = async (user) => {
        try {
            
            const res = await registerRequest(user);
        console.log(res.data);(res.data);
        setUser(res.data);
        setIsAuthenticated(true);

        } catch (error) {
            setErros(error.response.data);  
        } 
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErros(error.response.data)
            }
            setErros([error.response.data.message])
        }
    } 

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                set([])
            }, 8000)
            return () => clearTimeout(timer)
        }
    }, [errors]); 

    return (<AuthContext.Provider 
    value={{ 
        signup,
        signin,
        user,
        isAuthenticated,
        errors
    }}>{ children }
    </AuthContext.Provider>
    ); 
};
