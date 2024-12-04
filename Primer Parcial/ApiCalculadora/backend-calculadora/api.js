const express = require("express")
const app = express();
// cors sirve para comunicar el back y front 


//habilitar el cors
const cors = require("cors")

app.use(cors({
    origin:"http://localhost:3001"

}))

//Middleware para manejar archivos json

app.use(express.json())

//ruta principal
app.get("/", (req, res) => {
    res.send("Bienvenido a la API de calculadora")
})


//suma
app.get("/suma", (req, res) => {
    const {a, b} = req.query;
    const resultado = parseFloat(a) + parseFloat(b)
    res.json({operacion: "suma:", a:parseFloat(a), b:parseFloat(b), resultado});
})


//resta
app.get("/resta", (req, res) => {
    const {a, b} = req.query;
    const resultado = parseFloat(a) - parseFloat(b)
    res.json({operacion: "resta:", a:parseFloat(a), b:parseFloat(b), resultado});
})


//multiplicacion
app.get("/multiplicacion", (req, res) => {
    const {a, b} = req.query;
    const resultado = parseFloat(a) * parseFloat(b)
    res.json({operacion: "multiplicacion:", a:parseFloat(a), b:parseFloat(b), resultado});
})


//division
app.get("/division", (req, res) => {
    const {a, b} = req.query;
    if(parseFloat(b) == 0){
        return res.status(400).json({error:"no se puede dividir por 0 :("})
    }
    const resultado = parseFloat(a) / parseFloat(b)
    res.json({operacion: "division:", a:parseFloat(a), b:parseFloat(b), resultado});
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Servidor ejecutado en http://locahost: ${PORT}`)
})