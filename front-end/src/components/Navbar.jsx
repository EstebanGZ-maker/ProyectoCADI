import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { FaBars, FaChevronDown } from 'react-icons/fa'; 
import "./Navbar.css";
import logo from "../assets/img/LGOcd (1).png";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

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

  const toggleSubmenu = (submenu) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav className={`bg-zinc-500 flex justify-between items-center py-3 px-6 ${isSticky ? 'sticky top-0 z-50 shadow-lg' : ''}`}>
      <div className='flex justify-center '>
        <Link to="/" >
          <img src={logo} width={150} alt="Logo" className='mr-4' />
        </Link>
        <Link to="/productsHome">
          <h1 className='text-2xl font-bold text-white'>Query Products Manager</h1>
        </Link>
      </div>

        <div >
          <button onClick={reloadPage} className='text-white bg-green-600 hover:bg-gray-400 py-2 px-4 rounded-md font-bold '>
            Recargar Página
          </button>
        </div>


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
                  <li className='relative'>
                    <button onClick={() => toggleSubmenu('buscarProductos')} className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-right'>
                      Buscar Productos <FaChevronDown className=' inline ' />
                    </button>
                    {submenuOpen.buscarProductos && (
                      <ul className='mt-2 bg-white shadow-lg rounded-md py-2'>
                        <li>
                          <Link to={`/queryOring/query`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                            - Buscar O-rings
                          </Link>
                        </li>
                        <li>
                          <Link to={`/arandelasPage`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                            - Buscar Arandelas
                          </Link>
                        </li>
                        {/* Agrega más submenús aquí si es necesario */}
                      </ul>
                    )}
                  </li>
                  <li className='relative'>
                    <button onClick={() => toggleSubmenu('agregarProductos')} className='block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-right '>
                      Crear Productos <FaChevronDown className='inline' />
                    </button>
                    {submenuOpen.agregarProductos && (
                      <ul className='mt-2 bg-white shadow-lg rounded-md py-2'>
                        <li>
                          <Link to={`/queryOring`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                            - Crear O-ring
                          </Link>
                        </li>
                        <li>
                          <Link to={`/createArandelas`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                            - Crear Arandelas
                          </Link>
                        </li>
                        {/* Agrega más submenús aquí si es necesario */}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to={`/pdfPage`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                     - Buscar/Subir PDF
                    </Link>
                  </li>
                  <li>
                    <Link to={`/register`} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                      - Registrar usuarios
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={() => { logout(); setMenuOpen(false); }} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                      - Cerrar sesión
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={`/login`} className='text-white hover:text-gray-400 font-bold text-xl '>
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
