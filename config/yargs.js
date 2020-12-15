const opts = {
  
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en la terminal la tabla de factoriza', opts)
    .command('crear', 'genera un archivo con  la tabla de factoriza', opts)
    .help()
    .argv;


module.exports = {

    argv
}