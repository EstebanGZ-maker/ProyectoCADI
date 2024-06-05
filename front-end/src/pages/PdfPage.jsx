import React, {useEffect, useState} from 'react'

function PdfPage() {

    const [id, setID] = useState("");
    const [file, setFile] = useState("");

    const submitImage =  async(e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append("ID", id);
      formData.append("file", file);
      console.log(e);
      };

  return (
    <div className="mt-20 flex flex-col items-center data-container" >
        <div className='bg-zinc-200 max-w-lg w-full p-10 rounded-md contenedor'>

            <h1 className='text-gray-800 text-2xl font-bold text-center' >Subir archivo PDF</h1>
            <form onSubmit={submitImage}>

                <div className=" my-3 flex justify-center" >
                <input type="text" placeholder='            ID del plano ' required
                    onChange={(e)=> setID(e.target.value)}
                    className="w-medium  bg-transparent text-gray-700 px-1 py-3 rounded-md my-1 "
                    style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                />
                </div>

                <br />
                    <input type="file"
                    className=" bg-transparent text-gray-700 px-5 py-3 rounded-md  "
                    style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }} />
                <br />

                    <div className=" my-6" >
                    <button type='submit'className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 font-bold  " >
                        SUBIR ARCHIVO
                    </button>
                    </div>

            </form>

            <form action="">
                <h1 className='text-gray-800 text-2xl font-bold text-center' >Buscar archivo PDF</h1>
                <div className=" my-3 flex justify-center" >

                <input type="text" placeholder='            ID del plano ' required 
                    onChange={(e)=> setFile(e.target.files[0])}
                    className="w-medium  bg-transparent text-gray-700 px-1 py-3 rounded-md my-1 "
                    style={{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)", border: "1px solid black" }}
                />
                </div>
                <br/>

                <div className='font-bold' >
                    <button type='submit'>
                        BUSCAR ARCHIVO
                    </button>
                </div>
        

            </form>
        </div>
    </div>
    
  )
}

export default PdfPage