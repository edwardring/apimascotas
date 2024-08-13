const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required:true
    }
});

/* creacion del modelo */
const Mascota = mongoose.model('Mascota', mascotaSchema);
module.exports = Mascota;
