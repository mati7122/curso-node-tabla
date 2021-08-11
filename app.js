const multiplicar = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
console.log(argv);

// console.log('base: yargs', argv.base)
// const base = 8;

multiplicar(argv.b, argv.l, argv.s)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => err)