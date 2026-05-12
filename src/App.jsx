import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Login_admin from './pages/Login_admin'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Usuario" element={<Usuario/>} />
        <Route path="/Login_admin" element={<Ladmin/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
