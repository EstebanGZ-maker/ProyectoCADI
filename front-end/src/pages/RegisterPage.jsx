import  { useForm }  from "react-hook-form"; 
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signup ,isAuthenticated, errors: registerErrors  } = useAuth(); 
    const navigate = useNavigate(); 
    
    const onSubmit = handleSubmit(async (values) => {
      signup(values); 
    });   
    
    useEffect(() => {
      if (isAuthenticated) navigate("/queryOring/query"); 
    }, [isAuthenticated]); 

  return (

  <div className=" contenedor ">
        
    <div className=" bg-zinc-008000 max-w-md w-full p-10 rounded-md " >
      
      {registerErrors.map((error , i) => (
        <div className=" bg-red-500 p-2 text-white text-center" key={i} >
          {error}
        </div>   
      )) 
      }
        
        <h1 className="text-gray-800 text-2xl font-bold text-center"  > Crear una cuenta nueva </h1>
        <p className="flex gap-x-2 justify-between text-gray-500 " >
            ¿Ya estas registrado? {""} < Link to = "/login" className="text-sky-500 "> Accede </Link> 
      </p>

      <form onSubmit = {onSubmit}>
        <input type="text" { ...register(`username`, { required: true })}
            className=" w-full bg-transparent text-gray-700 px-4 py-2 rounded-md my-3 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            placeholder="Username"
        /> 
        {
        errors.username && <span className="text-gray-700"> El nombre de usuario es obligatorio </span>
        }    

        <input type="email" { ...register("email", {required: true })} 
            className=" w-full bg-transparent text-gray-700 px-4 py-2 rounded-md my-3"
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            placeholder="Email"
        /> 
        {
        errors.email && <span className="text-gray-700"> El correo es obligatorio </span>
        }     

        <input type="password" { ...register("password", {required: true })} 
            className=" w-full bg-transparent text-gray-700 px-4 py-2 rounded-md my-3"
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            placeholder="Password"
        /> 
        {
        errors.password && <span className="text-gray-800"> La contraseña es obligatoria </span>
        }  

        <button type="submit" className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >Register</button>      
      </form>

      
    </div>

  </div>   
    
  )
}

export default RegisterPage;



