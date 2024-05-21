import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"


function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="text-4xl font-bold text-center text-white my-4">Bienvenido a Query Products Manager</h1>
        <p className="text-xl text-center text-gray-200 mb-8">
          Una herramienta eficiente para gestionar y consultar productos de manera fácil y rápida.
        </p>
      </header>
      
      <section className="home-content">
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Buscar Orings</h2>
          <p className="text-gray-600">
            Utiliza nuestra herramienta de búsqueda avanzada para encontrar los orings que necesitas.
          </p>
          <Link to="/queryOring/query" className="btn">Buscar Orings</Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Crear Oring</h2>
          <p className="text-gray-600">
            Añade nuevos orings a la base de datos de manera rápida y sencilla.
          </p>
          <Link to="/queryOring" className="btn">Crear Oring</Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Gestionar Cuenta</h2>
          <p className="text-gray-600">
            Accede a tu perfil y ajusta la configuración de tu cuenta.
          </p>
          <Link to="/account" className="btn">Gestionar Cuenta</Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage