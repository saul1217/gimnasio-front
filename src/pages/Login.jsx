import React from "react";

export const Login = ({}) => {

    return(
        <div className="min-h-screen bg-black flex items-center justify-center p-4 ">
        <div className="w-full max-w-xl bg-zinc-900 p-8 rounded-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black uppercase tracking-wider mb-2 text-white">
            <span className="text-red-600">Arrebatados</span> Gym
          </h1>
          <p className="text-gray-400 text-sm">Ingresa a tu cuenta para ver tu rutina</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2 uppercase">
              Correo electrónico
            </label>
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors placeholder-zinc-600"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-bold mb-2 uppercase ">
              Contraseña
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors placeholder-zinc-600"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-lg transition-colors duration-300 uppercase mt-3"
          >
            Entrar al sistema
          </button>
        </form>

        <div className="mt-8 text-center border-t border-zinc-800 pt-6">
          <button 
            className="text-gray-500 hover:text-red-500 text-sm transition-colors flex items-center justify-center gap-2 w-full uppercase font-bold tracking-wide"
          >
            <span>←</span> Volver al inicio
          </button>
        </div>
      </div>
    </div>)
}

export default Login