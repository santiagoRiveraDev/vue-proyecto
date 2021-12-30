//Conexion a base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-vue', {
    useNewUrlParser: true
})

    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));