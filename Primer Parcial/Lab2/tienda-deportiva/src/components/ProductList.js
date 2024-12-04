import React, { useState } from 'react';

const ProductList = ({ carrito, setCarrito }) => {
  const [alerta, setAlerta] = useState('');
  const productos = [
    { id: 1, nombre: 'Zapatilla Running Nike', precio: 120, descripcion: 'Zapatilla para correr con suela antideslizante', categoria: 'Calzado' },
    { id: 2, nombre: 'Zapatilla Fútbol Adidas', precio: 150, descripcion: 'Zapatillas para fútbol con tecnología de tracción', categoria: 'Calzado' },
    { id: 3, nombre: 'Pantalón Deportivo Puma', precio: 80, descripcion: 'Pantalón deportivo cómodo para entrenamiento', categoria: 'Ropa' },
    { id: 4, nombre: 'Camiseta Running Nike', precio: 40, descripcion: 'Camiseta liviana y transpirable para correr', categoria: 'Ropa' },
    { id: 5, nombre: 'Sudadera Entrenamiento Nike', precio: 70, descripcion: 'Sudadera con capucha para entrenamiento', categoria: 'Ropa' },
    { id: 6, nombre: 'Botines Fútbol Puma', precio: 130, descripcion: 'Botines de fútbol para césped artificial', categoria: 'Calzado' },
    { id: 7, nombre: 'Short Deportivo Adidas', precio: 35, descripcion: 'Short deportivo cómodo para hacer ejercicio', categoria: 'Ropa' },
    { id: 8, nombre: 'Zapatilla Casual Puma', precio: 90, descripcion: 'Zapatilla de uso casual y diario', categoria: 'Calzado' },
    { id: 9, nombre: 'Gorra Deportiva Nike', precio: 25, descripcion: 'Gorra deportiva ajustable para protección solar', categoria: 'Accesorios' },
    { id: 10, nombre: 'Chaqueta Entrenamiento Adidas', precio: 110, descripcion: 'Chaqueta deportiva para entrenamientos en clima frío', categoria: 'Ropa' },
  ];

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {

      setCarrito(carrito.map(item => 
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {

      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }


    setAlerta(`${producto.nombre} agregado al carrito`);
    setTimeout(() => setAlerta(''), 2000);
  };

  return (
    <div className="container mt-5">
      <h2>Productos</h2>
      {/* Mostrar alerta */}
      {alerta && <div className="alert alert-success">{alerta}</div>}
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4 d-flex">
            <div className="card w-100">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="card-text">${producto.precio}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
