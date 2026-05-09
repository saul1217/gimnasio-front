import React from 'react';
import { Link } from 'react-router-dom';


export const Dashboard = ({}) => {
  return (
    <div className="bg-black ">
      <header className="flex place-content-around items-center p-6 border-b content-centerborder-red-600/30 ">
        <div className="flex-grow text-center">
            <h1 className="text-3xl font-black text-red-600  md:text-5xl text-center">
            Arrebatados <span className="text-white">Gym</span>
        </h1>
        </div>
        <div>
            <Link 
            to="/Login"
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-colors duration-300 uppercase text-sm"
            >
            Iniciar Sesión
            </Link>
        </div>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-5xl text-white md:text-7xl font-extrabold mb-6 uppercase ">
          Cualquier  <span className="text-red-600">esfuerzo</span> se vuelve ligero con el <span className="text-red-600">habito</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          El mejor equipamiento, entrenadores capacitados y rutinas personalizadas para que alcances tu mejor versión. No hay excusas, solo resultados.
        </p>
       
      </section>

      <section className=" px-6  mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-widest text-gray-200">
            SOBRE NOSOTROS
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-red-600/50 transition-colors flex flex-col">
                <h4 className="text-2xl font-bold text-white mb-2 uppercase">powerlifting</h4>
                
                <ul className="text-gray-300 space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2">
                    Area especializada en powerlifting 
                </li>
                <li className="flex items-start gap-2">
                    Discos Calibrados
                </li>
                <li className="flex items-start gap-2">
                    Apoyo grupal para superar tus prs
                </li>
                </ul>
            </div>
            <div className="bg-gradient-to-b from-zinc-900 to-black border-2  p-8 rounded-xl relative shadow-[0_0_20px_rgba(220,38,38,0.15)] flex flex-col">
            
                <h4 className="text-2xl font-bold text-white mb-2 uppercase">Gimansio general</h4>
                
                <ul className="text-white space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-2">
                Area de cardio
                </li>
                <li className="flex items-start gap-2 ">
                    maquinas de peso libre 
                </li>
                <li className="flex items-start gap-2 ">
                    Coach de piso
                </li>
                <li className="flex items-start gap-2">
                    Registro de evolución semanal
                </li>
                </ul>
            </div>
            </div>
        </section>
        <section className="flex flex-col text-center py-24 px-4 max-w-max mx-auto">
            <h2 className="text-white text-5xl font-extrabold mb-6 uppercase ">
            Si quieres alcanzar tu prime debes unirte
            </h2>
            <p className="text-white text-4xl md:text-4xl ">
            Deja las excusas en la puerta. Entrena como un Arrebatado
            </p>
         
        </section>
      
    </div>
  );
};

export default Dashboard