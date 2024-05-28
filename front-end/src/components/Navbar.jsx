import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { FaBars } from 'react-icons/fa'; 
import "./Navbar.css";
import logo from "../assets/img/LGOcd (1).png";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav className={`bg-zinc-600 flex justify-between items-center py-3 px-6 ${isSticky ? 'sticky top-0 z-50 shadow-lg' : ''}`}>
      <div className='flex items-center'>
        <img src={logo} width={150} alt="Logo" className='mr-4' />
        <Link to="/">
          <h1 className='text-xl font-bold text-white'>Query Products Manager</h1>
        </Link>
      </div>

      <button onClick={reloadPage} className='text-white  bg-green-700 hover:bg-gray-700 py-2 px-4 rounded-md'>
        Recargar Página
      </button>

      <ul className='flex gap-x-4 items-center'>
        {isAuthenticated ? (
          <>
            <li className='text-lg font-bold text-white'>
              Bienvenido {user.username}
            </li>
            <li className='relative'>
              <button onClick={toggleMenu} className='text-white hover:text-gray-300'>
                <FaBars size={24} /> {/* Ícono del menú */}
              </button>
              {menuOpen && (
                <ul className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2'>
                  <li>
                    <Link to={`/queryOring/query`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                      Buscar Orings
                    </Link>
                  </li>
                    <li>
                      <Link to={`/queryOring`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                        Crear Oring
                      </Link>
                    </li>
                    <li>
                      <Link to={`/pdfPage`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                        Buscar/Subir PDF
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={() => { logout(); setMenuOpen(false); }} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                        Cerrar sesión
                      </Link>
                    </li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={`/login`} className='text-white hover:text-gray-300'>
                Login
              </Link>
            </li>
            <li>
              <Link to={`/register`} className='text-white hover:text-gray-300'>
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
