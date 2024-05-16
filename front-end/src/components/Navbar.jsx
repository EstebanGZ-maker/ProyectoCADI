import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

function Navbar() {
    const  { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg' >
        <Link to={"/"} >
            <h1 className='text-2xl font-bold text-white ' >Query products manager</h1>
        </Link>
            <ul className='felx gap-x-2' >
                {isAuthenticated ? (
                <>
                    <li className='text-2xl font-bold text-white ' >
                        Bienvenido {user.username}
                    </li>
                    <li>
                        <Link to={`/queryOring/query`} className='text-white ' >Buscar Orings</Link>
                    </li>
                    <li>
                        <Link to={`/queryOring`} className='text-white ' >Crear un nuevo Oring</Link>
                    </li>
                    <li>
                        <Link to={`/viewQueryOring`} className='text-white ' >Visualizar consulta</Link>
                    </li>
                    <li>
                        <Link to={`/`} 
                        onClick={() => {
                            logout(); 
                        }} 
                        className='text-white ' >Cerrar sesión</Link>
                    </li>
                </>

                ) : (

                <>
                    <li>
                        <Link to={`/login`} className='text-white ' >Login</Link>
                    </li>
                    <li>
                        <Link to={`/register`} className='text-white ' >Registarte</Link>
                    </li>
                </>

                )}
            </ul>

    </nav>
  )
}

export default Navbar