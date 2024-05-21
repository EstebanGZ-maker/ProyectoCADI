import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {

  const { register, handleSubmit, formState: {errors}, } = useForm(); 
  const {signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data); 
  });

  useEffect(() =>  {
    if (isAuthenticated) navigate("/queryOring/query");
      
  }, [isAuthenticated]); 

  return (
    <div className=" contenedor "
    style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)" }}>
       
        <div className="bg-zinc-008000 max-w-md w-full p-10 rounded-md " >

        {signinErrors.map(( error , i) => (
            <div className=" bg-red-500 p-2 text-white text-center my-3 " key={i} >
              {error}
            </div>))
        }
        
        <h1 className=" text-gray-800 text-2xl font-bold text-center"  > Accede </h1>
        <h2 className=" text-gray-500 text-1xl font-bold text-center" > Iniciar sesión para continuar</h2> 

        <form onSubmit = {onSubmit} > 

            <input type="email" 
            { ...register("email", {required: true })} 
                className=" w-full bg-transparent text-gray-700 px-4 py-2 rounded-md my-3 "
                style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                placeholder="Email"
            /> 
            {
            errors.email && <span className="text-gray-700"> El correo es obligatorio </span>
            }     

            <input type="password" 
            { ...register("password", {required: true })} 
                className=" w-full bg-transparent text-gray-700 px-4 py-2 rounded-md my-3"
                style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                placeholder="Password"
            /> 
            {
            errors.password && <span className="text-gray-700"> La contraseña es obligatoria </span>
            }  

            <button type="submit" className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >Login</button>      
          </form>

          <p className="flex gap-x-2 justify-between text-gray-500 " >
            ¿No estas registrado? < Link to = "/register" className="text-sky-500 "> Registrarse </Link> 
          </p>

        </div>
      
    </div>
  );
}

export default LoginPage;
