const express = require("express");
const app = express();
const cors = require("cors");

// Habilitar CORS
app.use(cors()); // Permitir todos los orígenes

// Middleware para manejar archivos JSON
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Bienvenido a la API de calculadora");
});

// Ruta única para manejar todas las operaciones
app.post("/calcular", (req, res) => {
    const { operacion, a, b } = req.body; 

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    let resultado;

    switch (operacion) {
        case "suma":
            resultado = numA + numB;
            break;
        case "resta":
            resultado = numA - numB;
            break;
        case "multiplicacion":
            resultado = numA * numB;
            break;
        case "division":
            if (numB === 0) {
                return res.status(400).json({ error: "No se puede dividir por 0 :(" });
            }
            resultado = numA / numB;
            break;
        default:
            return res.status(400).json({ error: "Operación no válida. " });
    }
    res.json({ operacion, a: numA, b: numB, resultado });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutado en http://localhost:${PORT}`);
});
