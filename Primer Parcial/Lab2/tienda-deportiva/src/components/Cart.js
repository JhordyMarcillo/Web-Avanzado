import React from 'react';

const Cart = ({ carrito, setCarrito }) => {
  const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

  // Función para limpiar el carrito
  const limpiarCarrito = () => {
    localStorage.removeItem('carrito');  // Eliminar el carrito de localStorage
    setCarrito([]);  // Limpiar el carrito en el estado local
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul className="list-group">
          {carrito.map((producto, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {producto.nombre} - ${producto.precio} x {producto.cantidad}
            </li>
          ))}
        </ul>
      )}
      <h4 className="mt-3">Total: ${total}</h4>
      {/* Botón para limpiar el carrito */}
      <button className="btn btn-danger mt-3" onClick={limpiarCarrito}>
        Limpiar Carrito
      </button>
    </div>
  );
};

export default Cart;
