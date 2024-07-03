import  { useForm }  from "react-hook-form"; 
import { useAuth } from "../context/AuthContext.jsx";


function RegisterPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const {signup , errors: registerErrors  } = useAuth(); 
    
    const onSubmit = handleSubmit(async (values) => {
      signup(values); 
    });   

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

        <label htmlFor="roles">Seleccióna un rol: </label>
        <select  {...register("roles")} 
          className=" w-full bg-transparent text-gray-700 px-4 py-2 rounded-md my-3 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          >
          <option value="User">Usuario</option>
          <option value="admin">Administrador</option>
        </select>

        <button type="submit" className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 font-bold " >Registrar Usuario nuevo </button>      
      </form>

      
    </div>

  </div>   
    
  )
}

export default RegisterPage;