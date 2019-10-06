const fs = require('fs');

let listadoTareas = [];

let saveDB = () => {
    let data = JSON.stringify(listadoTareas);

    fs.writeFileSync( 'db/data.json', data);
};


const loadDB = () => {

    try {
        listadoTareas = require('../db/data.json');
    } catch (error) {
        listadoTareas = [];
    }
};


const crear = ( name ) => {

    loadDB();

    let todo = {
        name,
        completado: false
    };

    listadoTareas.push(todo);

    saveDB();

    return todo;
};

const getlistado = ( tipo ) => {
    loadDB();

    let listado = [];

    switch (tipo) {
        case 'true':          
            listado = listadoTareas.filter( tarea => tarea.completado === true);
            break;
        case 'false':
            listado = listadoTareas.filter(tarea => tarea.completado === false);
            break;
        default:
            listado = listadoTareas;
            break;
    }

    return listado;
    
};

const update = (name, completado) => {
    loadDB();
    
    let index = listadoTareas.findIndex( tarea => {
        return tarea.name === name;
    });

    if (index >= 0) {
        listadoTareas[index].completado = completado;
        saveDB();
        return true;

    } else
        return false;


};

const borrar = (name) => {
    loadDB();    

    let index = listadoTareas.findIndex(tarea => {
        return tarea.name === name;
    });

    if (index >= 0) {
        listadoTareas.splice(index, 1);
        saveDB();
        return 'Eliminado';
    } else
        return 'No se ha encontrado la tarea';
};


module.exports = {
    crear,
    getlistado,
    update,
    borrar
};