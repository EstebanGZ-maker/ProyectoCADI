import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequet } from "../api/auth.js";
import Cookies from "js-cookie";


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
    const [loading, setLoading ] = useState(true); 

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data); 
            setUser(res.data)
            setIsAuthenticated(true)
            
        } catch (error) {
            setErros(error.response.data);  
        } 
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true)
            setUser(res.data)
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
                setErros([])
            }, 6000)
            return () => clearTimeout(timer)
        }
    }, [errors]); 

    useEffect(() => {
       async function checkLogin () {
        const cookies = Cookies.get();

        if(!cookies.token){
            setIsAuthenticated(false); 
            setLoading(false); 
            return setUser(null); 
        }

            try {
                const res = await verifyTokenRequet(cookies.token); 
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false); 
                    return;    
                } 
    
                setIsAuthenticated(true); 
                setUser(res.data);
                setLoading(false);  
            } catch (error) {
                setIsAuthenticated(false); 
                setUser(null); 
                setLoading(false); 
            }
             
        }
       checkLogin(); 
}, []); 

    return (
    <AuthContext.Provider 
    value={{ 
        signup,
        signin,
        user,
        isAuthenticated,
        errors, 
        loading
    }}>{children}
    </AuthContext.Provider>
    ); 
};
