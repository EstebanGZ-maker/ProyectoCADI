import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryOring } from '../context/QueryContext.jsx';

function QueryOringPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { getQueryOring, medidasOring, errors: getQueryOringErrors } = useQueryOring();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [calculatedValues, setCalculatedValues] = useState({ DI: '', DE: '', CS: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    await getQueryOring();
    setLoading(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.Espesor === undefined || data.Dinterno === undefined || data.Dexterno === undefined) {
        throw new Error('Todas las propiedades son obligatorias');
      }

      data.Espesor = parseFloat(data.Espesor);
      data.Dexterno = parseFloat(data.Dexterno);
      data.Dinterno = parseFloat(data.Dinterno);

      if (isNaN(data.Espesor) || isNaN(data.Dexterno) || isNaN(data.Dinterno)) {
        throw new Error('Todas las entradas deben ser números válidos');
      }

      setLoading(true);
      await getQueryOring(data);
      setLoading(false);
      setSuccessMessage('¡Consulta realizada con éxito!');
      setErrorMessage('');

    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  });

  const handleCalculate = () => {
    let DE, CS, DI;

    if (calculatedValues.DI !== '' && calculatedValues.CS !== '') {
      DE = parseFloat(calculatedValues.DI) + (2 * parseFloat(calculatedValues.CS));
    } else if (calculatedValues.DE !== '' && calculatedValues.DI !== '') {
      CS = (parseFloat(calculatedValues.DE) - parseFloat(calculatedValues.DI)) / 2;
    } else if (calculatedValues.DE !== '' && calculatedValues.CS !== '') {
      DI = parseFloat(calculatedValues.DE) - (2 * parseFloat(calculatedValues.CS));
    }

    setCalculatedValues({ 
      ...calculatedValues, 
      DE: DE !== undefined ? DE.toFixed(2) : calculatedValues.DE, 
      CS: CS !== undefined ? CS.toFixed(2) : calculatedValues.CS, 
      DI: DI !== undefined ? DI.toFixed(2) : calculatedValues.DI 
    });
  };

  const handleChange = (e) => {
    setCalculatedValues({ ...calculatedValues, [e.target.name]: e.target.value });
  };

  const resetCalculator = () => {
    setCalculatedValues({ DI: '', DE: '', CS: '' });
  };

  //Paginate

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = medidasOring.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-20 flex flex-col items-center data-container">
      <div className='bg-zinc-200 max-w-lg w-full p-10 rounded-md contenedor'>
        
        {errorMessage && 
          <div className='bg-red-500 p-2 text-white text-center my-3'>
            {errorMessage}
          </div>
        }

        {getQueryOringErrors && getQueryOringErrors.length > 0 && 
          (
          <div className='bg-red-500 p-2 text-white text-center my-3'>
            {getQueryOringErrors.join(', ')}
          </div>
          )
        }

        {successMessage && (
          <div className='bg-green-700 p-2 text-white text-center my-3'>
            {successMessage}
          </div>
        )}

        <h1 className='text-gray-800 text-2xl font-bold text-center'>CONSULTAR O-RINGS </h1>

        <form onSubmit={onSubmit}>
          <div className="my-3 flex justify-center">
            <input
              type="text"
              placeholder="Pon el W con punto: 5.4"
              autoFocus
              {...register("Espesor", { required: true })}
              className="w-medium bg-transparent text-gray-700 px-10 py-3 rounded-md my-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
            />
          </div>
          {errors.Espesor && <span className="text-red-400 flex justify-center">El Espesor es obligatorio</span>}

          <div className="my-3 flex justify-center">
            <input
              type="text"
              placeholder="Pon el I/D con punto: 2.1"
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
            <button type="submit">
              GENERAR CONSULTA
            </button>
          </div>
        </form>

        {/* CALCULADORA */}
        <div className="mt-3 px-2 flex flex-col items-left py-3 bg-zinc-100 rounded-md"
            style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
          <h2 className="text-gray-800 text-2xl font-bold text-center mb-3">
            Calcular valor de O-ring
          </h2>

          <div className="grid grid-cols-3 gap-9 py-3">
            <div className="flex flex-col items-start">
              <input 
                type="number" 
                id="DI" 
                name="DI" 
                value={calculatedValues.DI} 
                onChange={handleChange} 
                className="w-20 border border-gray-300 rounded-md px-2 py-1 text-black" 
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                placeholder='I/D'
              />
            </div>

            <div className="flex flex-col items-center">
              <input 
                type="number" 
                id="DE" 
                name="DE" 
                value={calculatedValues.DE} 
                onChange={handleChange} 
                className="w-20 border border-gray-300 rounded-md px-2 py-1 text-black" 
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                placeholder='O/D'
              />
            </div>

            <div className="flex flex-col items-end">
              <input 
                type="number" 
                id="CS" 
                name="CS" 
                value={calculatedValues.CS} 
                onChange={handleChange} 
                className="w-20 border border-gray-300 rounded-md px-2 py-1" 
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                placeholder='W'
              />
            </div>
          </div>
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

    <div className='flex justify-center' >
      <h1 className='text-gray-800 text-2xl font-bold text-center bg-zinc-200 w-80 py-2 ' 
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
        Resultado de la consulta
      </h1>
    </div>

    <div className="overflow-x-auto mt-2 " style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
      <table className="min-w-full bg-zinc-100 text-white mx-auto ">
        <thead>
          <tr className="bg-zinc-600">
            <th className="px-4 py-2">Descripción</th>
            <th className="px-4 py-2">Codigo</th>
            <th className="px-4 py-2">Compuesto</th>
            <th className="px-4 py-2">W m.m</th>
            <th className="px-4 py-2">I/D m.m</th>
            <th className="px-4 py-2">O/D m.m</th>
            <th className="px-4 py-2">ID mold</th>
            <th className="px-4 py-2">T Mold cm</th>
            <th className="px-4 py-2"># Cavidades</th>
            <th className="px-4 py-2"># Placas</th>
            <th className="px-4 py-2">Patin</th>
            <th className="px-4 py-2">Peso gr</th>
            <th className="px-4 py-2">Precio P</th>
            <th className="px-4 py-2">Tipo maquinas</th>
            <th className="px-4 py-2">Tipo molde</th>
            <th className="px-4 py-2">Tipo Proceso</th>
            <th className="px-4 py-2">Tipo distribución</th>
            {/* <th className="px-4 py-2">Identificador DB</th> */}
          </tr>
        </thead>
      <tbody>
        {currentItems.map((medida, i) => (
          <tr key={i} className="bg-zinc-500">
            <td className="border px-4 py-2">{medida.DESCRIPCIÓN}</td>
            <td className="border px-4 py-2">{medida.ID}</td>
            <td className="border px-4 py-2">{medida.CodigoCompu}</td>
            <td className="border px-4 py-2">{medida.Espesor}</td>
            <td className="border px-4 py-2">{medida.Dinterno}</td>
            <td className="border px-4 py-2">{medida.Dexterno}</td>
            <td className="border px-4 py-2">{medida.Idmolde}</td>
            <td className="border px-4 py-2">{medida.Mtamaño}</td>
            <td className="border px-4 py-2">{medida.Ncavidades}</td>
            <td className="border px-4 py-2">{medida.Nplacas}</td>
            <td className="border px-4 py-2">{medida.Patin}</td>
            <td className="border px-4 py-2">{medida.Pesogr}</td>
            <td className="border px-4 py-2">{medida.PrecioProducir}</td>
            <td className="border px-4 py-2">{medida.TMaquina}</td>
            <td className="border px-4 py-2">{medida.TMolde}</td>
            <td className="border px-4 py-2">{medida.TProceso}</td>
            <td className="border px-4 py-2">{medida.Tdistribucion}</td>
            {/* <td className="border px-4 py-2">{medida._id}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>

    Paginas 
    <ul className="flex justify-center mt-3">
    {Array(Math.ceil(medidasOring.length / itemsPerPage)).fill().map((_, i) => (
      <li key={i} className="cursor-pointer mx-1 bg-zinc-700 text-white px-3 py-1 rounded-md" onClick={() => paginate(i + 1)}>
        {i + 1}
      </li>
    ))}
    </ul>
    </div>

    </div>
  );
}

export default QueryOringPage;
