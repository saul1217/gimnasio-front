import React from 'react';
import { Link } from 'react-router-dom';


export const Dashboard = ({ }) => {
  return (
    <div className="bg-black ">
      <header className="flex place-content-around items-center p-6 border-b content-centerborder-red-600/30 ">
        <h1 className="text-3xl font-black text-red-600  text-center">
          Arrebatados <span className="text-white">Gym</span>
        </h1>
        <button 
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors duration-300 uppercase tracking-wide text-sm"
        >
          Iniciar Sesión
        </button>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-5xl text-white md:text-7xl font-extrabold mb-6 uppercase ">
          Cualquier  <span className="text-red-600">esfuerzo</span> se vuelve ligero con el <span className="text-red-600">habito</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          El mejor equipamiento, entrenadores capacitados y rutinas personalizadas para que alcances tu mejor versión. No hay excusas, solo resultados.
        </p>
        <button className="px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold text-lg rounded-md transition-all uppercase tracking-wide">
          Únete ahora
        </button>
      </section>
    </div>
  );
};

export default Dashboard