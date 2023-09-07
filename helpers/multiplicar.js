
const fs = require('fs');
const colors = require("colors");

const crearArchivo = async(base = 5, listar, limite) => {

    let salida = `========================
      Tabla del ${ base }
========================
`;
    let consola = `========================
      Tabla del ${ colors.green(base) }
========================
`;

    for(let i =1; i <= limite; i++){
        salida += (`${base} + ${i} = ${ base * i}\n`);
        consola += (`${base} ${'+'.green } ${i} ${ '='.green } ${ base * i}\n`);

        /*if(listar){
            console.log(colors.blue(base), colors.red('*'), colors.blue(i), colors.yellow('='), colors.green((base*i)));
        }*/
    }
    if(listar){
        console.log(consola);
    }
    
    let path = './salida/';
    let nameFile = `Tabla-del-${ base}.txt`;

    try{
        fs.writeFileSync(path + nameFile, salida);
    }catch(error){
        throw error;
    }
    
    return nameFile;
}

module.exports = {
    crearArchivo
}