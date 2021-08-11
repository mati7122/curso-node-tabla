const argv = require('yargs/yargs')(process.argv.slice(2))
    .options({
        'b':{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l':{
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe:'Muestra la tabla en consola'
        },
        's':{
            alias: 'stop',
            type: 'number',
            demandOption: true,
            describe:'Indica el límite del multiplicador'
        }
    })
    .argv;

module.exports = argv;