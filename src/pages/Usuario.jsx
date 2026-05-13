export const Usuario = ({}) => {

   return (
    <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-red-600 selection:text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-10 space-y-10">
        
        <header className="flex items-center justify-between border-b border-zinc-800 pb-6">
          <h1 className="text-2xl md:text-3xl font-black tracking-wider uppercase">
            <span className="text-red-600">Arrebatados</span> <span className="text-white">Gym</span>
          </h1>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Hola, saul
            </span>
            <button 
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
              </svg>
              <span className="hidden md:inline">Cerrar sesión</span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-black uppercase tracking-widest text-white">Membresía</h2>
                <span className="px-2 py-0.5 border border-red-600/40 text-red-500 rounded text-[10px] font-black uppercase tracking-wider">Activa</span>
              </div>
            </div>
            <div className="border-t border-zinc-800/80 pt-4 mt-6 flex items-baseline justify-between">
              <span className="text-5xl font-black text-white tracking-tight">24</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Días restantes</span>
            </div>
          </div>

          <div className="md:col-span-8 bg-zinc-900 border-2 border-red-600 rounded-2xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(220,38,38,0.1)]">
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-red-600 mb-2">Entrenamiento del día</h2>
              <p className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">Día 3: Pecho pesadísimo y Tríceps</p>
              <p className="text-sm text-gray-400 max-w-xl">Enfócate en la técnica. Hoy rompemos marcas. No hay excusas.</p>
            </div>
            <div className="mt-8">
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black uppercase tracking-wider text-sm transition-all duration-300 shadow-lg shadow-red-600/20 cursor-pointer">
                Iniciar Entrenamiento
              </button>
            </div>
          </div>

          <div className="md:col-span-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black uppercase tracking-wider text-white">Rutina Principal</h2>
            </div>
            
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-zinc-800 text-xs font-bold uppercase tracking-widest text-gray-500">
                  <th className="pb-4 pr-4">Ejercicio</th>
                  <th className="pb-4 px-4">Series</th>
                  <th className="pb-4 px-4">Repeticiones</th>
                  <th className="pb-4 pl-4">PR (KG)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-sm md:text-base">
                <tr>
                  <td className="py-4 pr-4 font-black text-white uppercase tracking-wide">Bench Press (Barra)</td>
                  <td className="py-4 px-4 text-gray-400 font-bold">4</td>
                  <td className="py-4 px-4 text-gray-300">5 - 3 - 3 - 1</td>
                  <td className="py-4 pl-4">
                    <span className="px-2 py-1 bg-red-600/10 border border-red-600/30 text-red-500 rounded font-bold text-xs">120</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-black text-white uppercase tracking-wide">Incline Dumbbell Press</td>
                  <td className="py-4 px-4 text-gray-400 font-bold">3</td>
                  <td className="py-4 px-4 text-gray-300">8 - 10</td>
                  <td className="py-4 pl-4">
                    <span className="px-2 py-1 bg-zinc-800 text-gray-300 rounded font-bold text-xs">45</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-black text-white uppercase tracking-wide">Dips (Lastrados)</td>
                  <td className="py-4 px-4 text-gray-400 font-bold">3</td>
                  <td className="py-4 px-4 text-gray-300">Al fallo</td>
                  <td className="py-4 pl-4">
                    <span className="px-2 py-1 bg-zinc-800 text-gray-300 rounded font-bold text-xs">+20</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-black text-white uppercase tracking-wide">Skullcrushers</td>
                  <td className="py-4 px-4 text-gray-400 font-bold">4</td>
                  <td className="py-4 px-4 text-gray-300">10 - 12</td>
                  <td className="py-4 pl-4">
                    <span className="px-2 py-1 bg-zinc-800 text-gray-300 rounded font-bold text-xs">40</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="md:col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center text-center relative overflow-hidden shadow-lg">
            <span className="absolute -top-10 -left-2 text-9xl font-black text-zinc-800/20 select-none">“</span>
            <p className="text-lg md:text-xl font-black text-white uppercase tracking-wide italic mb-4 relative z-10">
              "Quedate flacowww o levanta ese peso"
              <br />
              <span className="text-red-600">tu decides</span>
            </p>
          </div>

          <div className="md:col-span-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-white">Progresión: Bench Press</span>
                <span className="text-xs font-bold text-red-600">Objetivo: 140kg</span>
              </div>
              <div className="w-full bg-black rounded-full h-3 mb-4 border border-zinc-800 overflow-hidden">
                <div className="bg-red-600 h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400 font-bold mt-2">
              <span>Actual: 120kg</span>
              <span>85% Completado</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Usuario;