import React, { useEffect, useState, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { useQueryArandela } from "../context/ArandelaContext";

function ArandelasPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { getQueryArandela, medidasArandela, errors: getQueryArandelasErrors } = useQueryArandela(); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage] = useState(5); 
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [calculatedValues, setCalculatedValues] = useState({ DI: '', DE: '', CS: '' });
  const [notFound, setNotFound] = useState('');
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    fechData();
  }, []);

  const fechData = async () => {
    setLoading(true);
    await getQueryArandela();
    setLoading(false);
  };

  useEffect(() => {
      if (isDataFetched) {
        if (medidasArandela.length === 0) {
          setNotFound('No se hallaron Arandelas con esas medidas');
          setSuccessMessage('');
        } else {
          setSuccessMessage('¡Consulta realizada con éxito!');
          setNotFound('');
        }
        setIsDataFetched(false);
      }
    }, [medidasArandela, isDataFetched]);

  const onSubmit = handleSubmit( async (data) => {
    try {
      if (data.W === undefined || data.Dinterno === undefined || data.Dexterno === undefined ) {
         throw new Error ('Todas las propiedades son obligatorias');   
      }
      
      data.W = parseFloat(data.W); 
      data.Dexterno = parseFloat(data.Dexterno); 
      data.Dinterno = parseFloat(data.Dinterno); 

      if (isNaN(data.W) || isNaN(data.Dexterno) || isNaN(data.Dinterno) ) {
        throw new Error('Todas las entradas deben ser números válidos');
      }

      setLoading(true);
      await getQueryArandela(data);
      setLoading(false);
      setIsDataFetched(true);
      setErrorMessage('');

    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
      setNotFound('');
      setSuccessMessage('');
    }    
  });

  const handleCalculate = () => {
    let DE, CS, DI;

    if (calculatedValues.DI !== '' && calculatedValues.CS !== '' ) {
      DE = parseFloat(calculatedValues.DI) + (2 * parseFloat(calculatedValues.CS)); 
    } else if (calculatedValues.DE !== '' && calculatedValues.DI !== '' ) {
      CS = (parseFloat(calculatedValues.DE) - parseFloat(calculatedValues.DI)) / 2;     
    } else if (calculatedValues.DE !== '' && calculatedValues.CS !== '' ) {
      DI = parseFloat(calculatedValues.DE) - (2 * parseFloat(calculatedValues.CS)); 
    }

    setCalculatedValues({
      ...calculatedValues,
      DE: DE !== undefined ? DE.toFixed(2) : calculatedValues.DE,
      CS: CS !== undefined ? CS.toFixed(2) : calculatedValues.CS,
      DI: DI !== undefined ? DI.toFixed(2) : calculatedValues.DI,
    }); 
  };

    const handleChange = (e) => {
      setCalculatedValues({...calculatedValues, [e.target.name]: e.target.value });
    };

    const resetCalculator = () => {
      setCalculatedValues({ DI: '', DE: '', CS: '' })
    }; 
  
    //Paginate 

  const currentItems = useMemo(() => {
  const startIndex = (currentPage - 1) * itemsPerPage;
    return medidasArandela.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage, medidasArandela]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber); 

  return (
    <div className="mt-20 flex flex-col items-center data-container">
      <div className='bg-zinc-200 max-w-lg w-full p-10 rounded-md contenedor'>

        {errorMessage && 
        <div className='bg-red-500 p-2 text-white text-center my-3'>
          {errorMessage}
        </div>
        }
        
        {getQueryArandelasErrors && getQueryArandelasErrors.length > 0 && (
          <div className='bg-red-500 p-2 text-white text-center my-3'>
            {getQueryArandelasErrors.join(', ')}
          </div>
        )}

          {notFound && (
            <div className='bg-red-500 p-2 text-white text-center my-3'>
              {notFound}
            </div>
          )}


        {successMessage && (
          <div className='bg-green-700 p-2 text-white text-center my-3'>
            {successMessage}
          </div>
        )}

        <h1 className='text-gray-800 text-2xl font-bold text-center'>
          CONSULTAR ARANDELAS
        </h1>

        <form onSubmit={onSubmit}>
          <div className="my-3 flex justify-center">
            <input
              type="text"
              placeholder="Pon el W con punto: 5.4"
              autoFocus
              {...register("W", { required: true })}
              className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            />
          </div>
          {errors.W && <span className="text-red-400 flex justify-center">El Espesor es obligatorio</span>}

          <div className="my-3 flex justify-center">
            <input
              type="text"
              placeholder='Pon el I/D con punto: 2.1'
              {...register("Dinterno", { required: true })}
              className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            />
          </div>
          {errors.Dinterno && <span className="text-red-400 flex justify-center">El Diametro interno es obligatorio</span>}

          <div className="my-3 flex justify-center">
            <input
              type="text"
              placeholder="Pon el O/D con punto: 3.6"
              {...register("Dexterno", { required: true })}
              className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            />
          </div>
          {errors.Dexterno && <span className="text-red-400 flex justify-center">El Diametro externo es obligatorio</span>}

          <div className='font-bold py-3 m-4'>
            <button type="submit">GENERAR CONSULTA</button>
          </div>
        </form>

        <div className="mt-3 px-2 flex flex-col items-left  py-3 bg-zinc-100 rounded-md" 
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>

            <h2 className="text-gray-800 text-2xl font-bold text-center mb-3" > 
              Calcular valor de Arandela 
            </h2>
            
            <div className="grid grid-cols-3 gap-9 py-3">

              <div className="flex flex-col items-start">
    
                <input type="number" id="DI" name="DI" value={calculatedValues.DI} onChange={handleChange} 
                  className="w-20 border border-gray-300 rounded-md px-2 py-1 text-black " 
                  style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                  placeholder='    I/D'/>
              </div>

              <div className="flex flex-col items-center ">
              
                <input type="number" id="DE" name="DE" value={calculatedValues.DE} onChange={handleChange} 
                  className="w-20 border border-gray-300 rounded-md px-2 py-1 text-black" 
                  style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                  placeholder='    O/D'/>
              </div>

              <div className="flex flex-col  items-end ">
                
                <input type="number" id="CS" name="CS" value={calculatedValues.CS} onChange={handleChange} 
                  className="w-20 border border-gray-300 rounded-md px-2 py-1" 
                  style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                  placeholder='     W'/>
              </div>

            </div >

              <div className='flex justify-around gap-4 mt-4' >
                <button onClick={handleCalculate}
                  className='font-bold mt-4 bg-gray-500 text-white px-4 py-2 rounded-md w-30'>
                    Calcular
                </button>  

                <button onClick={resetCalculator} 
                  className='font-bold mt-4  bg-red-500 text-white px-4 py-2 rounded-md w-30'>
                    Limpiar 
                </button>
              </div>

        </div>

      </div>

      <div className='bg-zinc-100 max-w-7xl w-medium p-7 rounded-md mt-10'>
       
        <div className='flex justify-center'>
          <h1 className='text-gray-800 text-2xl font-bold text-center bg-zinc-200 w-80 py-2' 
              style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
            Resultado de la consulta
          </h1>
        </div>

        {medidasArandela.length === 0 && !loading && isDataFetched && (
        <div className='text-red-500 text-center my-3'>
          Productos no encontrados
         </div>
         )}

        <div className="overflow-x-auto mt-2" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
          <table className="min-w-full bg-zinc-100 text-white mx-auto">
            <thead>
              <tr className="bg-zinc-600">
                <th className="px-4 py-2">Descripción</th>
                <th className="px-4 py-2">Codigo</th>
                <th className="px-4 py-2">Compuesto</th>
                <th className="px-4 py-2">W m.m</th>
                <th className="px-4 py-2">O/D m.m</th>
                <th className="px-4 py-2">I/D m.m</th>
                <th className="px-4 py-2">Peso gr</th>
                <th className="px-4 py-2">TMold cm</th>
                <th className="px-4 py-2"># Cavidades</th>
                <th className="px-4 py-2"># Placas</th> 
                <th className="px-4 py-2">Patin</th>
                <th className="px-4 py-2">Distribución</th>
                <th className="px-4 py-2">Linea</th>
                <th className="px-4 py-2">Maquinas</th>
                <th className="px-4 py-2">Tipo Proceso</th>
                <th className="px-4 py-2">PDF</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((medida, i) => (
                <tr key={i} className="bg-zinc-500 text-center">
                  <td className="border px-4 py-2">{medida.Description}</td>
                  <td className="border px-4 py-2">{medida.ID}</td>
                  <td className="border px-4 py-2">{medida.Compuesto}</td>
                  <td className="border px-4 py-2">{medida.W}</td>
                  <td className="border px-4 py-2">{medida.Dexterno}</td>
                  <td className="border px-4 py-2">{medida.Dinterno}</td>
                  <td className="border px-4 py-2">{medida.Peso}</td>
                  <td className="border px-4 py-2">{medida.MoldTamaño}</td>
                  <td className="border px-4 py-2">{medida.Ncavidades}</td>
                  <td className="border px-4 py-2">{medida.Nplacas}</td> 
                  <td className="border px-4 py-2">{medida.Patin}</td>
                  <td className="border px-4 py-2">{medida.Distribucion}</td> 
                  <td className="border px-4 py-2">{medida.Linea}</td>
                  <td className="border py-2">{medida.Tmaquina}</td>
                  <td className="border px-4 py-2">{medida.TProceso}</td>
                  <td className="border py-2">{medida.PDF}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="flex justify-center mt-3">
          {Array.from({ length: Math.ceil(medidasArandela.length / itemsPerPage) }, (_, i) => (
            <li key={i} className="cursor-pointer mx-1 bg-zinc-700 text-white px-3 py-1 rounded-md" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </li>
              ))}
              </ul>
          </div>

    </div>
  ); /* del return */
};

export default ArandelasPage