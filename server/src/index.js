const exprerss = require('express');
const app = exprerss();
const usuario = require('./routes/usuario');
const port = process.env.PORT || 3000;

app.use(exprerss.json());

app.use('/usuario', usuario);

app.listen(port, () => console.log("servidor corriendo en el puerto " + port+ "...\n http://localhost:"+port));
