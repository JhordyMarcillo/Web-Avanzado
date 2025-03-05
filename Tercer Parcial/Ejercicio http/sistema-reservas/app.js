require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

let pedidos = [];
let siguienteId = 1;

app.post('/pedidos', (req, res) => {
  if (req.headers['expect'] === '100-continue') {
    res.status(100).send('Continue');
  } else {
    res.status(400).json({ message: 'Se esperaba: 100-continue' });
  }
});

app.get('/procesar-pedidos', (req, res) => {
  res.status(102).json({ message: 'Procesando los pedidos, espere por favor...' });
});

app.get('/pedidos', (req, res) => {
  res.status(200).json({ pedidos });
});

app.post('/pedidos/nuevo', (req, res) => {
  const { producto, cantidad } = req.body;
  if (!producto || !cantidad) {
    return res.status(400).json({ message: 'Faltan datos del pedido' });
  }
  const nuevoPedido = { id: siguienteId++, producto, cantidad };
  pedidos.push(nuevoPedido);
  res.status(201).json({ message: 'Pedido creado exitosamente', pedido: nuevoPedido });
});

app.delete('/pedidos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = pedidos.findIndex(pedido => pedido.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Pedido no encontrado' });
  }
  pedidos.splice(index, 1);
  res.status(204).send(); 
});

app.get('/formato-pedidos', (req, res) => {
  res.status(300).json({
    message: 'Elija un formato de respuesta',
    opciones: ['application/json', 'application/xml']
  });
});

app.get('/pedidos-antiguos', (req, res) => {
  res.redirect(301, '/pedidos');
});

app.get('/pedidos-temporales', (req, res) => {
  res.redirect(307, '/pedidos');
});

app.post('/pedidos/invalido', (req, res) => {
  if (!req.body.producto) {
    res.status(400).json({ message: 'Falta el campo "producto" en la solicitud' });
  } else {
    res.status(200).json({ message: 'Pedido válido' });
  }
});

app.get('/pedidos/privados', (req, res) => {
  const token = req.headers['authorization'];
  if (!token || token !== 'Bearer token-secreto') {
    res.status(401).json({ message: 'No autorizado' });
  } else {
    res.status(200).json({ message: 'Acceso concedido a pedidos privados' });
  }
});

app.get('/pedidos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pedido = pedidos.find(pedido => pedido.id === id);
  if (!pedido) {
    res.status(404).json({ message: 'Pedido no encontrado' });
  } else {
    res.status(200).json({ pedido });
  }
});

app.post('/pedidos/duplicado', (req, res) => {
  const { producto, cantidad } = req.body;
  const pedidoExistente = pedidos.find(pedido => pedido.producto === producto);
  if (pedidoExistente) {
    res.status(409).json({ message: 'El pedido ya existe' });
  } else {
    const nuevoPedido = { id: siguienteId++, producto, cantidad };
    pedidos.push(nuevoPedido);
    res.status(201).json({ message: 'Pedido creado exitosamente', pedido: nuevoPedido });
  }
});


app.get('/error-servidor', (req, res) => {
  res.status(500).json({ message: 'Error interno del servidor' });
});

app.get('/error-gateway', (req, res) => {
  res.status(502).json({ message: 'Error de gateway' });
});

app.get('/timeout-gateway', (req, res) => {
  res.status(504).json({ message: 'Tiempo de espera agotado en el gateway' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});