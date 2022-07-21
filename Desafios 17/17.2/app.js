

const agregarTarea = function (tarea) {
    almacenamientoTareas.push(tarea);
};

const editarTarea = function (tarea) {
    almacenamientoTareas = almacenamientoTareas.map(function(item){
        return item.codigo == tarea.codigo ? tarea : item;
    });
};

const borrarTarea = function (codigo) {
    almacenamientoTareas = almacenamientoTareas.filter(function(item){
        return item.codigo !== codigo;
    });
};

const reporteTodasTareas = function () {
    return almacenamientoTareas;
};

const reporteTareasEnCurso = function () {
    return almacenamientoTareas.filter(function(item){
        return item.estado == 'en-curso';
    });
};

const reporteTareasPendientes = function () {
    return almacenamientoTareas.filter(function(item){
        return item.estado == 'pendiente';
    });
};

const reproteTareasTerminadas = function () {
    return almacenamientoTareas.filter(function(item){
        return item.estado == 'terminada';
    });
};