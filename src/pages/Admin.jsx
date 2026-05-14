import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersRequest, getRutinasRequest, registerRequest, register_admin } from '../api/authApi';
import { DetallesRutina } from './DetallesRutina';

export const Admin = () => {
  const navigate = useNavigate();
  
  const [usuarios, setUsuarios] = useState([]);
  const [rutinas, setRutinas] = useState([]);
  
  const [busqueda, setBusqueda] = useState("");
  const [pestañaActual, setPestañaActual] = useState("clientes");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [loading, setLoading] = useState(false);
  
  const [showModal, setShowModal] = useState(false);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    rol: "cliente"
  });

  const [showModalDetalle, setShowModalDetalle] = useState(false);
  const [rutinaSeleccionada, setRutinaSeleccionada] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const dataUsuarios = await getUsersRequest();
        setUsuarios(dataUsuarios);

        const dataRutinas = await getRutinasRequest();
        setRutinas(dataRutinas);
      } catch (error) {
        console.error("Error al cargar los datos desde Express:", error);
      }
    };
    
    cargarDatos();
  }, []);

  const usuariosFiltrados = usuarios.filter(u => 
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.email.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!nuevoUsuario.nombre || !nuevoUsuario.email || !nuevoUsuario.password) {
      alert("Por favor llena todos los campos");
      return;
    }

    setLoading(true);

    try {
      let data;
      if (nuevoUsuario.rol === 'admin') {
        data = await register_admin(nuevoUsuario.nombre, nuevoUsuario.email, nuevoUsuario.password);
      } else {
        data = await registerRequest(nuevoUsuario.nombre, nuevoUsuario.email, nuevoUsuario.password);
      }

      const listaActualizada = await getUsersRequest();
      setUsuarios(listaActualizada);

      setShowModal(false);
      setNuevoUsuario({ nombre: "", email: "", password: "", rol: "cliente" });
      
    } catch (error) {
      console.error("Error al registrar:", error);
      alert(error.response?.data?.error || "Hubo un error al intentar crear el registro en el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const cambiarPestaña = (pestaña) => {
    setPestañaActual(pestaña);
    setMobileMenuOpen(false); 
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans flex flex-col md:flex-row overflow-x-hidden selection:bg-red-600 selection:text-white">
      
      <header className="md:hidden flex items-center justify-between p-4 bg-[#0f0f11] border-b border-zinc-800/80 sticky top-0 z-30 shrink-0">
        <h1 className="text-xl font-black tracking-tighter uppercase text-red-600">
          ARREBATADOS
        </h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Abrir menú"
        >
          <span className="text-xl font-bold">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </header>

      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)} 
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 md:hidden"
        />
      )}

      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#0f0f11] border-r border-zinc-800/80 flex flex-col justify-between shrink-0 transform transition-transform duration-300 ease-in-out ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div>
          <div className="p-6 border-b border-zinc-800/80 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase text-red-600">
                ARREBATADOS
              </h1>
              <div className="gap-2 mt-1 text-left">
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Admin Panel</span>
              </div>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden text-gray-500 hover:text-white font-bold text-lg"
            >
              ✕
            </button>
          </div>

          <nav className="p-4 space-y-1">
            <button 
              onClick={() => cambiarPestaña("clientes")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                pestañaActual === "clientes" ? "bg-red-600 text-white" : "text-gray-400 hover:bg-zinc-900/50"
              }`}
            >
              Clientes
            </button>
            <button 
              onClick={() => cambiarPestaña("rutinas")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                pestañaActual === "rutinas" ? "bg-red-600 text-white" : "text-gray-400 hover:bg-zinc-900/50"
              }`}
            >
              Rutinas
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-zinc-800/80">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-500 transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span>←</span> Cerrar Sesión
          </button>
        </div>
      </aside>

      <main className="flex-1 p-5 md:p-8 lg:p-12 overflow-y-auto w-full max-w-full">
        
        {pestañaActual === "clientes" && (
          <>
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-zinc-800/60">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">Panel de Control</h2>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-bold">Monitoreo y gestión de atletas y administradores</p>
              </div>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-lg uppercase tracking-wider transition-all shadow-lg shadow-red-600/20 shrink-0 cursor-pointer text-center"
              >
                + Nuevo Registro
              </button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="bg-[#121214] border border-zinc-800/80 p-5 sm:p-6 rounded-2xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Cuentas</p>
                <p className="text-3xl sm:text-4xl font-black text-white mt-2">{usuarios.length}</p>
              </div>

              <div className="bg-[#121214] border-2 border-red-600/60 p-5 sm:p-6 rounded-2xl relative shadow-[0_0_20px_rgba(220,38,38,0.05)]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-red-500">Clientes Activos</p>
                <p className="text-3xl sm:text-4xl font-black text-red-600 mt-2">
                  {usuarios.filter(u => (u.estado === 1 || u.estado === "1") && u.rol !== 'admin').length}
                </p>
              </div>

              <div className="bg-[#121214] border border-zinc-800/80 p-5 sm:p-6 rounded-2xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Staff (Admins)</p>
                <p className="text-3xl sm:text-4xl font-black text-white mt-2">{usuarios.filter(u => u.rol === 'admin').length}</p>
              </div>
            </div>

            <div className="mb-6 bg-[#121214] border border-zinc-800/80 p-3 rounded-xl flex items-center">
              <input 
                type="text"
                placeholder="Buscar cuenta por nombre o correo..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-zinc-600 pr-3"
              />
            </div>

            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl overflow-x-auto shadow-xl">
              <table className="w-full text-left border-collapse min-w-[550px]">
                <thead>
                  <tr className="border-b border-zinc-800/80 text-[10px] font-black uppercase tracking-widest text-gray-500 bg-[#0f0f11]">
                    <th className="p-4 sm:p-5">ID</th>
                    <th className="p-4 sm:p-5">Usuario / Correo</th>
                    <th className="p-4 sm:p-5">Rol</th>
                    <th className="p-4 sm:p-5 text-center">Estado</th>
                    <th className="p-4 sm:p-5 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/40 text-sm">
                  {usuariosFiltrados.map((u) => (
                    <tr key={u.id_usuario} className="hover:bg-zinc-900/40 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-zinc-600">#{u.id_usuario}</td>
                      <td className="p-4 sm:p-5">
                        <p className="font-black text-white uppercase tracking-wide truncate max-w-[150px] sm:max-w-none">{u.nombre}</p>
                        <p className="text-xs text-gray-500 truncate max-w-[150px] sm:max-w-none">{u.email}</p>
                      </td>
                      <td className="p-4 sm:p-5">
                        <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                          u.rol === 'admin' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'text-gray-400'
                        }`}>
                          {u.rol === 'admin' ? '🛡️ Admin' : 'Atleta'}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-center">
                        <span className={`px-2 py-1 rounded font-black text-[9px] uppercase tracking-wider ${
                          (u.estado === 1 || u.estado === "1") 
                            ? 'bg-red-600/10 border border-red-600/30 text-red-500' 
                            : 'bg-zinc-800 text-gray-600 border border-zinc-700'
                        }`}>
                          {(u.estado === 1 || u.estado === "1") ? 'ACTIVO' : 'INACTIVO'}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-right space-x-2 shrink-0">
                        {u.rol !== 'admin' && (
                          <button className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer">
                            Rutina
                          </button>
                        )}
                        <button className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/20 hover:border-red-600 rounded font-bold text-xs uppercase tracking-wider transition-all cursor-pointer">
                          Baja
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {pestañaActual === "rutinas" && (
          <>
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-zinc-800/60">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">Biblioteca de Rutinas</h2>
                <p className="text-xs text-gray-400 mt-1 font-bold">Crea, edita y asigna planes de entrenamiento para los atletas</p>
              </div>
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs rounded-lg uppercase tracking-wider transition-all shadow-lg shadow-red-600/20 shrink-0 cursor-pointer text-center"
              >
                + Nueva Rutina
              </button>
            </header>

            {rutinas.length === 0 ? (
              <div className="p-12 text-center text-zinc-600 font-black uppercase tracking-wider border border-dashed border-zinc-800 rounded-2xl">
                Vacío.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rutinas.map((rutina) => (
                  <div 
                    key={rutina.id_rutina || rutina.id}
                    onClick={() => {
                      setRutinaSeleccionada(rutina.id_rutina || rutina.id);
                      setShowModalDetalle(true);
                    }}
                    className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all relative cursor-pointer group"
                  >
                    <div>
                      <span className="inline-block px-3 py-1 bg-black border border-zinc-800/80 text-[9px] font-black tracking-widest text-gray-300 uppercase rounded mb-4">
                        {rutina.objetivo || "General"}
                      </span>
                      <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-red-500 transition-colors">
                        {rutina.nombre_rutina}
                      </h3>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                      <button className="text-xs font-black text-red-600 hover:text-red-500 uppercase tracking-wider transition-colors cursor-pointer">
                        Asignar
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => e.stopPropagation()} 
                          className="px-3 py-1.5 bg-transparent border border-zinc-800 hover:bg-zinc-800 text-white rounded font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Editar
                        </button>
                        <button 
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#121214] border border-zinc-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-6 border-b border-zinc-800 pb-3">
              Alta en el Sistema
            </h3>
            <form onSubmit={handleCreateUser} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Tipo de Cuenta
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNuevoUsuario({...nuevoUsuario, rol: 'cliente'})}
                    className={`py-2 rounded-lg font-black text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                      nuevoUsuario.rol === 'cliente' ? 'bg-red-600 border-red-600 text-white' : 'bg-zinc-900 border-zinc-800 text-gray-500 hover:text-white'
                    }`}
                  >
                    Atleta (Cliente)
                  </button>
                  <button
                    type="button"
                    onClick={() => setNuevoUsuario({...nuevoUsuario, rol: 'admin'})}
                    className={`py-2 rounded-lg font-black text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                      nuevoUsuario.rol === 'admin' ? 'bg-amber-600 border-amber-600 text-white' : 'bg-zinc-900 border-zinc-800 text-gray-500 hover:text-white'
                    }`}
                  >
                    Staff (Admin)
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Nombre Completo</label>
                <input type="text" required placeholder="Ej. Alfredo" value={nuevoUsuario.nombre} onChange={(e) => setNuevoUsuario({...nuevoUsuario, nombre: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Correo Electrónico</label>
                <input type="email" required placeholder="correo@arrebatados.com" value={nuevoUsuario.email} onChange={(e) => setNuevoUsuario({...nuevoUsuario, email: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Contraseña Temporal</label>
                <input type="password" placeholder="••••••••" value={nuevoUsuario.password} onChange={(e) => setNuevoUsuario({...nuevoUsuario, password: e.target.value})} className="w-full bg-black border border-zinc-800 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-red-600" />
              </div>
              <button type="submit" disabled={loading} className={`w-full mt-6 py-3 bg-red-600 text-white font-black text-xs rounded-lg uppercase tracking-widest transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700 cursor-pointer'}`}>
                {loading ? 'Procesando...' : 'Registrar Cuenta'}
              </button>
            </form>
          </div>
        </div>
      )}

      <DetallesRutina 
        isOpen={showModalDetalle}
        onClose={() => setShowModalDetalle(false)}
        rutinaId={rutinaSeleccionada}
      />

    </div>
  );
};

export default Admin;