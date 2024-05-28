import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryOring } from '../context/QueryContext.jsx';

function QueryOringPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { getQueryOring, medidasOring, errors: getQueryOringErrors } = useQueryOring();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    getQueryOring();
  }, []);

  const onSubmit = handleSubmit((data) => {
    data.Espesor = parseFloat(data.Espesor);
    data.Dexterno = parseFloat(data.Dexterno);
    data.Dinterno = parseFloat(data.Dinterno);
    getQueryOring(data);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medidasOring.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-20 flex justify-center data-container">
      <div className='bg-zinc-500 max-w-md w-full p-10 rounded-md'>
        {getQueryOringErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center my-3' key={i}>
            {error}
          </div>
        ))}

        <h1 className='text-gray-800 text-2xl font-bold text-center'>CONSULTAR</h1>

        <form onSubmit={onSubmit}>
          <div className="my-3">
            <input
              type="text"
              placeholder="Especifica el espesor con punto: 5.4"
              autoFocus
              {...register("Espesor", { required: true })}
              className="w-full bg-zinc-300 text-gray-800 px-4 py-2 rounded-md"
            />
            {errors.Espesor && <span className="text-white">El Espesor es obligatorio</span>}
          </div>

          <div className="my-3">
            <input
              type="text"
              placeholder="Especifica Diametro Interno con punto: 2.1"
              {...register("Dinterno", { required: true })}
              className="w-full bg-zinc-300 text-gray-800 px-4 py-2 rounded-md"
            />
            {errors.Dinterno && <span className="text-white">El Diametro interno es obligatorio</span>}
          </div>

          <div className="my-3">
            <input
              type="text"
              placeholder="Especifica Diametro Externo con punto: 3.6"
              {...register("Dexterno", { required: true })}
              className="w-full bg-zinc-300 text-gray-800 px-4 py-2 rounded-md"
            />
            {errors.Dexterno && <span className="text-white">El Diametro externo es obligatorio</span>}
          </div>

          <button type="submit" className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3">
            GENERAR CONSULTA
          </button>
        </form>

        <div className='bg-zinc-500 max-w-md w-full p-10 rounded-md'>
          <h1 className='text-gray-800 text-2xl font-bold text-center' style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
            Resultado de la consulta
          </h1>

          {currentItems.map((medida, i) => (
            <div key={i} className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-3">
              <span className='text-gray-800 text-2xl font-bold'>Datos de Oring</span>
              <ul>
              <li>Descripción: <span className="shadow underline"> {medida.DESCRIPCIÓN}</span></li>
              <li>Identificador: {medida.ID}</li>
              <li>Compuesto: <span className="shadow underline">{medida.CodigoCompu}</span></li>
              <li>Espesor: {medida.Espesor}</li>
              <li>Dimetro Interno: {medida.Dinterno}</li>
              <li>Diametro externo: {medida.Dexterno}</li>
              <li>Identificador Molde: {medida.Idmolde}</li>
              <li>{medida.Medidas}</li>
              <li>Tamaño molde: {medida.Mtamaño}</li>
              <li># Cavidades: {medida.Ncavidades}</li>
              <li># Placas: {medida.Nplacas}</li>
              <li>Patin: {medida.Patin}</li>
              <li>Peso gr: {medida.Pesogr}</li>
              <li>Precio P: {medida.PrecioProducir}</li>
              <li>Tipo maquinas: {medida.TMaquina}</li>
              <li>Tipo molde: {medida.TMolde}</li>
              <li>Tipo Proceso: {medida.TProceso}</li>
              <li>Tipo distribución: {medida.Tdistribucion}</li>
              <li>Identificador DB: {medida._id}</li>
              </ul>
            </div>
          ))}

          {/* Paginación */}
          <ul className="flex justify-center">
            {Array(Math.ceil(medidasOring.length / itemsPerPage)).fill().map((_, i) => (
              <li key={i} className="cursor-pointer mx-1" onClick={() => paginate(i + 1)}>
                {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default QueryOringPage;
