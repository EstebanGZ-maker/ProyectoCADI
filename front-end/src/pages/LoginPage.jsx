import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {

  const { register, handleSubmit, formState: {errors}, } = useForm(); 
  const {signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data); 
  });

  return (
    <div className=" flex h-screen items-center justify-center " >
       
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md " >

        {signinErrors.map(( error , i) => (
            <div className=" bg-red-500 p-2 text-white text-center my-3 " key={i} >
              {error}
            </div>))
        }
        
        <h1 className=" text-white text-2xl font-bold text-center"  > Login </h1> 

        <form onSubmit = {onSubmit} > 

            <input type="email" 
            { ...register("email", {required: true })} 
                className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
                placeholder="Email"
            /> 
            {
            errors.email && <span className="text-white"> El correo es obligatorio </span>
            }     

            <input type="password" 
            { ...register("password", {required: true })} 
                className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
                placeholder="Password"
            /> 
            {
            errors.password && <span className="text-white"> La contraseña es obligatoria </span>
            }  

            <button type="submit" className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >Login</button>      
          </form>

          <p className="flex gap-x-2 justify-between text-white " >
            ¿No estas registrado? < Link to = "/register" className="text-sky-600 "> Registrarse </Link> 
          </p>

        </div>
      
    </div>
  );
}

export default LoginPage;
