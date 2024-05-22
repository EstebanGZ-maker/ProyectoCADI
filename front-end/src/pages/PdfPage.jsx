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
    <div className="mt-20 flex justify-center data-container">
        <div className='bg-zinc-500 max-w-md w-full p-10 rounded-md'>

            <h1 className='text-gray-800 text-2xl font-bold text-center' >Subir archivo PDF</h1>
            <form onSubmit={submitImage}>
                <input type="text" placeholder='ID' required
                onChange={(e)=> setID(e.target.value)}
                className="my-3 w-full bg-zinc-300 text-gray-800 px-4 py-2 rounded-md "

                />
                <br />
                <input type="file"
                className="my-3 w-full bg-zinc-300 text-gray-800 px-4 py-2 rounded-md " />
                <br />
                <button type='submit'className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 " >
                    SUBIR ARCHIVO
                </button>


            </form>

            <form action="">
                <h1 className='text-gray-800 text-2xl font-bold text-center' >Buscar archivo PDF</h1>
                <input type="text" placeholder='ID' required 
                onChange={(e)=> setFile(e.target.files[0])}
                className="my-3 w-full bg-zinc-300 text-gray-800 px-4 py-2 rounded-md "
                />
                <br />
                <button type='submit' className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3 ">
                    BUSCAR ARCHIVO
                </button>
        

            </form>
        </div>
    </div>
    
  )
}

export default PdfPage