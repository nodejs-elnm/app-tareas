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

const tipo = {
    alias: 't',
    describe: 'Lista las tareas',
    choices: ['all','true','false'],
    default: 'all'
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {name})
    .command('delete', 'Crea una nueva tarea', {name})
    .command('listar', 'Crea una nueva tarea', { tipo })
    .command('update', 'Actualiza el estado de una tarea', {
       name,
       completado
    })
    .help()
    .argv;


module.exports = {
    argv
};
