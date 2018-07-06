const express = require('express')
const app  = express()
const port = process.env.PORT || 3001;
app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`)); 