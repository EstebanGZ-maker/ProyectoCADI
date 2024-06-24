import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"


function ProductsHome() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="text-4xl font-bold text-center text-gray-800 my-4">Query Products Manager </h1>
        <p className="text-xl text-center text-gray-700 my-4 mb-8">
          Desde este apartado podrás gestionar y consultar diversos productos de manera fácil y rápida.
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-800 my-4" >O-rings</h2>
      </header>
      
      <section className="home-content">
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Buscar O-rings</h2>
          <p className="text-gray-600">
            Utiliza nuestra herramienta de búsqueda avanzada para encontrar los O-rings que necesitas.
          </p>
          <Link to="/queryOring/query" className="btn">Buscar O-rings</Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Crear O-ring</h2>
          <p className="text-gray-600">
            Añade nuevos O-rings a la base de datos de manera rápida y sencilla.
          </p>
          <Link to="/queryOring" className="btn">Crear O-ring</Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Gestionar Archivos</h2>
          <p className="text-gray-600">
            Sube y/o busca nuevos archivos de planos de los productos.
          </p>
          <Link to="/pdfPage" className="btn">Gestionar PDF's</Link>
        </div>
      </section>

      {/* ARANDELAS */}

      <header className="home-header">
        <h1 className="text-4xl font-bold text-center text-gray-800 my-4">Arandelas</h1>
      </header>

      <section className="home-content">
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Buscar Arandelas</h2>
          <p className="text-gray-600">
            Utiliza nuestra herramienta de búsqueda avanzada para encontrar las arandelas que necesites.
          </p>
          <Link to="/queryArandela/query" className="btn"> Buscar Arandelas </Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Crear Arandelas</h2>
          <p className="text-gray-600">
            Añade nuevas arandelas a la base de datos de manera rápida y sencilla.
          </p>
          <Link to="/queryArandela" className="btn">Crear Arandelas</Link>
        </div>
        
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-800">Gestionar Archivos</h2>
          <p className="text-gray-600">
            Sube y/o busca nuevos archivos de planos de los productos.
          </p>
          <Link to="/pdfPage" className="btn">Gestionar PDF's</Link>
        </div>
      </section>

    </div>
  );
}

export default ProductsHome