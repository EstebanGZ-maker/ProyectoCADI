import { React } from "react";
import { useForm } from "react-hook-form";
import { useQueryOring } from "../context/QueryContext";
import { useNavigate } from "react-router-dom";

function CreateOringPage() {

  const {register, handleSubmit, formState: {errors}, } = useForm();
  const { createQueryOring, errors: createQueryOringsError } = useQueryOring(); 
  const navigate = useNavigate(); 

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
    /* navigate("/viewCreateOring") */
  }); 

  return (
    
    <div className="  items-center justify-center " >
     
      {createQueryOringsError.map(( error , i) => (
        <div className=" bg-red-500 p-2 text-white text-center my-3 " key={i} >
          {error}
        </div>))
      }

      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-none" >

      <h1 className=" text-center text-white ">SUBIR DATOS PARA ORINGS</h1>

      <form onSubmit={onSubmit}>


        {/*ID CADI */} 
        <input 
          type="text" 
          placeholder="ID" 
          {...register("ID", {required: true })} 
          autoFocus
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        />
          {
            errors.ID && <span className="text-white"> El ID es obligatorio </span>
          }

        {/*Descripción*/} 
        <input 
          type="text" 
          placeholder="Descripción" 
          {...register("description" , {required: true })} 
          autoFocus
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        />
          {
            errors.description && <span className="text-white"> La descripción es obligatoria </span>
          }

        {/*codigo del Compuesto*/} 

        <input 
          type="text" 
          placeholder="Codigo del Compuesto" {
          ...register("codigoCompuesto" , {required: true })} 
          autoFocus
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        />
        {
          errors.codigoCompuesto && <span className="text-white"> El codigo del compuesto es obligatorio </span>
        }

        {/*Espesor*/}

        <input 
          type="text" 
          placeholder="Espesor" {
          ...register("Espesor" , {required: true })} 
          autoFocus
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        />
          {
            errors.Espesor && <span className="text-white"> El espesor es obligatorio </span>
          }    
        
        {/*Diametro externo*/}

        <input type="text" placeholder="Diametro Externo" {
          ...register("Dexterno" , {required: true })} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        />
          {
            errors.Dexterno && <span className="text-white"> El Diametro Externo es obligatorio </span>
          }

        {/*Diametro interno*/}

        <input type="text" placeholder="Diametro Interno"{
          ...register("Dinterno", { required: true })} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />
          {
            errors.Dinterno && <span className="text-white"> El Diametro Interno es obligatorio </span>
          }

        {/*Peso gr*/} 
        <input type="number" placeholder="Peso en gramos"{
          ...register("PesoGr")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

        {/*Precio Producir**/}

        <input type="number" placeholder="Precio Producir"{
          ...register("PrecioProducir")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

        {/*Precio Venta**/}

        <input type="number" placeholder="Precio Venta"{
          ...register("PrecioVenta")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

        {/*Id Plano*/}

        <input type="text" placeholder="Id Plano"{
          ...register("IdPlano", {required: true })} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />
          {
            errors.IdPlano && <span className="text-white"> El identificador del plano es obligatorio </span>
          }

        {/*Id Molde*/}

        <input type="text" placeholder="Id Molde"{
          ...register("Idmolde", {required: true })} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />
          {
            errors.Idmolde && <span className="text-white"> El identificador del molde es obligatorio </span>
          }

         {/*Tamaño molde*/}

         <input type="text" placeholder="Tamaño de molde"{
          ...register("Mtamaño")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

        {/*Numero de cavidades*/}

        <input type="number" placeholder="Numero de cavidades"{
          ...register("Ncavidades")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

        {/*Numero de placas*/}

        <input type="number" placeholder="Numero de placas"{
          ...register("Nplacas")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

        {/*Tipo de distribución*/}

        <label htmlFor="Tdistribucion">Tipo de distribución</label>
        <select  {...register("Tdistribucion")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 ">
          <option value="C">C</option>
          <option value="E">E</option>
          <option value="G">G</option>
          <option value="L">L</option>
          <option value="R">R</option>
          <option value="U">U</option>
          <option value="No Registro">No Registro</option>

        </select>

        {/*Patin*/}

        <label htmlFor="Patin">¿Lleva patín?</label>
        <select  {...register("Patin")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 ">
          <option value="SI">SI</option>
          <option value="NO">NO</option>
        </select>

        {/*Tipo de maquina*/} 

        <input type="text" placeholder="Tipo de maquinas"{
          ...register("Tmaquina")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " 
        />

       {/* <div className="checkbox-group text-center text-white ">
      <label htmlFor="Tmaquina">Selecciona las máquinas: </label>
        <div className="checkbox-row"> 
          <label htmlFor="1">1</label>
          <input type="checkbox" value={1} id="1" {...register("Tmaquina", {})} className="mr-4" />
          <label htmlFor="2">2</label>
          <input type="checkbox" value={2} id="2" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="3">3</label>
          <input type="checkbox" value={3} id="3" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="4">4</label>
          <input type="checkbox" value={4} id="4" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="5">5</label>
          <input type="checkbox" value={5} id="5" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="6">6</label>
          <input type="checkbox" value={6} id="6" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="7">7</label>
          <input type="checkbox" value={7} id="7" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="8">8</label>
          <input type="checkbox" value={8} id="8" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="9">9</label>
          <input type="checkbox" value={9} id="9" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="10">10</label>
          <input type="checkbox" value={10} id="10" {...register("Tmaquina", { } )} className="mr-4" />
          <label htmlFor="11">11</label>
          <input type="checkbox" value={11} id="11" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="12">12</label>
          <input type="checkbox" value={12} id="12" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="13">13</label>
          <input type="checkbox" value={13} id="13" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="14">14</label>
          <input type="checkbox" value={14} id="14" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="15">15</label>
          <input type="checkbox" value={15} id="15" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="16">16</label>
          <input type="checkbox" value={16} id="16" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="17">17</label>
          <input type="checkbox" value={17} id="17" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="18">18</label>
          <input type="checkbox" value={18} id="18" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="19">19</label>
          <input type="checkbox" value={19} id="19" {...register("Tmaquina", { })} className="mr-4" />
          <label htmlFor="20">20</label>
          <input type="checkbox" value={20} id="20" {...register("Tmaquina", { })} className="mr-4" />
        </div>
  
      </div> */}
   
        {/*Tipo de molde*/}

        <label htmlFor="Tmolde">Tipo de molde</label>
        <select  {...register("Tmolde")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 ">
          <option value="C">C</option>
          <option value="E">E</option>
          <option value="Gotera">Gotera</option>
          <option value="Lineal">Lineal</option>
          <option value="Radial">Radial</option>
          <option value="Unitaria">Unitaria</option>
          <option value="No Registro">No Registro</option>

        </select>

        {/*Tipo de procesos*/}

        <label htmlFor="TProceso">Tipo de Proceso</label>
        <select  {...register("TProceso")} 
          className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 ">
          <option value="Inyección">Inyección</option>
          <option value="Prensado">Prensado</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Extrusion">Extrusión</option>
          <option value="No hay registro">No hay registro</option>

        </select>

        
        <button className=" w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >
          Guardar
        </button> 

      </form>



        
      </div>
    </div>
  )
}

export default CreateOringPage