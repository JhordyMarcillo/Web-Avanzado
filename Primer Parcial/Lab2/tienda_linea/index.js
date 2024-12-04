const express = require('express');
const app = express();
const cors = require('cors');

// Configuración de CORS
app.use(cors({
  origin: "http://localhost:3001"  
}));

app.use(express.json());

const PORT = 3000;

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

let carrito = [];

// Consulta productos 
app.get('/productos', (req, res) => {
  res.json(productos);
});

app.get('/producto/:id', (req, res) => {
  const idProducto = req.params.id;
  const producto = productos.find(p => p.id === parseInt(idProducto));

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  }
});

// **Peticiones asíncronas:**
// Actualizar carrito Asíncrona
app.post('/carrito', (req, res) => {
  const { idProducto, cantidad } = req.body;

  const productoExistente = carrito.find(item => item.idProducto === idProducto);
  if (productoExistente) {
    productoExistente.cantidad += cantidad;
  } else {
    carrito.push({ idProducto, cantidad });
  }

  setTimeout(() => {
    res.json({ mensaje: 'Carrito actualizado', carrito });
  }, 500);
});

// Carrito - Asíncrona
app.get('/carrito', (req, res) => {
  setTimeout(() => {
    res.json({ carrito });
  }, 500);
});

// Disponibilidad Asíncrona
app.get('/disponibilidad/:id', (req, res) => {
  const idProducto = req.params.id;

  setTimeout(() => {
    const disponibilidad = Math.random() < 0.5 ? 'Disponible' : 'No disponible';
    res.json({ disponibilidad });
  }, 500);
});

//Filtrar Asíncrona
app.get('/productos/filtro', (req, res) => {
    const { categoria, marca, precioMax } = req.query;
  
    setTimeout(() => {
      const productosFiltrados = productos.filter(p => {
        const categoriaCoincide = !categoria || p.categoria.toLowerCase() === categoria.toLowerCase();
        const marcaCoincide = !marca || p.nombre.toLowerCase().includes(marca.toLowerCase());
        const precioCoincide = !precioMax || p.precio <= parseInt(precioMax);
  
        return categoriaCoincide && marcaCoincide && precioCoincide;
      });
  
      res.json(productosFiltrados);
    }, 500); // Simulamos un retraso de 500ms
  });
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
