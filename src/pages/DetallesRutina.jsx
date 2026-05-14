import React, { useState, useEffect } from 'react';
import { getDetalleRutinaRequest } from '../api/authApi';

export const DetallesRutina = ({ isOpen, onClose, rutinaId }) => {
  const [rutina, setRutina] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen || !rutinaId) return;

    const cargarDetalles = async () => {
      setLoading(true);
      try {
        const data = await getDetalleRutinaRequest(rutinaId);
        setRutina(data);
      } catch (error) {
        console.error("Error al cargar los detalles de la rutina:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDetalles();
  }, [isOpen, rutinaId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-[#121214] border border-zinc-800 rounded-2xl w-full max-w-2xl flex flex-col max-h-[85vh] overflow-hidden shadow-2xl relative">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white text-xl font-bold cursor-pointer transition-colors z-10"
        >
          ✕
        </button>

        <div className="p-6 border-b border-zinc-800 shrink-0">
          <span className="inline-block px-2.5 py-0.5 bg-red-600/10 border border-red-600/20 text-[9px] font-black tracking-widest text-red-500 uppercase rounded mb-2">
            {rutina?.objetivo || "Cargando..."}
          </span>
          <h3 className="text-2xl font-black text-white uppercase tracking-wide">
            {rutina?.nombre_rutina || "Detalles del Entrenamiento"}
          </h3>
          <p className="text-xs text-gray-500 mt-1 font-bold">
            {rutina ? `Total asignado: ${rutina.total_ejercicios} ejercicios` : "Conectando con la base de datos..."}
          </p>
        </div>

        <div className="p-6 overflow-y-auto flex-1 divide-y divide-zinc-800/60">
          {loading ? (
            <div className="py-12 text-center text-xs font-black tracking-widest text-gray-500 uppercase animate-pulse">
              Cargando ejercicios desde el servidor...
            </div>
          ) : rutina?.ejercicios?.length > 0 ? (
            rutina.ejercicios.map((item, index) => (
              <div key={item.id_detalle} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4 hover:bg-zinc-900/30 px-3 rounded-lg transition-colors">
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-zinc-600 w-4">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-wide">
                      {item.nombre_ejercicio}
                    </p>
                    <span className="text-[10px] text-gray-500 font-bold">
                      Grupo: <span className="text-gray-400">{item.grupo_muscular}</span>
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-xs font-black text-red-500 uppercase tracking-wider">
                    {item.series} <span className="text-gray-600">x</span> {item.repeticiones}
                  </p>
                  <p className="text-[10px] text-gray-500 font-bold mt-0.5">
                    ⏱️ {item.tiempo_descanso}
                  </p>
                </div>

              </div>
            ))
          ) : (
            <div className="py-12 text-center text-xs font-bold text-zinc-600 uppercase tracking-wider">
              Esta rutina aún no tiene ejercicios detallados.
            </div>
          )}
        </div>

        <div className="p-4 border-t border-zinc-800 bg-[#0f0f11] shrink-0 text-right">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
          >
            Cerrar Vista
          </button>
        </div>

      </div>
    </div>
  );
};

export default DetallesRutina;