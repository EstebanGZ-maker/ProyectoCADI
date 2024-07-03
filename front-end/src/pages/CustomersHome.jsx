import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";

function CustomersHome() {
  return (
    <div className="home-container">
    <header className="home-header">
      <h1 className="text-4xl font-bold text-center  text-gray-800 my-4">Bienvenido a Query Products Customers </h1>
      <p className="text-xl text-center  mb-8 text-gray-800">
        Una herramienta eficiente para gestionar y consultar productos de manera fácil y rápida para nuestros clientes.
      </p>
    </header>
    
    <section className="home-content">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800">Buscar O-rings</h2>
        <p className="text-gray-600">
          Utiliza nuestra herramienta de búsqueda avanzada para encontrar los O-rings más adecuados a tus necesidades.
        </p>
        <Link to="/customerQueryOring" className="btn">Buscar O-rings</Link>
      </div>
      
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-800">Buscar Arandelas</h2>
        <p className="text-gray-600">
        Utiliza nuestra herramienta de búsqueda avanzada para encontrar las Arandelas más adecuadas a tus necesidades.

        </p>
        <Link to="/customerQueryArandela" className="btn">Buscar Arandelas</Link>
      </div>
      
    
    </section>
  </div>
    
  )
}

export default CustomersHome