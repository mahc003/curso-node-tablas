const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();

const base = argv.base;
const listar = argv.listar;
const limite = argv.hasta;

crearArchivo(base, listar, limite)
    .then( nombreArchivo => console.log(nombreArchivo, "creado!!!"))
    .catch(err => console.log(err));
