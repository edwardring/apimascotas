const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

/* variable de ambiente para el hosting */
const port = process.env.PORT || 9000;

/* rutas de la api */
const mascotaRoute = require("./router/mascotas");

/* middleware api */
app.use(express.json());
app.use("/api", mascotaRoute);

/* route basica */
app.get("/", (req, res) => {
    res.send("Bienvenido a nuestra API con Node");
})

/* conexion a la base de datos mongodb */
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.error(error));

app.listen(port, () => {
    console.log(`API con Node y Express, escuchando en el puerto: ${port}`);
})

