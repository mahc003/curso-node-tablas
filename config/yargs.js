const argv = require('yargs')
            .options({
                'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la multiplicación'
                },
                'l': {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: false,
                    default: false,
                    describe: 'Imprime resultado en consola'
                },
                'h': {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Indica cantidad de operaciones'
                }
              })
            .check((args, options) => {
                if( isNaN( args.base )){
                    throw("La base debe ser de tipo número");
                }
                if( isNaN( args.hasta )){
                    throw("El limite debe ser de tipo número");
                }
                return true;
            })
            .argv;

module.exports = argv;