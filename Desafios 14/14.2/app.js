

function AgregarInteres(Ofertas)


{
	let ofertasConInteres = [];
	for (let i = 0; i < flujoDeCaja.length; i++) {
		let actual = ofertas[i];
		let interes = (actual.capital * actual.plazo * actual.tasa) / 100;
		ofertasConInteres.push({
		    nombre: actual.nombre,
		    capital: actual.capital,
		    plazo: actual.plazo,
		tasa: actual.tasa,
		interes: interes
		});    
	}
	return ofertasConInteres;
}
