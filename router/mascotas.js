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

module.exports = router;