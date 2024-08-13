const express = require('express');
const Mascota = require('../models/mascota.js');

const router = express.Router();

/* crear mascota */
router.post("/mascotas", (req, res) => {
    // res.send('creacion de mascota')
    const mascota = Mascota(req.body);
    mascota
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error }));
})

/* consulta de mascotas */
router.get("/mascotas", (req, res) => {
    Mascota
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
})

/* consultar una mascota */
router.get("/mascotas/:id", (req, res) => {
    const { id } = req.params;
    Mascota
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
});

/* actualizar una mascota */
router.put("/mascotas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    Mascota
        .updateOne({ _id: id }, { $set: {nombre, descripcion}})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

/* borrar una mascota */
router.delete("/mascotas/:id", (req, res) => {
    const { id } = req.params;
    Mascota
        .findByIdAndDelete({ _id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})

module.exports = router;