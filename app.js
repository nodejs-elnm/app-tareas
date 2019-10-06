const argv = require('./configValues/yargs').argv;
const tareas = require('./to-do/to-do');
const color = require('colors');

let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = tareas.crear( argv.name );
        console.log(tarea);
        break;

    case 'listar':
        let ts = tareas.getlistado( argv.tipo );

        console.log('Tarea | Estado'.green);
        for (let t of ts) {
            console.log(`${ t.name } | ${ t.completado }`);
        }
        break;

    case 'update':
        let res = tareas.update(argv.name, argv.completado);
        console.log(res);
        break;

    case 'delete':
        let del = tareas.borrar(argv.name);
        console.log(del);
        break;

    default:
        console.log(`${ command } no se reconoce!`);
        break;
}