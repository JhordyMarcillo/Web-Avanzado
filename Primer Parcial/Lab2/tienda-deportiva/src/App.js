import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [carrito, setCarrito] = useState(() => {
    // Recuperar carrito desde localStorage al cargar la app
    const carritoGuardado = localStorage.getItem('carrito');
    console.log('Carrito cargado de localStorage:', carritoGuardado);  
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  useEffect(() => {
    // Guardar carrito en localStorage cuando cambia
    if (carrito.length > 0) {
      console.log('Guardando carrito en localStorage:', carrito);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      console.log('Carrito vacío, no se guarda en localStorage');
    }
    
  }, [carrito]);  // Solo se ejecuta cuando el carrito cambia

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={<ProductList carrito={carrito} setCarrito={setCarrito} />} 
        />
        <Route 
          path="/producto/:id" 
          element={<ProductDetail carrito={carrito} setCarrito={setCarrito} />} 
        />
        <Route path="/carrito" element={<Cart carrito={carrito} setCarrito={setCarrito} />} />

      </Routes>
    </Router>
  );
}

export default App;
