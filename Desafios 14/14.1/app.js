

function VerificarFlujoDeCajas()

{
	let ingresos = 0;
	let egresos = 0;

	for (let i = 0; i < flujoDeCajas.length; i++) {
		let actual = flujoDeCajas[i];
		ingresos += actual.ingresos;
		egresos += actual.egresos;    
	}

	if(ingresos > egresos)
		return 1;
	else if(ingresos < egresos)
		return -1;
	else
		return 0;
}