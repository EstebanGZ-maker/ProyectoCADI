import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQueryArandela } from "../context/ArandelaContext.jsx";

function CreateArandelasPage() {

  const { register, handleSubmit, formState: {errors} } = useForm(); 
  const { createQueryArandela, errors: createQueryArandelaErrors } = useQueryArandela(); 
  const [ successMessage, setsuccessMessage ] = useState('') 
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit( async (data) => {
    try {
      if (isNaN(data.W) || isNaN(data.Dexterno) || isNaN(data.Dinterno) || isNaN(data.ID) ) {
        throw new Error('Todas las entradas deben ser números válidos');
      }
      
      data.ID = parseFloat(data.ID);
      data.W = parseFloat(data.W);
      data.Dexterno = parseFloat(data.Dexterno);
      data.Dinterno = parseFloat(data.Dinterno); 

      setLoading(true);
      await createQueryArandela(data);
      setLoading(false);
      setsuccessMessage('¡Productos creados con éxito!')
      setErrorMessage('');

    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
      setsuccessMessage(''); 
    }
  });

  return (
    <div className=" mt-20 flex flex-col items-center data-container " > 
      <div className="bg-zinc-200 max-w-lg w-full p-10 rounded-md contenedor " >

      {errorMessage && 
          <div className='bg-red-500 p-2 text-white text-center my-3'>
            {errorMessage}
          </div>
        }

      {successMessage && (
          <div className='bg-green-700 p-2 text-white text-center my-3'>
            {successMessage}
          </div>
        )}

        <h1 className="  text-gray-800 text-2xl font-bold text-center" >SUBIR DATOS DE LAS ARANDELAS</h1>

      <form onSubmit={onSubmit}>
        {/* ID */}
        <div className="my-3 flex justify-center" >
          <input 
          type="number" 
          placeholder='Codigo CADI'
          {...register("ID", { required: true})}
          autoFocus
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.ID && <span className='text-red-400 flex justify-center' > El ID es obligatorio </span> }

       {/* Description */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Descripción'
          {...register("Description", { required: true})}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.Description && <span className='text-red-400 flex justify-center' > La descripción es obligatoria </span> }

          {/* Compuesto */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Compuesto'
          {...register("Compuesto", { required: true})}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.Compuesto && <span className='text-red-400 flex justify-center' > El compuesto es obligatorio </span> }

          {/* W */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Wight'
          {...register("W", { required: true})}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.W && <span className='text-red-400 flex justify-center' > El espesor es obligatorio </span> }

          {/* Dinterno */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Diametro interno'
          {...register("Dinterno", { required: true})}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.Dinterno && <span className='text-red-400 flex justify-center' > El Diametro interno es obligatorio </span> }

        {/* Dexterno */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Diametro externo'
          {...register("Dexterno", { required: true})}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.Dexterno && <span className='text-red-400 flex justify-center' > El Diametro externo es obligatorio </span> }

        {/* Peso */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Peso'
          {...register("Peso")}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>

          {/* MoldTamaño */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Tamaño de molde'
          {...register("MoldTamaño")}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        
          {/* Ncavidades */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Numero de cavidades'
          {...register("Ncavidades")}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
    
          {/* Nplacas */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Numero de placas'
          {...register("Nplacas")}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>

        {/*Distribucion*/}
        <label htmlFor="Distribucion" className="my-3 flex justify-center"  >Tipo de distribución</label>
          <div className="my-3 flex justify-center" > 
            <select  {...register("Distribucion")} 
              className="w-medium bg-transparent text-gray-700 px-1 py-3 rounded-md my-2 "
              style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}>
              <option value="C">C</option>
              <option value="E">E</option>
              <option value="G">G</option>
              <option value="L">L</option>
              <option value="R">R</option>
              <option value="U">U</option>
              <option value="No Registro">No Registro</option>
            </select>
          </div>

          {/*Patin*/}
        <label htmlFor="Patin" className="my-3 flex justify-center" >¿Lleva patín?</label>
        <div className="my-3 flex justify-center" >
          <select  {...register("Patin")} 
            className="w-medium bg-transparent text-gray-700 px-8 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}>
            <option value="SI">SI</option>
            <option value="NO">NO</option>
          </select>
        </div>

        {/*Linea*/}
        <label htmlFor="Linea" className="my-3 flex justify-center" >Linea del producto</label>
        <div className="my-3 flex justify-center" >
          <select  {...register("Linea")} 
            className="w-medium bg-transparent text-gray-700 px-8 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}>
            <option value="AL">AL</option>
            <option value="FI">FI</option>
            <option value="GR">GR</option>
            <option value="PV">PV</option>
            <option value="No Registro">No Registro</option>

          </select>
        </div>

        {/*Tipo de maquina*/} 
        <div className="my-3 flex justify-center" >
        <input type="text" placeholder="Tipo de maquinas"{
          ...register("Tmaquina")} 
          className="w-medium bg-transparent text-gray-700 px-5 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
        />
        </div>

        {/*Tipo de procesos*/}
        <label htmlFor="TProceso" className="my-3 flex justify-center"
        typeof='string'
        >Tipo de Proceso</label>
        <div className="my-3 flex justify-center" >
          <select  {...register("TProceso")} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}>
            <option value="Inyección">Inyección</option>
            <option value="Prensado">Prensado</option>
            <option value="Transferencia">Transferencia</option>
            <option value="Extrusion">Extrusión</option>
            <option value="No hay registro">No hay registro</option>
          </select>
        </div>

        {/* PDF */}
       <div className="my-3 flex justify-center" >
          <input 
          type="text" 
          placeholder='Nombre del plano '
          {...register("PDF", { required: true})}
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
        {errors.PDF && <span className='text-red-400 flex justify-center' > El rango del PDF es obligatorio </span> }
        
          {createQueryArandelaErrors.map(( error, i) =>(
          <div className=" bg-red-500 p-2 text-white text-center my-3 " key={i} >
            {error}
          </div>))
          }
          
        <div className="my-3 flex justify-center" >
          <button className=" w-medium bg-green-500 text-white px-4 py-2 rounded-md my-3" >
            Guardar
          </button> 
        </div>

      </form>

      </div>
    </div>
  ); /* Del return */
};

export default CreateArandelasPage
