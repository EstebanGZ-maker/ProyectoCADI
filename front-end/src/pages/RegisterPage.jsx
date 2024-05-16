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

  <div className=" flex h-screen items-center justify-center ">
        
    <div className=" bg-zinc-800 max-w-md p-10 rounded-md " >
      
      {registerErrors.map((error , i) => (
        <div className=" bg-red-500 p-2 text-white text-center" key={i} >
          {error}
        </div>   
      )) 
      }
        
        <h1 className=" text-white text-2xl font-bold text-center"  > Registro de usuarios </h1>

      <form onSubmit = {onSubmit}>
        <input type="text" { ...register(`username`, { required: true })}
            className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 "
            placeholder="Username"
        /> 
        {
        errors.username && <span className="text-white"> El nombre de usuario es obligatorio </span>
        }    

        <input type="email" { ...register("email", {required: true })} 
            className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            placeholder="Email"
        /> 
        {
        errors.email && <span className="text-white"> El correo es obligatorio </span>
        }     

        <input type="password" { ...register("password", {required: true })} 
            className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            placeholder="Password"
        /> 
        {
        errors.password && <span className="text-white"> La contraseña es obligatoria </span>
        }  

        <button type="submit" className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >Register</button>      
      </form>

      <p className="flex gap-x-2 justify-between text-white " >
            ¿Ya tienes una cuenta?{""} < Link to = "/login" className="text-sky-600 "> Login </Link> 
      </p>
      
    </div>

  </div>   
    
  )
}

export default RegisterPage;

