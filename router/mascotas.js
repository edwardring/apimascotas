const express = require('express');
const router = express.Router();

/* crear mascota */
router.post("/mascotas", (req, res) => {
    res.send('creacion de mascota')
})

module.exports = router;