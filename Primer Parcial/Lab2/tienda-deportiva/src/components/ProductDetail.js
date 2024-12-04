import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/productos/${id}`)
      .then(response => setProducto(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!producto) return <div className="container mt-5">Cargando...</div>;

  return (
    <div className="container mt-5">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
};

export default ProductDetail;
