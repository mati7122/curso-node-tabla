const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, option, stop) => {

    try {

        let salidaConsola = '';
        let salida = '';
        let x = stop

        for (i = 1; i <= x; i++) {
            salidaConsola += `5 x ${i}= ${base * i}\n`
            salida += `${base}`.green + colors.trap(' x ') + `${i}`.yellow + colors.red.underline(' = ') + colors.rainbow(`${base * i}\n`) 
        }

        if (option) {
            console.log(salida);
        }

        const fileName = `tabla-${base}.txt`

        fs.writeFileSync(`./output/${fileName}`, salidaConsola);

        return (fileName);
    }
    catch (err) {
        throw err
    }


    // fileName
    //     ? resolve(fileName)
    //     : reject('No fue posible crear el archivo')


}

module.exports = crearArchivo;