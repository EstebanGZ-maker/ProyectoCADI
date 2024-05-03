import { React } from 'react'
import { useForm } from "react-hook-form";
import { useQueryOring } from "../context/QueryContext.jsx";
import { Link } from "react-router-dom";


function QueryOringPage() {

  const{ register, handleSubmit, formState: {errors}, } = useForm(); 
  const { getQueryOring, erros: getQueryOringError } = useQueryOring(); 

  const onSubmit = handleSubmit((data) => {

    data.Espesor = parseFloat(data.Espesor);
    data.Dexterno = parseFloat(data.Dexterno);
    data.Dinterno = parseFloat(data.Dinterno);

    console.log(data); 
    getQueryOring(data); 
  }); 
  
  return (
    <div className="  flex h-screen items-center justify-center " >

      {/* {getQueryOringError.map(( error , i) => (
              <div className=" bg-red-500 p-2 text-white text-center my-3 " key={i} >
                {error}
              </div>))
            } */}

        <div className=' bg-zinc-800 max-w-md w-full p-10 rounded-md ' >

          <h1 className='  text-white text-2xl font-bold text-center' >INGRESA LAS MEDIDAS DEL ORING</h1>

          <form onSubmit = {onSubmit}>

{/* ESPESOR */}
            <input 
              type="text" 
              placeholder = "Especifica el espesor del oring con un punto entre los numeros (.) "
              {...register( "Espesor", {require: true })} 
              className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            /> 
            {
              errors.Espesor && <span className="text-white" > El Espesor es obligatorio</span>
            }

{/* D EXTERNO */}
            <input 
              type="text" 
              placeholder = "Especifica el Diametro externo del oring con un punto entre los numeros (.) "
              {...register( "Dexterno", {require: true })} 
              className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            /> 
            {
              errors.Dexterno && <span className="text-white" > El Diametro externo es obligatorio</span>
            }

{/* D INTERNO */}
            <input 
              type="text" 
              placeholder = "Especifica el Diametro interno del oring con un punto entre los numeros (.) "
              {...register( "Dinterno", {require: true })} 
              className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
            /> 
            {
              errors.Dinterno && <span className="text-white" > El Diametro interno es obligatorio</span>
            }

            <button type="submit" className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >Consultar</button>      

            <p className="flex gap-x-2 justify-between text-white " >
             < Link to = "/HomePage" className="text-sky-600  text-center "> Regresar a la Pagina Principal </Link> 
          </p>{/* esa ruta del home esta mala usar la del Appjsx */}

          </form>
        </div>
    </div>
  )
}

export default QueryOringPage