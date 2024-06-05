import { React } from "react";
import { useForm } from "react-hook-form";
import { useQueryOring } from "../context/QueryContext";

function CreateOringPage() {

  const {register, handleSubmit, formState: {errors}, } = useForm();
  const { createQueryOring, errors: createQueryOringsError } = useQueryOring(); 

  const onSubmit = handleSubmit((data) => {

    data.Espesor = parseFloat(data.Espesor);
    data.Dexterno = parseFloat(data.Dexterno);
    data.Dinterno = parseFloat(data.Dinterno);
    data.PesoGr = parseFloat(data.PesoGr);
    data.PrecioProducir = parseFloat(data.PrecioProducir);
    data.PrecioVenta = parseFloat(data.PrecioVenta);
    /* data.Tmaquina.toString(data.Tmaquina); */
     
    console.log(data); 
    createQueryOring(data);
  }); 

  return (
    
    <div className=" mt-20 flex flex-col items-center data-container " >
      
     

      <div className="bg-zinc-200 max-w-lg w-full p-10 rounded-md contenedor " >
      {createQueryOringsError.map(( error , i) => (
        <div className=" bg-red-500 p-2 text-white text-center my-3 " key={i} >
          {error}
        </div>))
      }

      <h1 className="  text-gray-800 text-2xl font-bold text-center">SUBIR DATOS PARA ORINGS</h1>

      <form onSubmit={onSubmit} >

        {/*ID CADI */} 
        <div className="my-3 flex justify-center">
        <input 
          type="text" 
          placeholder="Codigo CADI" 
          {...register("ID", {required: true })} 
          autoFocus
          className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
        />
        </div>
          {
            errors.ID && <span className=" text-red-400 flex justify-center"> El ID es obligatorio </span>
          }

        {/*Descripción*/} 
        <div className="my-3 flex justify-center" >
          <input 
            type="text" 
            placeholder="Descripción" 
            {...register("description" , {required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            />
        </div>
            {
              errors.description && <span className="text-red-400 flex justify-center "> La descripción es obligatoria </span>
            }

        {/*codigo del Compuesto*/} 
        <div className="my-3 flex justify-center" >
          <input 
            type="text" 
            placeholder="Codigo del Compuesto" {
            ...register("codigoCompuesto" , {required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
          {
            errors.codigoCompuesto && <span className="text-red-400 flex justify-center"> El codigo del compuesto es obligatorio </span>
          }

        {/*Espesor*/}
        <div className="my-3 flex justify-center" >
          <input 
            type="text" 
            placeholder="Espesor" {
            ...register("Espesor" , {required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
            {
              errors.Espesor && <span className="text-red-400 flex justify-center"> El espesor es obligatorio </span>
            }    

        
        {/*Diametro externo*/}
        <div className="my-3 flex justify-center" >
          <input type="text" placeholder="Diametro Externo" {
            ...register("Dexterno" , {required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
            {
              errors.Dexterno && <span className="text-red-400 flex justify-center"> El Diametro Externo es obligatorio </span>
            }

        {/*Diametro interno*/}
        <div className="my-3 flex justify-center" >
          <input type="text" placeholder="Diametro Interno"{
            ...register("Dinterno", { required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }} 
          />
        </div>
            {
              errors.Dinterno && <span className="text-red-400 flex justify-center"> El Diametro Interno es obligatorio </span>
            }

        {/*Peso gr*/} 
        <div className="my-3 flex justify-center" >
          <input type="number" placeholder="Peso en gramos"{
            ...register("PesoGr")} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>

        {/*Precio Producir**/}
        <div className="my-3 flex justify-center" >
          <input type="number" placeholder="Precio Producir"{
            ...register("PrecioProducir")} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>

        {/*Precio Venta**/}
        <div className="my-3 flex justify-center" >
          <input type="number" placeholder="Precio Venta"{
            ...register("PrecioVenta")} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>

        {/*Id Plano*/}
        <div className="my-3 flex justify-center" >
          <input type="text" placeholder="Id Plano"{
            ...register("IdPlano", {required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
        </div>
            {
              errors.IdPlano && <span className="text-red-400 flex justify-center"> El identificador del plano es obligatorio </span>
            }

        {/*Id Molde*/}
        <div className="my-3 flex justify-center" >
          <input type="text" placeholder="Id Molde"{
            ...register("Idmolde", {required: true })} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }} 
          />
        </div>
            {
              errors.Idmolde && <span className="text-red-400 flex justify-center"> El identificador del molde es obligatorio </span>
            }

         {/*Tamaño molde*/}
         <div className="my-3 flex justify-center" >
          <input type="text" placeholder="Tamaño de molde"{
            ...register("Mtamaño")} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
          />
         </div>

          {/*Numero de cavidades*/}
          <div className="my-3 flex justify-center" >
            <input type="number" placeholder="Numero de cavidades"{
              ...register("Ncavidades")} 
              className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
              style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            />
          </div>

        {/*Numero de placas*/}
          <div className="my-3 flex justify-center" >
            <input type="number" placeholder="Numero de placas"{
              ...register("Nplacas")} 
              className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
              style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }} 
            />
          </div>

           {/*Tipo de distribución*/}
          <label htmlFor="Tdistribucion" className="my-3 flex justify-center"  >Tipo de distribución</label>
          <div className="my-3 flex justify-center" > 
            <select  {...register("Tdistribucion")} 
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

        {/*Tipo de maquina*/} 
        <div className="my-3 flex justify-center" >
        <input type="text" placeholder="Tipo de maquinas"{
          ...register("Tmaquina")} 
          className="w-medium bg-transparent text-gray-700 px-5 py-3 rounded-md my-2 "
          style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
        />
        </div>
   
        {/*Tipo de molde*/}
        <label htmlFor="Tmolde" className="my-3 flex justify-center" >Tipo de molde</label>
        <div className="my-3 flex justify-center" >
          <select  {...register("Tmolde")} 
            className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2 "
            style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}>
            <option value="C">C</option>
            <option value="E">E</option>
            <option value="Gotera">Gotera</option>
            <option value="Lineal">Lineal</option>
            <option value="Radial">Radial</option>
            <option value="Unitaria">Unitaria</option>
            <option value="No Registro">No Registro</option>
          </select>
        </div>

        {/*Tipo de procesos*/}
        <label htmlFor="TProceso" className="my-3 flex justify-center" >Tipo de Proceso</label>
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


        <div className="my-3 flex justify-center" >
          <button className=" w-medium bg-green-500 text-white px-4 py-2 rounded-md my-3" >
            Guardar
          </button> 
        </div>

      </form>
      </div>
    </div>
  )
}

export default CreateOringPage