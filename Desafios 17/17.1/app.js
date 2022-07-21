
const tarea = function (
	codigo,
	titulo,
	descripcion,
	fechaAlta,
	deathline,
	observaciones,
	estado = "pendiente"
) {
	return {
		codigo: codigo,
		titulo: titulo,
		descripcion: descripcion,
		fechaAlta: fechaAlta,
		deathline: deathline,
		observaciones: observaciones,
		estado: estado,
	};
};


let almacenamientoTareas = [
	tarea(
		1,
		"Terminar JS Avanzado Clase 1",
		"Clase de Pescar",
		"15/02/2022",
		"15/02/2022",
        "Ninguna",
        "en-curso"
	),
    tarea(
        2,
        "Sacar al gato",
        "Sacarlo a pasear",
        "15/02/2022",
        "16/02/2022",
        "Ya el gato me mira raro"
    )
];