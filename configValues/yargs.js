const name = {
    alias: 'n',
    describe: 'Inserta el nombre de una tarea',
    demandOption: true
};

const completado = {
    alias: 'c',
    describe: 'Establece si ha la tarea ha sido terminada',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {name})
    .command('delete', 'Crea una nueva tarea', {name})
    .command('update', 'Actualiza el estado de una tarea', {
       name,
       completado
    })
    .help()
    .argv;


module.exports = {
    argv
};
