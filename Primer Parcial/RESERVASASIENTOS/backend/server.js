const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "admin",  // Cambia esto si tu usuario de MySQL es diferente
  password: "admin",  // Cambia esto si tu contraseña de MySQL es diferente
  database: "asientos",
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err.message);
    return;
  }
  console.log("Conectado a la base de datos");
});

// Ruta GET para obtener todos los asientos
app.get("/api/asientos", (req, res) => {
  const query = "SELECT * FROM asientos";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error al obtener los asientos:", err.message);
      return res.status(500).json({ message: "Error al obtener los asientos" });
    }
    res.json(results);
  });
});

// Ruta POST para reservar un asiento
app.post("/api/asientos/reservar", (req, res) => {
  const { numero, reservadoPor } = req.body;

  if (!numero || !reservadoPor) {
    return res.status(400).json({ message: "Número y usuario son requeridos" });
  }

  // Verificar si el asiento ya está reservado
  const checkQuery = "SELECT * FROM asientos WHERE numero = ? AND disponible = 1";
  db.query(checkQuery, [numero], (err, results) => {
    if (err) {
      console.error("Error al verificar el asiento:", err.message);
      return res.status(500).json({ message: "Error al verificar el asiento" });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "El asiento ya está reservado o no existe" });
    }

    // Si está disponible, reservar el asiento
    const query = "UPDATE asientos SET disponible = 0, reservadoPor = ? WHERE numero = ?";
    db.query(query, [reservadoPor, numero], (err, results) => {
      if (err) {
        console.error("Error al reservar el asiento:", err.message);
        return res.status(500).json({ message: "Error al reservar el asiento" });
      }
      res.json({ message: `Asiento ${numero} reservado por ${reservadoPor}` });
    });
  });
});

// Ruta POST para liberar un asiento
app.post("/api/asientos/liberar", (req, res) => {
  const { numero } = req.body;

  if (!numero) {
    return res.status(400).json({ message: "Número de asiento requerido" });
  }

  const query = "UPDATE asientos SET disponible = 1, reservadoPor = NULL WHERE numero = ?";
  db.query(query, [numero], (err, results) => {
    if (err) {
      console.error("Error al liberar el asiento:", err.message);
      return res.status(500).json({ message: "Error al liberar el asiento" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "Asiento no encontrado" });
    }
    res.json({ message: `Asiento ${numero} liberado` });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Backend corriendo en http://localhost:${port}`);
});
